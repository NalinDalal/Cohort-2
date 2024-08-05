Let’s say we have an express app that doesnt have any DB connections

- Initialize a simple TS project

```bash
npm init -y
npx tsc --init
```

Change rootDir and srcDir

```json
"rootDir": "./src",
"outDir": "./dist",
```

Add dependencies

```bash
npm install --save-dev ts-jest  @jest/globals @types/express
npm i supertest @types/supertest
npm install express
```

Initialize jest.config.ts

```bash
npx ts-jest config:init
```

create a `src/index.ts` file

update `package.json` file

```json
"scripts": {
    "test": "jest"
}
```

add a `src/test/sum.test.ts` file

update `jest.config.js` file

```js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/tests/**/*.ts"],
};
```

to run the test -> `npm run test`
