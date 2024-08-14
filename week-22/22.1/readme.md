# 22.1 | Horizontal and vertical scaling, Indexes in DBs

19.07.2024

## What we’re discussing

## Server

    1. Cluster module and horizontal scaling ✅
    2. Capacity Estimation, ASGs and Vertical scaling ✅
    3. Load balancers ✅

## Database

    1. Indexing ✅
    2. Normalization
    3. Sharding

AWS Ec2 machine => c5.xlarge => c5.4 xlarge
Vertical Scaling - vertically scale the machine, i.e. increase it's specs/resources like ram, cpu etc
Horizontal Scaling - increase number of server

## Vertical scaling

Vertical scaling means increasing the size of your machine to support more load
Single-threaded programming languages execute code sequentially, while multi-threaded languages allow multiple threads to run concurrently

### Single Thread

<figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-a7e4b92edcf1440e93ed1d1f32cd4aac"><div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fae98c9ad-e9b4-42ea-ad01-fbb78c82a0d6%2FScreenshot_2024-04-27_at_8.35.23_AM.png?table=block&amp;id=a7e4b92e-dcf1-440e-93ed-1d1f32cd4aac&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div></figure>

### Multi Thread

<figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-b3a3c9ef68734a6c80cb724a22f4ac14"><div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F8e8edb94-37d5-4fe7-9047-7f950e0776c7%2FScreenshot_2024-04-27_at_8.36.13_AM.png?table=block&amp;id=b3a3c9ef-6873-4a6c-80cb-724a22f4ac14&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div></figure>

#### Node.js

Let’s run an infinite loop in a JS project and see how our CPU is used. `a.js`
One of core is handling this `a.js` file

# Implementing vertical scaling in Node.js project

You can start multiple node projects then? If there are 8 cores, then just start 8 projects?

```bash
node index.js
node index.js
node index.js
node index.js
node index.js
node index.js
node index.js
node index.js
```

This, ofcourse has a lot of problems 1. Just ugly to do this, keep track of the processes that are up and down 2. Processes will have port conflicts, you’ll have to run each process on a saparate port

This is where the `cluster module` comes into the picture

b.js file

```bash
 node b.js

```

output->

```bash
Number of CPUs is 8
Primary 2637 is running
Worker 2638 started
Worker 2641 started
Worker 2640 started
Worker 2639 started
App listening on port 3000
Worker 2644 started
Worker 2642 started
App listening on port 3000
App listening on port 3000
App listening on port 3000
App listening on port 3000
App listening on port 3000
Worker 2646 started
App listening on port 3000
Worker 2645 started
App listening on port 3000
```

in other terminal -> `curl http://localhost:3000/api/1000`
output-> `Final count is 500500 2638%`

# Capacity estimation

This is a common system design interview where they’ll ask you 1. how would you scale your server 2. how do you handle spikes 3. How can you support a certain SLA given some traffic

Answer usually requires a bunch of 1. paper math 2. Estimating requests/s 3. Assuming / monitoring how many requests a single machine can handle 4. Autoscaling machines based on the load that is estimated from time to time

<h4 class="notion-h notion-h3 notion-h-indent-0 notion-block-79105b7a59a5459a922b0e71c72c79f4" data-id="79105b7a59a5459a922b0e71c72c79f4"><span><div id="79105b7a59a5459a922b0e71c72c79f4" class="notion-header-anchor"></div><a class="notion-hash-link" href="#79105b7a59a5459a922b0e71c72c79f4" title="Example #1 - PayTM app"><svg viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><span class="notion-h-title">Example #1 - PayTM app</span></span></h4>
<figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-673dc0b887b24b3fa4ba3ccfe0f005ec"><div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fdff20844-e04e-48c3-a735-28c4cb505441%2FScreenshot_2024-04-27_at_9.38.51_AM.png?table=block&amp;id=673dc0b8-87b2-4b3f-a4ba-3ccfe0f005ec&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div></figure>

<h4 class="notion-h notion-h3 notion-h-indent-0 notion-block-f1ce12086ac846f1b1fcc646212e9324" data-id="f1ce12086ac846f1b1fcc646212e9324"><span><div id="f1ce12086ac846f1b1fcc646212e9324" class="notion-header-anchor"></div><a class="notion-hash-link" href="#f1ce12086ac846f1b1fcc646212e9324" title="Example #2 - Chess app"><svg viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><span class="notion-h-title">Example #2 - Chess app</span></span></h4>
<figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-49d2fd6467a74f438c65d64886944115"><div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F611e5d41-e3af-48a0-aab9-f3abd0546c0a%2FScreenshot_2024-04-27_at_9.43.36_AM.png?table=block&amp;id=49d2fd64-67a7-4f43-8c65-d64886944115&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div></figure>
