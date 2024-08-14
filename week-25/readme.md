# Unit tests vs integration tests vs end to end tests

## Unit tests

If you mock out external services (DBs, kafka, redist), then you’re testing just the functionality of the method. These are called unit tests

## Integration tests

If you don’t mock out these services but actually start them locally, then it is considered an integration test

## End to end tests

If you have a full stack app and you actually open a browser and test things, it’s called an end to end test

# Integration tests

While `unit tests` are great, they mock out a lot of external services (DB, cache, message queues …). This is great for testing the functionality of a function in isolation.
Integration tests are used to test how all `integrated components` work together.
This means you have to start all auxilary services before running your tests and you `DONT` mock out any external service calls

## Downsides

1. Slower to execute
2. Add complexity
3. Local development setup if required for a developer (things like docker)

# Pre-requisites

Before we write an integration test, we should write the code that

1. Brings up the external services
2. Seeds data in there
3. Brings down the service when the test suite succeeds/fails

## Express + prisma app

```bash
npm init -y
npx tsc --init


npm i express @types/express prisma
npx prisma init
```

Update schema

```bash
npx prisma generate
```

add a `index.ts`, `bin.ts` file

start docker locally, same cred in .env and docker-compose

```bash
docker run -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword  -d postgres
```

update .env file

Migrate the DB

```bash
npx prisma migrate dev
```

Generate the client

```bash
npx prisma generate
```

run the process

```bash
tsc -b
node dist/bin.js
```

go to postman hit the endpoint-> `http://localhost:3000/sum`
send `{"a": 10, "b": 20}`

# Bootstraping Integration tests in vitest

Add vitest as a dependency

```bash
npm i vitest
```

Add a docker-compose with all your external services; make sure it has same credentials as the one in .env

Create `src/tests/helpers/reset-db.ts`

```bash
docker compose up
```

Create a new script `scripts/run-integration.sh`

```bash
docker-compose up -d
```

Bring in `wait-for-it.sh` locally in `scripts/wait-for-it.sh`

```bash
curl https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -o scripts/wait-for-it.sh
brew install coreutils && alias timeout=gtimeout
```

make the scripts excutable

```bash
chmod +x scripts/*
```

update `scripts/run-integration.sh`
Update `package.json`

# Adding integration tests

Install supertest

```bash
npm i -D supertest @types/supertest
npm install supertest --save-dev

```

Add `src/tests/sum.test.ts`

Run the test-> `npm run test`

## beforeEach

If you want to clear the DB between tests/descibe blocks, you can use the beforeEach function

## beforeAll

If you want certain code to run before all the tests (but not before every individual test), you can use the beforeAll function

# CI/CD pipeline

- Add a .env.example
  `DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"`

- Add `.github/workflows/test.yml`
