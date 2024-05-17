1. initialise the project:

```bash
npm create hono@latest
Need to install the following packages:
create-hono@0.7.3
Ok to proceed? (y) y


> npx
> create-hono

create-hono version 0.7.3
? Target directory medium2
? Which template do you want to use? cloudflare-workers
? Directory not empty. Continue? yes
✔ Cloning the template
? Do you want to install project dependencies? yes
? Which package manager do you want to use? npm
✔ Installing project dependencies
🎉 Copied project files
Get started with: cd medium2
```

now go to src/index.ts and setup the different routes like signup,signin,blog/:id,blog with post,put request

2. go to aiven.io, get a pg url

3. create a connection pool so that we don't get the database directly-> prisma.io/accelerate

create a accelerate pool,then add the database url to the pool
get api key
in main folder:

```bash
npm i prisma
npx prisma init
```

17:25
put the prisma url in the wrangler.toml file created,under var section

put database url(postgres) in .env file

so when we migrate the db url will be read from .env file
but the index.ts read from wrangler.toml file

4. Schema
   define the schema in Schema.prisma

5. and migrate the database

```bash
npx prisma migrate dev --name init_schema
```

generate the prisma client

```bash
npx prisma generate --no-engine
```

the cmd generate ts file based on schema.prismaa

add accelerate extension to same

```bash
npm install @prisma/extension-accelerate
```

initialise the client in index.ts

6. Create routes
   signup route
   signin route
   blog/:id route
   blog route
   post route
   put route

   we fucking did it,tested too

7. Middlewares
   move the middlewares to a separate folder,like:
   signup,signin to a user.ts file
   blogs to blog.ts file,
   also make sure to update the routes to use the middlewarei

8. Deploy
   `npm run deploy`

   go to cloudflare-workers and change the JWT Secret

9. Zod Validation
   into user.ts file as email,pwd,name

10. common folder

move evrything into a backend folder
create a common folder for everything
initalise typescript in it

```bash
npm init -y
npx tsc --init
```

go to tsconfig.json, change rootDir to ./src;outDir ./dist;declaration to true

```bash
mkdir src
touch src/index.ts
```

```bash
npm i zod
```

Put all types in src/index.ts
signupInput / SignupInput
signinInput / SigninInput
createPostInput / CreatePostInput
updatePostInput / updatePostInput

generate output

```bash
tsc -b
```

create a .npmignore file and src folder in it.
Publish to npm

```bash
npm publish --access public
```

install into backend folder

```bash
cd backend
npm i @nalindalal/medium-common
```

to test:

```bash
npm run dev
```

11. Frontend
