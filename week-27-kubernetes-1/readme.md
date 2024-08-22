Kubernetes (popularly known as k8s) is a `container orchestration engine`, which as the name  suggests lets you create, delete, and update `containers`.

This is useful when
1. You have your docker images in the docker registry and want to deploy it in a `cloud native` fashion
2. You want to `not worry about patching, crashes`. You want the system to `auto heal`
3. You want to autoscale with some simple constructs
4. You want to observe your complete system in a simple dashboard

# Before Kubernetes
                ---------------->BackEnd EC2 machine
Load balancer=
(Backend)
                ---------------->BackEnd EC2 machine

FrontEnd(Next.js)-> EC2 machine

FrontEnd(React.js)-> CDN-> S3 bucket

# After kubernetes
Your frontend, backend are all `pods` in your `kubernetes cluster`

Cluster: A Kubernetes cluster is a set of nodes (physical or virtual machines) that run containerized applications. It consists of a master node that manages the cluster, and worker nodes where the applications (in containers) are deployed.
A bunch of worker nodes + master nodes make up your `kubernetes cluster` . You can always add more / remove nodes from a cluster.

Pods: A pod is the smallest and simplest Kubernetes object. It represents a single instance of a running process in the cluster. A pod can contain one or more containers that share resources like storage and network. Pods are scheduled onto nodes in the cluster and can be replicated for scaling and resilience purposes.

Nodes: In kubernetes, you can create and connect various machines together, all of which are running kubernetes. Every machine here is known as a node

Master Node (Control pane) - The node that takes care of deploying the containers/healing them/listening to the developer to understand what to deploy
Worker Nodes - The nodes that actually run your Backend/frontend


Container in Docker == Pod in Kubernetes
but the Pod can have multiple containers

Pods exist inside a node

`Cluster> Nodes> Pods> Containers>images`


# Creating a k8s cluster
 
Locally (Make sure you have docker)
minukube
kind - `https://kind.sigs.k8s.io/docs/user/quick-start/`

1. Install Go : 
2. Install Kind: `go install sigs.k8s.io/kind@v0.24.0`

Via Brew-> `brew install kind`

Single node setup
Create a 1 node cluster-> make sure you have docker installed and running
```bash
kind create cluster --name local
```

starts a docker container 

You can now use your cluster with:
```bash
kubectl cluster-info --context kind-local
```
output-> `Kubernetes control plane is running at https://127.0.0.1:53268
CoreDNS is running at https://127.0.0.1:53268/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy`

to delete the cluster-> `kind delete cluster -n local`

## Multi node setup
Create a `clusters.yml` file
delete the cluster if it already exists
```bash
kind delete cluster
```

```bash
 kind create cluster --config clusters.yml --name local
```

now check the docker containers
```bash
> docker ps
CONTAINER ID   IMAGE                  COMMAND                  CREATED          STATUS          PORTS                       NAMES
7524c73d732b   kindest/node:v1.31.0   "/usr/local/bin/entr…"   57 seconds ago   Up 55 seconds   127.0.0.1:53338->6443/tcp   local-control-plane
7591410063e1   kindest/node:v1.31.0   "/usr/local/bin/entr…"   57 seconds ago   Up 55 seconds                               local-worker2
90df95b70ee3   kindest/node:v1.31.0   "/usr/local/bin/entr…"   57 seconds ago   Up 55 seconds                               local-worker

```

A Api server is running on port 6443

to store the kubernetes configuration
```bash
cat ~/.kube/config
```

from aws put the credentials into this file

# kubectl
kubectl is a command-line tool for interacting with Kubernetes clusters. It provides a way to communicate with the Kubernetes API server and manage Kubernetes resources.

now to interact with it install `kubectl`
````bash
brew install kubectl
````

Ensure kubectl works fine
```bash
 kubectl get nodes
 kubectl get pods
```

# Starting an Image Using Docker
```bash 
docker run -p 3005:80 nginx
```

# Creating a Pod using K8s
```bash
kubectl run nginx --image=nginx --port=80
```

check status
```bash 
kubectl get pods
```

check the logs
```bash
kubectl logs nginx
```

decribing the pod
```bash
kubectl describe pod nginx
```

# Stop a pod
```bash
 kubectl delete pod nginx
```

# Check the current state of pods
```bash
kubectl get pods
```

# Kubernetes manifest
A manifest defines the desired state for Kubernetes resources, such as Pods, Deployments, Services, etc., in a declarative manner. 
```bash
kubectl run nginx --image=nginx --port=80
```
manifest-> manifest.yml file

Applying the manifest-> `kubectl apply -f manifest.yml`
Delete the pod-> `kubectl delete pod nginx`
