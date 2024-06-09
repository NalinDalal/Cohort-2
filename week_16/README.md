# 16.1 | MonoRepo

Initialise the Turbo Repo Appliction

```bash
 npx create-turbo@latest

 ? Where would you like to
create your turborepo? 16.1
? Which package manager do you
want to use? npm workspaces
```

to run->

```bash
npm install
npm run dev
```

2 ports given -> 3000(web folder) and 3001(docs folder)

single repo sharing multiple projects which share code from packages

package.json->

```json
{"name":"16.1", //name of package
scripts":{"build":"turbo build","dev":"turbo dev","lint":"turbo lint","format":"prettier --write \"**/*.{ts,tsx,md}\""} // turbo build system
"workspaces":["apps/*","packages/*"]} // workspaces
}
```

```bash
turbo build
```

goes into all package,apps and packages and builds them

```bash
npm run build
```

# 16.2 | MonoRepo Practical

```bash

npx create-turbo@latest

? Where would you like to create your turborepo? 16.2
? Which package manager do you want to use? npm workspaces
```

apps/web/app/page.tsx ->
clean whole page.tsx and introduce a button in the card, create a admin.tsx in packages/ui/src
export into package.json, hence a tedious process, so hence turbo repo introduced generators

introduce a button in the card, create a admin.tsx in packages/ui/src -> it is a reusable component, update in package.json and export it to use,
now we can use it in main Application

runs successfully

to create generators->

```bash
npm run generate:component

> @repo/ui@0.0.0 generate:component
> turbo gen react-component


>>> Modify "16.2" using custom generators

? What is the name of the component? InputBox2
>>> Changes made:
  • /src/input-box2.tsx (add)
  • /package.json (append)

>>> Success!
```

runs successfully, created a input box(clean it introduce a new component), call it into apps/web/app/admin/page.tsx and run the file

what does turbo build provides
turbo build

1. I call things paralelly
2. If things are dependeant on each other, I first call the child and them the parent
3. I cache the outputs of the builds

so basically turbo.json provides the commands to compiler and cache the output

## Adding React Project

1. Go to the apps folder

```bash
cd apps
```

2. Create a fresh vite app

```bash
npm create vite@latest
```

3. Update package.json to include @repo/ui as a dependency

```json
"@repo/ui": "*",
```

4. Run npm install in the root folder

```bash
cd ..
npm install
npm run dev
```

gives logs of web,app,react

Try importing something from the ui package and rendering it
Add a turbo.json to the react folder to override the outputs object of this module.
Ref https://turbo.build/repo/docs/core-concepts/monorepos/configuring-workspaces

```json
{
  "extends": ["//"],
  "pipeline": {
    "build": {
      "outputs": ["dist/**"]
    }
  }
}
```

now we can utilise that next app components into the react app

## introducing the typescript backend

go to main/root folder
then apps and mkdir backend
maybe a websocket backend

```bash
npm init -y
npx tsc --init
```

copy tsconfig.json from 'https://github.com/vercel/turbo/blob/main/examples/kitchen-sink/apps/api/tsconfig.json'

start adding code, add build script and dev script

```json
 "scripts": {
    "build": "tsc -b",
    "dev": "tsc -b && node dist/index.js"
  }
```

```bash
npm run build
```

## adding the common

add a folder in packages with name of common, introduce ts and a index.ts file

```bash
npm init -y
npm install zod
mkdir src
touch src/index.ts
```

index.ts->
added the export,import into backend

we will use esbuild for compilation

# 16.3 | Authentication in NextJS

## 16.3.1 | Cookies
