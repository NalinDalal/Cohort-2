28.04.2024 ->

Week 11.1
Serverless BackEnd
Just write code,someone else takes care of the deployment

Serverless BackEnd- "Serverless" is a backend deployment in which the cloud provider dynamically manages the allocation and provisioning of servers. The term "serverless" doesn't mean there are no servers involved. Instead, it means that developers and operators do not have to worry about the servers.

What if you could just write your express routes and run a command. The app would automatically
1. Deploy
2. Autoscale
3. Charge you on a per request, basis (rather than you paying for VMs)

Famous Providers
AWS Lambda
https://aws.amazon.com/pm/lambda/?trk=5cc83e4b-8a6e-4976-92ff-7a6198f2fe76&sc_channel=ps&ef_id=CjwKCAiAt5euBhB9EiwAdkXWO-i-th4J3onX9ji-tPt_JmsBAQJLWYN4hzTF0Zxb084EkUBxSCK5vhoC-1wQAvD_BwE:G:s&s_kwcid=AL!4422!3!651612776783!e!!g!!awslambda!19828229697!143940519541

Google Cloud Functions
https://firebase.google.com/docs/functions

Cloudflare Workers
https://workers.cloudflare.com/


------------------------------------------------------------------
## When should you use a serverless architecture?

When you have to get off the ground fast and don’t want to worry about deployments
When you can’t anticipate the traffic and don’t want to worry about autoscaling
If you have very low traffic and want to optimise for costs

Cloudflare Workers
https://workers.cloudflare.com/

Sign Up on CloudFlare
After signing up deploy a hello world script->click on link
will get a website
takes sometime to get online- ohh it works
make sure to have your url start from https://

yup works,runs similarly to node.js

deployed a todoapp-> https://worker-morning-cloud-e73a-todoapp.nalindalal2004.workers.dev/

# Localised App
``` bash
npm create cloudflare -- my-app
```
y to proceed, then type of app-> hello world worker, select typescript, select no for now for deployment

go to directory,run->
```bash
npm run dev
```
select no for now, go to mentioned url, note the function can only have one return type

deployment on internet,login into your account though terminal
```bash
npx wrangler login
```

opens a url in browser,allow from there, access given

now to deploy it
```bash
npm run deploy
```

package.json contains all details,can change the name too

we can register the domain in domain registration in user dashboard
------------------------------------------------------------------
# Using Hono
wanted to create a web application on Cloudflare Workers. But, there was no good framework that works on Cloudflare Workers, so I started building Hono and thought it would be a good opportunity to learn how to build a router using Trie tree

Working with cloudflare workers - 
 
Initialize a new app
```bash
npm create hono@latest my-app1
```
select cloudflare-workers

Move to my-app and install the dependencies.
```bash
cd my-app1
npm i
```
 
1. Hello World
```js
import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => c.text('Hello Cloudflare Workers!'))

export default app
```

## Getting inputs from user
index.ts ->
```js
import { Hono } from 'hono'

const app = new Hono()

app.post('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app
```

## Deploying 
Make sure you’re logged into cloudflare (wrangler login)
```bash
npm run deploy
```

auth middleware into my-app1->
```ts
import { Hono, Next } from 'hono'
import { Context } from 'hono/jsx';

const app = new Hono()

app.use(async (c, next) => {
  if (c.req.header("Authorization")) {
    // Do validation
    await next()
  } else {
    return c.text("You dont have acces");
  }
})

app.get('/', async (c) => {
  const body = await c.req.parseBody()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.json({msg: "as"})
})

export default app
```
------------------------------------------------------------------
# Amazon Web Services(AWS)
Sign Up with email id

VMs on AWS are called EC2 Servers
EC2 stands for Elastic compute Version 2.
Elastic - Can increase/decrease the size of the machine
Compute - It is a machine
You can spin up a new EC2 instance from the aws dashboard

## Creating Own Instance
Launch a Instance,give it a name
select any server

Under Instance Type->select min one(t2.micro)
KeyPair Login-> to connect with the cloud server
must create one,give it a name and create one
should be kept private,must not be shared


create a application,check all things,select no of instance as 1,
launch of instance,can edit instances thru inbound rules

## SSH into Server
1. Give ssh key permissions,ssh into a machine
```bash
chmod 700 kirat-class.pem
```

2. ssh into machine
```bash
ssh -i kirat-class.pem ubuntu@ec2-65-0-180-32.ap-south-1.compute.amazonaws.com
```

3. Clone repo
```bash
git clone https://github.com/hkirat/sum-server
```
If your aws machine shows you the following error, your aws machine doesn’t have access to the internet
Solution - https://www.tecmint.com/resolve-temporary-failure-in-name-resolution/


4. Install Node.js
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04

5. Install all dependencies
```bash
cd sum-server
npm install
```

6. Start backend
```bash
node index.js
```

##  - Install the repo
Clone the repo
```bash
https://github.com/hkirat/sum-server
```
can get the domain name,ip of site from aws

7. Try hitting the server
You have an ip/DNS that you can hit to access your ec2 server
Try visiting the backend
```bash
your_domain:3000
```

Security group
You can either open port 8080, or process on port 80
port range=80 on aws

http://your_domain:8080
very ugly to provide the site
to purchase domain-> https://domains.squarespace.com/

## nginx
https://www.nginx.com/resources/glossary/nginx/
NGINX is open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more. It started out as a web server designed for maximum performance and stability. In addition to its HTTP server capabilities, NGINX can also function as a proxy server for email (IMAP, POP3, and SMTP) and a reverse proxy and load balancer for HTTP, TCP, and UDP servers.

only for reverse proxying
2 server-> be1.100xdev.com,be2.100xdev.com
be1 hits on 8081
be2 on 8082

Installing nginx
```bash
sudo apt update
sudo apt install nginx
```

This should start a nginx server on port 80
Try visiting the website


 now adding the domain->
copy the ip of ec2 machine
go to domain provider(like godaddy,domain.google)
go to dns(domain name system)
select name,selet 'A' as the type, paste the ip,
save the instance

## Create reverse proxy
```bash
sudo rm sudo vi /etc/nginx/nginx.conf
sudo vi /etc/nginx/nginx.conf
```

```js
events {
    # Event directives...
}

http {
	server {
    listen 80;
    server_name be1.100xdevs.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
	}
}
```

restart the config->
```bash
sudo nginx -s reload
```
 
Start the Backend server
```bash
node index.js
```

Visit the website
https://be1.100xdevs.com/

--------------------------------------------------------------------------------------------------------------------------------
# Certificate Management
