# 20.1 | OpenApi Spec

Write down structure of BackEnd,
When you create backend, it's very hard for other people to know the exact shape of your routes
Wouldn't it be nice if you could describe, in a single file the shape of your routes?

If you have this single long file that lists all your routes, you could

1. Auto generate documentation pages (Ref https://binance-docs.github.io/apidocs/spot/en/#query-current-order-count-usage-trade)
2. Auto generate `clients` in various languages (Java, JS, Go...)
3. Let the world look at your API routes shape without actually opening your code
4. Let Als know how to `hit` your APls in a single file, without sharing your code with the AI

# What is the OpenAPI Spec

The OpenAPI Specification (OAS) is a standard, language-agnostic interface to RESTful APls which allows both humans and computers to discover and
understand the capabilities of a service without access to source code, additional documentation, or network traffic inspection. When properly
defined via OpenAPi, a consumer can understand and interact with the remote service with minimal implementation logic.

Developed initially by Swagger, and later donated to the OpenAPI Initiative under the Linux Foundation, the OpenAPI Specification has become a
widely adopted industry standard for defining and using APls.

See we can define it like a json file, based on a express file
we auto generate it

```bash
npm init
npx tsc --init
touch index.ts
npm i express @types/express
```

run the file

```bash
tsc
node index.js
```

we will find some json on localhost:3000

Now what is Openapispec

```bash
touch openapispec.yaml
```

# How to create a spec

1. Write it by hand (bad, but still happens)
2. Auto generate it from your code
   1. Easy in languages that have deep types like Rust
   2. Slightly harder in languages like Go/Rust
   3. Node.js has some libraries/codebases that let you do it
      1. With express - https://www.npmjs.com/package/express-openapi (highly verbose)
      2. Without express - https://github.com/lukeautry/tsoa (Cohort 1 video)
   4. Hono has a native implementation with zod - https://hono.dev/snippets/zod-openapi

We'll be going through `d`, but we've covered `c.ii` in Cohort 1

# Hono + Zod + OpenAPI

initialise the project

```bash
 npm create hono@latest

> week_20@1.0.0 npx
> create-hono

create-hono version 0.9.2
? Target directory 20-2
? Which template do you want to use? cloudflare-workers
✔ Cloning the template
? Do you want to install project dependencies? yes
? Which package manager do you want to use? npm
✔ Installing project dependencies
🎉 Copied project files
Get started with: cd 20-2
```

install the dependencies:

```bash
npm i @hono/zod-openapi
```

start from the top into code
index.ts, input.ts

Try running the app locally and visiting
http://localhost:8787/users/123123
http://localhost:8787/doc

```bash
npm run dev
```

# Create a swagger page

Given the OpenAPI Spec, you can create a swagger page for your app
`https://hono.dev/snippets/swagger-ui`

```ts
app.get("/ui", swaggerUI({ url: "/doc" }));
```

Try visiting http://localhost:8787/ui

# Auto generated clients

Given you have a yaml/json file that describes the `shape` of your routes, lets try generating a `ts` client that we can use in a `Node.js` /` React` app to talk to the backend
Ref https://www.npmjs.com/package/openapi-typescript-codegen

1. Store the OpenAPI Spec in a file (spec.json)
   create it, and paste from `localhost:8787/doc`

2. Generate the Client

```bash
npx openapi-typescript-codegen --input ./spec.json --output ./generated
```

generates some client

3. Explore the Client

```bash
cd generated
cat index.ts
```

1:03:07
create a fresh node.js app-> trader-app, copy the generated folder into it

```bash
mkdir trader-app-20-3
cd trader-app
npm init -y
npx tsc --init
cp -r ../20-2/generated .
touch index.ts
cd ../trader-app
npx esbuild index.ts --bundle --platform=node --outfile=index.js
```

go to generated/core/OpenAPI.ts, set the base url to localhost:8787

```bash
node index.js
```

# 20.3 | OpenAPI Spec Cohort-1

do the stuff from the docs
`https://tsoa-community.github.io/docs/introduction.html`
