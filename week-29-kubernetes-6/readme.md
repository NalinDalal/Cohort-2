04.09.2024

# What we’re learning
1. HPA - Horizontal Pod Autoscaling
2. Node Autoscaling
3. Resource management

# Autoscaling the Pods on Kubernetes
## Horizontal Pod Autoscaling
- Horizontal Pod Autoscaling (HPA) is a Kubernetes feature that allows you to automatically scale the number of pods in a deployment or replica set based on CPU utilization or custom metrics.
- if you add more pods to your cluster, it means scaling `horizontally`. Horizontally refers to the fact that you havent increased the `resources` on the machine.

## Architecture
Kubernetes implements horizontal pod autoscaling as a control loop that runs intermittently (it is not a continuous process) (once every 15s)

```bash
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

```

to get the metrics->
```bash
kubectl top pod -n kube-system
kubectl top nodes -n kube-system
```

# App for Day
We’ll be creating a simple express app that does a CPU intensive task to see horizontal scaling in action.

already dockerized

# Creating the manifests
Lets try to create a deployment with hardcoded set of replicas
Create a Service
for horizontal pod accelerator-> Add HPA manifest

apply all manifest
```bash
kubectl apply -f service.yml
kubectl apply -f deployment.yml
kubectl apply -f hpa.yml
```

# Formula for Scaling Up
<figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-c2249603efd341d5b1a9ce44c532fbfe"><div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F57dc101c-f8c7-4997-a113-92c0d84b1b3c%2FScreenshot_2024-06-15_at_11.03.19_AM.png?table=block&amp;id=c2249603-efd3-41d5-b1a9-ce44c532fbfe&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div></figure>

# Resource requests and limits
When you specify a Pod, you can optionally specify how much of each resource a container needs. The most common resources to specify are CPU and memory (RAM).
There are two types of resource types

## Resource requests
The kubelet reserves at least the request amount of that system resource specifically for that container to use.

## Resource limits
When you specify a resource limit for a container, the kubelet enforces those limits so that the running container is not allowed to use more of that resource than the limit you set. 

# Difference b/w `limits` and `requests`
If the node where a Pod is running has enough of a resource available, it's possible (and allowed) for a container to use more resource than its `request` for that resource specifies. However, a container is not allowed to use more than its resource `limit`.


## Experiments
``
