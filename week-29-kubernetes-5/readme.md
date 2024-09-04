04.09.2024

# Volumes in docker
## Pretext
The following docker image runs a Node.js app that writes peridically to the filesystem - 
https://hub.docker.com/r/100xdevs/write-random

`a.js` -> `node a.js`

run the docker image with `docker run 100xdevs/write-random`
Try going to the container and seeing the contents of the container
```bash
docker exec -it container_id /bin/bash
cat randomData.txt
```

## Where is this file being stored?
The data is stored in the `docker runtime filesystem` . When the container dies, the data dies with it. This is called `ephemeral storage`


## Volumes
In Kubernetes, a Volume is a directory, possibly with some data in it, which is accessible to a Container as part of its filesystem. Kubernetes supports a variety of volume types, such as EmptyDir, PersistentVolumeClaim, Secret, ConfigMap, and others.

## Why do you need volumes?
- If two containers in the same pod want to share data/fs.
- If you want to create a database that persists data even when a container restarts (creating a DB)
- Your `pod` just needs extra space during execution (for caching lets say) but doesnt care if it persists or not.

# Types of Volumes
## Ephemeral Volume
Temporary volume that can be shared amongst various containers of a pod.  When the pods dies, the volume dies with it. For example - 
1. ConfigMap
2. Secret
3. emptyDir

## Persistent Volume
A Persistent Volume (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes. It is a resource in the cluster just like a node is a cluster resource. PVs are volume plugins like Volumes but have a lifecycle independent of any individual Pod that uses the PV. This API object captures the details of the implementation of the storage, be that NFS, iSCSI, or a cloud-provider-specific storage system.

## Persistent volume claim
A Persistent Volume Claim (PVC) is a request for storage by a user. It is similar to a Pod. Pods consume node resources and PVCs consume PV resources. Pods can request specific levels of resources (CPU and Memory). Claims can request specific size and access modes (e.g., can be mounted once read/write or many times read-only).

# Ephemeral volumes
A lot of times you want two containers in a pod to share data. But when the pods dies, then the data can die with it. 
- Create a manifest that starts two pods which share the same volume(manifest.yml)
- Apply the manifest(`kubectl apply -f kube.yml`)
- check the container logs(`kubectl exec -it shared-volume-deployment-74d67d6567-tcdsl --container reader sh `)

# Persistent volumes
Just like our kubernetes cluster has `nodes` where we provision our `pods`. We can create `peristent volumes` where our `pods` can `claim` storage.
Persistent volumes can be provisioned statically or dynamically.
 
## Creating a pv and pvc
pv.yml file
```yaml
kubectl apply -f pv.yml
kubectl get pv
```

create a pod-> mongo.yml

## Try it out


now Put some data in mongodb
```bash
kubectl apply -f mongo.yml
kubectl exec -it mongo-pod -- mongo
use mydb
db.mycollection.insert({ name: "Test", value: "This is a test" })
exit
```

Delete and restart the pod


```bash
kubectl delete pod mongo-pod
kubectl apply -f mongo.yml
```

Check if the data persists

```bash
kubectl exec -it mongo-pod -- mongo
use mydb
db.mycollection.find()
```

# Automatic pv creation
- Create a persistent volume claim with storageClassName set to `vultr-block-storage-hdd`
- Apply the pod manifest
- Explore the resources created
```bash 
kubectl get pv
kubectl get pvc
kubectl get pods
```
- Put some data in mongodb

```bash
kubectl exec -it mongo-pod -- mongo
use mydb
db.mycollection.insert({ name: "Test", value: "This is a test" })
exit
```

- Delete and restart the pod


```bash
kubectl delete pod mongo-pod
kubectl apply -f mongo.yml
```

- Check if the data persists

```bash
kubectl exec -it mongo-pod -- mongo
use mydb
db.mycollection.find()
```
