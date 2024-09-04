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

