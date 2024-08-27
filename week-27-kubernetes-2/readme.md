23.08.2024

What we did yesterday
1. Cluster 
2. Nodes
3. Images
4. Containers
5. Pods

What we're doing today
1. Deployments
2. Replicasets
3. Services (NodePort and Loadbalancer)
4. Deploying our app on the internet (vultr)

Go to ![Vultr](https://my.vultr.com/deploy/)

# Deployment
A Deployment in Kubernetes is a higher-level abstraction that manages a set of Pods and provides declarative updates to them. It offers features like scaling, rolling updates, and rollback capabilities, making it easier to manage the lifecycle of applications.
 

- Pod: A Pod is the smallest and simplest Kubernetes object. It represents a single instance of a running process in your cluster, typically containing one or more containers.

- Deployment: A Deployment is a higher-level controller that manages a set of identical Pods. It ensures the desired number of Pods are running and provides declarative updates to the Pods it manages.
 
main features:
- starting pods 
- rolling them back 
- updating pods
- bringing them back up

check running pods-> `kubectl get pods`

## Create a Deployment
Lets create a deployment that starts 3 pods
blueprint of the deployment
deployment.yaml

apply the deployment
```bash
kubectl apply -f deployment.yml
```

get the deployment
```bash
kubectl get deployment
```

Deployment => replicaset => 3 pods

delete the deployment-> all pods will be deleted
```bash
kubectl delete deployment <deployment-name>
```

# Replicaset
ReplicaSet is a higher-level controller that ensures a specified number of pod replicas are running at any given time.
Let’s not worry about deployments, lets just create a replicaset that starts 3 pods. Create `rs.yml`

- Apply the manifest
```bash
kubectl apply -f rs.yml
```

- Get the replicaset
```bash
kubectl get rs
```

- Check the pods
```bash
kubectl get pods
```

- Try deleting a pod and check if it self heals
```bash
kubectl delete pod <pod-name>
```
```bash
kubectl delete pod nginx-replicaset-fl64r
kubectl get pods
```

- Try adding a pod with the `app=nginx`
```bash
kubectl run nginx-pod --image=nginx --labels="app=nginx"
```

# How to expose the app?
Services expose a set of pods as a network service with stable IP addresses.
wont be able to access the app from outside the cluster
restart a deployment> Apply the configuration> Get all pods


The IPs that you see are private IPs . You wont be able to access the app on it

# Services
In Kubernetes, a "Service" is an abstraction that defines a logical set of Pods and a policy by which to access them. Kubernetes Services provide a way to expose applications running on a set of Pods as network services. Here are the key points about Services in Kubernetes:

1. Pod Selector: Services use labels to select the Pods they target. A label selector identifies a set of Pods based on their labels.

2. Service Types:
    - ClusterIP: Exposes the Service on an internal IP in the cluster. This is the default ServiceType. The Service is only accessible within the cluster.
    - NodePort: Exposes the Service on each Node’s IP at a static port (the NodePort). A ClusterIP Service, to which the NodePort Service routes, is automatically created. You can contact the NodePort Service, from outside the cluster, by requesting <NodeIP>:<NodePort>.
    - LoadBalancer: Exposes the Service externally using a cloud provider’s load balancer. NodePort and ClusterIP Services, to which the external load balancer routes, are automatically created.

3. Endpoints: These are automatically created and updated by Kubernetes when the Pods selected by a Service's selector change.

Create service.yml, kind.ym(few extra ports exposed)
```bash
kubectl apply -f deployment.yml
kubectl apply -f service.yml
```

Visit `localhost:30007`

## Types of services
1. ClusterIP
2. NodePort
3. Loadbalancer

# Loadbalancer service
In Kubernetes, a LoadBalancer service type is a way to expose a service to external clients. When you create a Service of type LoadBalancer, Kubernetes will automatically provision an `external` load balancer from your cloud provider (e.g., AWS, Google Cloud, Azure) to route traffic to your Kubernetes service

- Creating a kubernetes cluster in vultr

- Create deployment.yml

- Apply deployment

- Create `service-lb.yml`

- Apply service-lb.yml -> ` kubectl apply -f service-lb.yml`

- Check the service on dashboard

- Check the external IP
