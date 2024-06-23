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

Workflow->
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
