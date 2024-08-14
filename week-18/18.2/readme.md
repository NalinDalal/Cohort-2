# CI/CD

## CI/Continuous Integration

Continuous Integration (CI) is a development practice where developers frequently integrate their code changes into a shared repository, preferably several times a day. Each integration is automatically verified by

1. Building the project and
2. Running automated tests.
   This process allows teams to detect problems early, improve software quality, and reduce the time it takes to validate and release new software updates.

## Continuous Deployment

As the name suggests, deploying your code `continuously` to various environments (dev/stage/prod)

You don’t really need Docker here, since it’s deploying on a simple EC2 server.
If you deploy to

1. GCP App runner
2. ECS
3. Kubernetes
   then it makes more sense to deploy a `dockerised`

## CI Workflow->

new commit->Github->start on ubuntu machine->

1. Clone the repo (https://github.com/100xdevs-cohort-2/week-18-2-ci-cd.git)
2. Dockerize it
3. Push it to Dockerhub
4. Pushes it to EC2

Clone the monorepo, 3 part-> bank-webhook, merchant-app, user-app

commands->

```bash
git clone https://github.com/100xdevs-cohort-2/week-18-2-ci-cd.git
week-18-2-ci-cd
rm -rf .git
npm install
npm run build
```

create a new folder `.github/workflows` and create a new file `build.yml`
add content in it

now create another branch and add a commit like generally make a "index.html" file and push it to your repo. create the pull request
a workflow starts on the github repo

CI Pipeline done

## CD Workflow->

Create dockerfiles for the `apps` you have
Create `docker/Dockerfile.user`

create a root folder 'docker'
add different docker files

Add start-user-app script to the root `package.json`

```bash
cp ./docker/Dockerfile.user ./Dockerfile
docker build -t mynextapp .
docker run -p 3000:3000 mynextapp
```

or we have

```bash
docker build -t mynextapp -f docker/Dockerfile.user .
```

we have a application running

## building CD Pipeline ->

create a repo on docker hub and push it to docker hub
generate some credentials go to account settings >security >generate new token

now run the steps given `docker login  -u nalindalal2004` then the password

go to repo, setting, secret and variable>actions>new secret
put the name `docker_username` in it with the value as `nalindalal2004`> add secret
another repo secret> put the name `docker_password` in it with the value as new access token which will be created> add secret

go to .github/workflows/deploy.yml and add the code

## Let’s pull the docker image

Ref - https://github.com/appleboy/ssh-action

again that stuff for ec2 machine on aws, assume fresh server
install docker in it and run it

- Create an ec2 server
  - Download its keypair file
  - Allow http/https traffic
  - Ubuntu base image
- Download docker on the machine
  - https://docs.docker.com/engine/install/ubuntu/
  - sudo docker run hello-world
- Update workflow to pull the latest image on the ec2 machine
- Point userapp.your_domain.com to the IP of the server
- Add nginx reverse proxy to forward requests from userapp.your_domain.com to port on which the app is running

```nginx

server {
        server_name userapp.100xdevs.com;

        location / {
            proxy_pass http://localhost:3005;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;


                # Basic Authentication
                auth_basic "Restricted Content";
                auth_basic_user_file /etc/nginx/.htpasswd;
        }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/userapp.100xdevs.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/userapp.100xdevs.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
```

Install certbot and Refresh certificate

```bash
sudo certbot --nginx
```
