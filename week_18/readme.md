## Get comfortable with the repo

Our starter repo is this - https://github.com/100xdevs-cohort-2/week-17-final-code

Let’s setup the repo locally before we proceed
Clone the repo

```bash
git clone
```

```bash
npm install
```

Run postgres either locally or on the cloud (neon.tech)

```bash
docker run  -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

Copy over all .env.example files to .env
Update .env files everywhere with the right db url
Go to packages/db

```bash
npx prisma migrate dev
npx prisma db seed
```

Go to apps/user-app , run `npm run dev`
Try logging in using phone - 1111111111 , password - alice (See seed.ts)

# 18.2 | CI-CD PipeLine
