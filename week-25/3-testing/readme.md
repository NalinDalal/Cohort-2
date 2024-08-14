bootstrap the repo with typescript

mkdir src, create a index.ts, compile it down

but testing can be done in more clean way

add ts-jest as dependency

```bash
npm install --save-dev ts-jest @jest/globals
```

initialise the jest config

```bash
npx ts-jest config:init
```

update package.json with jest config

mkdir for tests
write some test-cases there
