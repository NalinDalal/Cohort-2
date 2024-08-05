`https://vitest.dev/` is the mildly recent entrant in the testing framework market.
It has a bunch of benefits over jest, specially has great support for TS.
So we’ll be moving to vitest for all future tests
It is highly compatable with jest
Link to why vitest - `https://vitest.dev/guide/why.html`

bootstrap with vitest

```bash
npm init -y
npx tsc --init
npm install express @types/express zod
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

run tests

```bash
npm run test
```

Add supertest

```bash
npm i supertest @types/supertest
```

update test {vitest is highly compatible with the jest api}
