run the deployment.yml file, you know to get started.

# Services
Services let you actually expose your app over the internet.

# Downsides of services
Services are great, but they have some downsides - 

### Scaling to multiple apps
1. If you have three apps (frontend, backend, websocket server), you will have to create 3 saparate services to route traffic to them. There is no way to do centralized traffic management (routing traffic from the same URL/Path-Based Routing) 

2. There are also limits to how many load balancers you can create

## Multiple certificates for every route
You can create certificates for your `load balancers` but you have to maintain them outside the cluster and create them manually
You also have to update them if they ever expire

## No centralized logic to handle `rate limitting` to all services
Each load balancer can have its own set of rate limits, but you cant create a `single rate limitter` for all your services. 

Here is a sample manifest that you can run to start two saparate deployments and attach them to two saparate LoadBalancer services
manifest.yml->then run
```bash
kubectl apply -f manifest.yml
```

# Ingress and Ingress Controller
An API object that manages external access to the services in a cluster, typically HTTP.
Ingress may provide load balancing, SSL termination and name-based virtual hosting.

`Ingress` exposes HTTP and HTTPS routes from outside the cluster to `services` within the cluster. Traffic routing is controlled by rules defined on the Ingress resource.

1. Deploymebnt (Fe)
2. Deploymebt (be)
3. ClusterIP service(fe)
4. ClusterIP service(be)
5. Ingress

# Namespaces
In Kubernetes, a namespace is a way to divide cluster resources between multiple users/teams. Namespaces are intended for use in environments with many users spread across multiple teams, or projects, or environments like development, staging, and production.
When you do `kubectl get pods` it gets you the pods in the default namespace.

- Create a new namespace:`kubectl create namespace backend-team`
- List all namespaces: `kubectl get namespaces`
- Switch to a namespace: `kubectl config set-context --current --namespace=backend-team`
- Get all pods in the namespace:`kubectl get pods -n my-namespace`

- Create the manifest for a deployment in the namespace
- Apply the manifest - `kubectl apply -f deployment-ns.yml`
- Get the deployments in the namespace - `kubectl get deployment -n backend-team`
- Get the pods in the namespace - `kubectl get pods -n backend-team`
- Set the default context to be the namespace - `kubectl config set-context --current --namespace=backend-team`
- Try seeing the pods now - `kubectl get pods`
- Revert back the kubectl config - `kubectl config set-context --current --namespace=default`
- Get all pods in all namespaces - `kubectl get pods --all-namespaces`
- Describe the pods - `kubectl describe pods <pod-name>`

# Install the nginx ingress controller
Add the ingress-nginx chart
```bash 
brew install helm
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm install nginx-ingress ingress-nginx/ingress-nginx --namespace ingress-nginx --create-namespace
```

check if any pods are running - ` kubectl get pods -n ingress-nginx`

You will notice that if you use `helm`  to install the nginx-ingress-controller, it creates a `Loadbalancer` service for you.
```bash
kubectl get services --all-namespaces
NAMESPACE       NAME                                               TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)                      AGE
default         apache-service                                     LoadBalancer   10.96.208.64    <pending>     80:31417/TCP                 37m
default         kubernetes                                         ClusterIP      10.96.0.1       <none>        443/TCP                      47h
default         nginx-service                                      LoadBalancer   10.96.196.69    <pending>     80:30001/TCP                 47h
ingress-nginx   nginx-ingress-ingress-nginx-controller             LoadBalancer   10.96.107.6     <pending>     80:31059/TCP,443:31317/TCP   69s
ingress-nginx   nginx-ingress-ingress-nginx-controller-admission   ClusterIP      10.96.233.137   <none>        443/TCP                      69s
kube-system     kube-dns                                           ClusterIP      10.96.0.10      <none>        53/UDP,53/TCP,9153/TCP       47h
````

This routes all the traffic to an `nginx pod`

```bash
kubectl get pods -n ingress-nginx
NAME                                                      READY   STATUS    RESTARTS   AGE
nginx-ingress-ingress-nginx-controller-6c68c7866f-85xjh   1/1     Running   0          116s
```

This means the first part of our `ingress deployment` is already created
`kubectl get svc -n ingress-nginx`-> check for LoadBalancer

let's settle back to the default namespace
```bash
kubectl config set-context --current --namespace=default
```

get the deployments and delete them
```bash
kubectl get deployments
kubectl delete deployment nginx-deployment apache-deployment
```

get all service and delete one of it
```bash
kubectl get services
kubectl delete service nginx-service
```

open the vultr dashboard and select the load balancer service, open the required one, copy the ip, paste in host file
`sudo vi /etc/hosts`
`ping domain.com`

go to `domain.com/apache` can get the apache page
go to `domain.com/nginx` can get the nginx page

# Ingress Controller
An Ingress Controller is a specific type of Kubernetes workload that watches for Ingress resources and implements the rules specified in those resources. 
It typically runs as a pod within the cluster and is responsible for configuring a load balancer or proxy to route traffic to the appropriate services based on the Ingress rules. 
Examples of Ingress Controllers include NGINX Ingress Controller, Traefik, and Istio.

## Traefik Ingress Controller
Traefik is another popular ingress controller. Let’s try to our apps using it next

- Install traefik ingress controller using helm
```bash
helm repo add traefik https://helm.traefik.io/traefik
helm repo update
helm install traefik traefi/traefik --namespace traefik --create-namespace
```

- Make sure an ingressClass is created for traefik
```bash
 kubectl get IngressClass
```

- Notice it created a `LoadBalancer` svc for you
```bash
 kubectl get svc -n traefik
 ```

- Create a Ingress that uses the traefik ingressClass and traefik annotations (traefik.yml)

- Add an entry to your /etc/hosts  (IP should be your loadbalancer IP)
```
65.20.90.183    traefik-domain.com
```

# ConfigMap
A ConfigMap is an API object used to store non-confidential data in key-value pairs. Pods can consume ConfigMaps as environment variables, command-line arguments, or as configuration files in a volume.
A ConfigMap allows you to decouple environment-specific configuration from your container images, so that your applications are easily portable.

## Create a ConfigMap
- create the manifest(cm.yml)
- apply the manifest - `kubectl apply -f cm.yml`
- get the configmap - ` kubectl describe configmap ecom-backend-config`

## Creating an express app that exposes env variables
Express app code
Deploy to dockerhub
Run using Docker Locaaly-> ` docker run -p 3003:3000 -e DATABASE_URL=asd  100xdevs/env-backend`
go to `localhost:3003` and see the env variables


## using K8s locally
- Create the manifest (express-app.yml)
- apply the manifest - `kubectl apply -f express-app.yml`
- Create the service (express-service.yml)
- apply the service - `kubectl apply -f express-service.yml`
--------------------------------------------------------------------------------------------------------------------------------------------------
Over
