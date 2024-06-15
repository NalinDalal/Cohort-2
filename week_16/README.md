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

Cookies in web development are small pieces of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. They are designed to be a reliable mechanism for websites to remember things (very similar to local storage) 1. Session Management: Cookies allow websites to identify users and track their individual session states across multiple pages or visits. 2. Personalization: Websites use cookies to personalize content and ads. For instance, cookies might store information about a user's preferences, allowing the site to tailor content or advertisements to those interests. 3. Tracking: Cookies can track users across websites, providing insights into browsing behavior. This information can be used for analytics purposes, to improve website functionality, or for advertising targeting. 4. Security: Secure cookies can be used to enhance the security of a website by ensuring that the transmission of information is only done over an encrypted connection, helping to prevent unauthorized access to user data.

Why not Cookies?
-Cookies can have an expiry attached to them
-Cookies can be be restricted to only https and to certain domains

## Types :

    - Persistent - Stay even if u close the window
    - Session - Go away after the window closes
    - Secure - Sent only over secure, encrypted connections (HTTPS).

## Properties of Cookies:

    HttpOnly - Can not be accessed by client side scripts
    SameSite - Ensures cookies are not send on cross origin requests

1. Strict
2. Lax - Only GET requests and on top level navigation
3. None

## CSRF attacks

Cross site request forgery attacks were super common because of cookies and hence the SameSite attribute was introduced

# Examples: 16.3 folder- backend+frontend

install the dependencies - npm, jsonwebtoken, cors, cookie-parser, express, path

index.ts -> documentation

build and npm run start, check on postman on http://localhost:3000/signin, post method,
go to cookies, we get a token

start the server from the backend folder
/get method, 'user' endpoint-> get all users, this runs on http://localhost:3000/users

go to frontend , it has own own server, it runs on http://localhost:3000 since we have connected it to backend,frontend on 5173, /user endpoint on frontend provides ur id;

clear the cookie, as the user will be signed-in , go to localhost:3000/endpoint , inspect, Application -> Cookies, it will show the token, delete it, inspect again, it will be empty

go to localhost:3000/endpoint, it will be empty

## 16.3.2 | NextAuth

NextAuth is a library that lets you do authentication in Next.js
Can you do it w/o next-auth - Yes
Should you - Probably not!

NextAuth lets you add Authentication to your Next.js app
It supports various providers

1. Login with email
2. Login with google
3. Login with facebook
   much more

```bash
npx create-next-app@latest
✔ What is your project named? … 16.4-next-auth

```

Catch all routes
If you want to add a single route handler for
/api/auth/user
/api/auth/random
/api/auth/123
/api/auth/...

You can create a catch all route

Create app/api/auth/[...nextauth]/route.ts
add some code, go to few endpoint, /api/auth/[anything] gives some output.

to get dynamic routrs on the page, use get method on route page, gets logged into the terminal, loggin the subroute

runs correctly

now to utilise next-auth comment the previous code with header //1

```bash
npm install next-auth
```

so we provide a array for next-auth providers, into same file

do the routing, in env file provide the website for your own file,

done, better approach move your auth logic into another file

for google provider, call library, add it into providers, and make sure to have some cred for authentication
create creds on -> `https://console.developers.google.com/apis/credentials`
create credentials(in sidebar)>api and services>, consent screen, authorised redirect uri,
create , copy over client id and client secret, put into .env file
now go to auth.ts, and add the google provider there

same for github

week16 done
