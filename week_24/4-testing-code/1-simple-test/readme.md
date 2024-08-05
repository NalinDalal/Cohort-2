Initialize a simple TS project

```bash
npm init -y
npx tsc --init
```

Change rootDir and srcDir

```ts
"rootDir": "./src",
"outDir": "./dist",
```

Create `src/index.ts`

Add ts-jest as a dependency

```bash
npm install --save-dev ts-jest  @jest/globals
```

Initialize jest.config.ts

```bash
npx ts-jest config:init
```

Update package.json

```json
"scripts": {
    "test": "jest"
},
```

Add tests (index.test.ts) in src/test folder itself

```ts
import { describe, expect, test } from "@jest/globals";
import { sum } from "../index";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
```

Run `npm run test`
