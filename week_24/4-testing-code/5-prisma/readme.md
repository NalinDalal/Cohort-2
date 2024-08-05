bootstrap with vitest

```bash
npm init -y
npx tsc --init
npm install express @types/express zod
npm install supertest --save-dev
npm i -D vitest
```

update tsconfig.json

```json
"rootDir": "./src",
"outDir": "./dist"
```

create `src/index.ts` file

install vitest-> `npm i -D vitest`

add simple `test/index.test.ts` file

add script to `package.json` ->

```json
"test":"vitest"
```

When spaking of adding external services to backend, we can:

1. Mock out the external service calls (unit tests).
2. Start the external services when the tests are running and stop them after the tests end (integration/end to end tests)

```bash
npm i prisma
npx prisma init
```

add some schemas to `prisma/schema.prisma`

generate the client

```bash
npx prisma generate
```

see we didn't needed the actual database

Create `src/db.ts` which exports the prisma client. This is needed because we will be mocking this file out eventually
mocking can also be taken as `fake connecting to a database`

update `index.ts` to import the prisma client

now to run the test->

```bash
npm run test
```

## Deep mocking

Another way to mock variables is to let vitest figure out the types and mock out all the attributes of the object being mocked.
For example, the prismaClient object has a lot of functions -

```ts
console.log(Object.keys(prismaClient));
```

- Install vitest-mock-extended

```bash
npm i -D vitest-mock-extended
```

- Create `__mocks__/db.ts`

- Remove the `mock` we added in `index.test.ts` , simply add a `vi.mock("../db")

- Run the Tests

## Mocking return values

You can mock the values returned from a `mock` by using `mockResolvedValue`

Update index.test.ts
added the mockResolvedValue in `POST /sum`

# Spys vs Mocks

While `mocks` let you `mock` the functionality of a function call, spies let you `spy` on function calls.
Right now, we’ve mocked out the database call. Which means even if I pass in wrong inputs to the `prismaClient.user.create` function, tests would still pass

This means our tests are flaky. They succeed even when the code is incorrect.

## Solution

Let’s put a `spy` on the `prismaClient.sum.create` function which ensures that the db call inputs are correct

# Add a CI/CD Pipleline

Create a CI/CD pipeline that runs npm run test
Create .github/workflows/test.yml
