24 May 2024

# 14.1 | NextJS (FrontEnd)

React problem was that frontend is different,and backend is different.
react

Server-Side Rendering (SSR) & Static Site Generation (SSG): Enables pre-rendering pages on the server at request time or build time, respectively.
File-Based Routing: Simplifies the creation of routes by using the filesystem as the routing mechanism.

Key Features:

Hybrid Rendering: Supports SSR, SSG, and CSR, allowing developers to choose the best rendering method for each page.
API Routes: Allows creating API endpoints within the application.
Automatic Code Splitting: Optimizes performance by splitting the code automatically.
Built-In CSS Support: Supports CSS and Sass directly, along with CSS-in-JS solutions.
Static Export: Can generate static sites that are easily deployable.
Image Optimization: Provides built-in image optimization capabilities.

Use Cases:

SEO-friendly applications needing SSR or SSG.
E-commerce sites, blogs, and marketing pages where pre-rendering content can improve performance and SEO.
Projects that benefit from built-in optimizations and a structured, opinionated framework.

Key Differences

1. Rendering:
   React: Primarily client-side rendering; server-side capabilities require additional libraries (e.g., Next.js, Gatsby).
   Next.js: Supports server-side rendering, static site generation, and client-side rendering out of the box.

2. Routing:
   React: Requires third-party libraries like React Router for routing.
   Next.js: Offers file-based routing built-in, simplifying the routing setup.

3. Configuration:
   React: More flexible and unopinionated; developers choose their own tools and configurations.
   Next.js: Provides a lot of built-in features and sensible defaults, reducing the need for manual configuration.

4. Performance:
   React: Depends on how well the developer optimizes the application.
   Next.js: Built-in performance optimizations like automatic code splitting, image optimization, and pre-rendering.

5. Learning Curve:
   React: Requires learning additional tools for a complete solution (routing, SSR, etc.).
   Next.js: Easier to get started with a full-featured framework, but has more concepts to learn initially.

## Next.js offerings

Next.js provides you the following upsides over React
Server side rendering - Get’s rid of SEO problems
API routes - Single codebase with frontend and backend
File based routing (no need for react-router-dom)
Bundle size optimisations, Static site generation
Maintained by the Vercel team

Downsides -
Can’t be distributed via a CDN, always needs a server running that does server side rendering and hence is expensive
Very opinionated, very hard to move out of it

## How to use Next.js

```bash
npx create-next-app@latest
```

```bash
Need to install the following packages:
create-next-app@14.2.3
Ok to proceed? (y) y

✔ What is your project named? … 14.1
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
Creating a new Next.js app in /Users/nalindalal/Downloads/Cohort_2/Cohort_Code/week_14/14.1.

```

File Structure:
next.config.mjs - Nextjs configuration file
tailwind.config.js - Tailwind configuration file
app - Contains all your code/components/layouts/routes/apis

## Bootstrap the project

Remove everything from app/page.tsx and return an empty div
Remove the css bits (not the tailwind headers) from the global.css file
30:00

remove everything from App.css except the tailwind dependencies

Let’s add a new folder in app called signup
Let’s add a file called page.tsx inside app/signup
page.tsx

```ts
export default function Signup() {
    return (
      <div>
        hi from the signup page
      </div>
    );
  }
```

Start the application locally

```bash
npm run dev
```

renders only for / route i.e. can't render for /home or someother route

go to root level app, inside it mkdir signup and add signup.tsx and page.tsx
go to random route says found nothing

on signup route the page.tsx of signup folder will be routed

add a signin route in signin folder

sadly this is the way to go.

## Server Side Rendering

Let’s try exploring the response from the server on the /signup route
Run npm run dev
Visit http://localhost:3000/signup
Notice the response you get back in your HTML file

Now if GoogleBot tries to scrape your page, it’ll understand that this is a signup page without running any Javascript.
The first index.html file it get’s back will have context about the page since it was server side rendered

## layouts

You’ll notice a file in your app folder called layout.tsx
Layouts let you wrap all child pages inside some logic.
A layout is UI that is shared between multiple routes. On navigation, layouts preserve state, remain interactive, and do not re-render.

layout create a layout for all of files and folders present

## Assignment

Try adding a simple Appbar - Done

## Layouts in sub routes

What if you wan’t all routes that start with /signin to have a banner that says Login now to get 20% off
Banner on the App

## Merging Routes

banner on signin,signup but not on app
move signup,signin to auth folder

if we add () like (auth) it will be ignored in router

## components directory

You should put all your components in a components directory and use them in the app routes rather than shoving everything in the route handler

Create a new folder called components in the root of the project
Add a new component there called Signin.tsx
Move the signin logic there

so any one having /auth in route will that banner on top
Render the Signin component in app/(auth)signin/page.tsx

## Client and server components

NextJS expects you to identify all your components as either client or server
As the name suggests

1. Server components are rendered on the server
2. Client components are pushed to the client to be rendered
   By default, all components are server components.

If you wan’t to mark a component as a client component, you need to add the following to the top of the component -

```tsx
"use client";
```

### When should you create client components ?

Whenever you get an error that tells you that you need to create a client component
Whenever you’re using something that the server doesn’t understand (useEffect, useState, onClick…)
Rule of thumb is to defer the client as much as possible

## Assignment

Try updating components/Signin.tsx to make it a client component
You will notice that the error goes aways

```tsx
import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";

// Pages are Server Components by default
export default function Page() {
  return (
    <ClientComponent>
      <ServerComponent />
    </ClientComponent>
  );
}
```

---

# 14.2 | NextJS (BackEnd/Server Side)

NextJS can handle both frontend as well as backend, i.e. previously we had to upload backend,frontend on different aws machines. This can be deployed on same aws machine.
Single codebase for all your codebase
No cors issues, single domain name for your FE and BE
Ease of deployment, deploy a single codebase

## Data Fetching in Next

You should fetch the user details on the server side and pre-render the page before returning it to the user.
use `fetch()` keyword to automatically memoize fetch requests while rendering a React component tree.

initiate the repo:

```bash
npx create-next-app@latest
✔ What is your project named? … 14.2.1
✔ Would you like to use TypeScript? … No / Yes - Yes
✔ Would you like to use ESLint? … No / Yes - Yes
✔ Would you like to use Tailwind CSS? … No / Yes - Yes
✔ Would you like to use `src/` directory? … No / Yes - No
✔ Would you like to use App Router? (recommended) … No / Yes - Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes - No
Creating a new Next.js app in /Users/nalindalal/Downloads/Cohort_2/Cohort_Code/week_14/14.2/14.2.1.
```

```ts
async function getData() {
  const res = await fetch('https://api.example.com/...')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data = await getData()

  return <main></main>
}
```

## Caching Data

Caching stores data so it doesn't need to be re-fetched from your data source on every request.

```tsx
fetch("https://...", { cache: "force-cache" });
```

always clean it up->page.tsx, global.css

define a function hitting backend to fetch user details

prettify it too.

Now to add a loader here in next.
What if the getUserDetails call takes 5s to finish (lets say the backend is slow). You should show the user a loader during this time
create a loading.tsx file here

## Introducing api routes in Next.js

14.2.2
NextJS lets you write backend routes, just like express does.
This is why Next is considered to be a full stack framework.

The benefits of using NextJS for backend includes -
Code in a single repo
All standard things you get in a backend framework like express
Server components can directly talk to the backend
We want to introduce a route that returns hardcoded values for a user’s details (email, name, id)

1. Introduce a new folder called api
2. Add a folder inside called user
3. Add a file inside called route.ts
4. Initialize a GET route inside it

run as dev, hit the endpoint on localhost(try the put on postman),works. Hence what we learnt: next can run as frontend, as well as backend handler

## FrontEnd with BackEnd communication

remember the api endpoint of, well copy it same in page.tsx, call and compile it

Hence we have a Full Stack Application running in NextJS

## Frontend for Signing up

Create app/signup/page.tsx
Create a simple Page with a form

yeah done

## ReInitialise the Repo

```bash
npx create-next-app@latest
✔ What is your project named? … 14.2.3
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
```

clean up global.css, app/page.tsx
make a signup component, app/signup/page.tsx ; components/Signup.tsx

Convert components/Signup.tsx to a client component

```tsx
"use client";
```

Add a onclick handler that sends a POST request to /user
Route the user to landing page if the signup succeeded
Ref useRouter hook - https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#userouter-hook

## BackEnd for Signup

Add a POST route that takes the users email and password and for now just returns them back

1. Navigate to app/api/user/route.ts
2. Initialize a POST endpoint inside it

   14.2.3 - DataBases, in it's DataBases

Install prisma

```bash
npm install prisma
```

Initialize prisma schema

```bash
npx prisma init
```

Create a simple user schema

```prisma
model User {
  id        Int     @id  @default(autoincrement())
  username  String  @unique
  password  String
}
```

Replace .env with your own Postgres URL

```env
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

Migrate the database

```bash
npx prisma migrate dev --name init_schema
```

Generate the client

```bash
npx prisma generate
```

Finish the signup route

```ts
export async function POST(req: NextRequest) {
  const body = await req.json();
  // should add zod validation here
  const user = await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  console.log(user.id);

  return NextResponse.json({ message: "Signed up" });
}
```

Update the GET endpoint

```ts
export async function GET() {
  const user = await client.user.findFirst({});
  return Response.json({ name: user?.username, email: user?.username });
}
```

💡
We’re not doing any authentication yet. Which is why we’re not returning a jwt (or setting a cookie) here

yeah all this shit works

# 14.3 | BackEnd in NextJS

14.3.1 -> DataFetching in react, {loading,data} 2 variables provided, call the backend url thru axios, return data username and email

build the project, serve the project, see production built site->

```bash
npm run build
npm i -g serve
serve
```

index.html calls index.js which in turn calls another js file calling the api key(backend), hence ultimately calling rendering the data

14.3.2-> DataFetching in nextjs
You should fetch the user details on the server side and pre-render the page before returning it to the user.

inialise next project, default options

```bash
 npx create-next-app@latest
 ✔ What is your project named? … 14.3.2
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
```

14.3.2/app/page.tsx

created a user endpoint in app/user/page.tsx
called the user data from the server endpoint(details called thru variable userData)

move backend into our own folder hence created a folder /api/user u know this one has details by name userData1

Step 7 - Frontend for Signing up
Create app/signup/page.tsx
Create a simple Page

```js
import { Signup } from "@/components/Signup";

export default function () {
  return <Signup />;
}
```

Create components/Signup.tsx

Convert components/Signup.tsx to a client component

```ts
"use client";
```

Add a onclick handler that sends a POST request to /user

```ts
<button
  onClick={async () => {
    const response = await axios.post("http://localhost:3000/api/user", {
      username,
      password,
    });
  }}
  type="button"
  className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
>
  Sign in
</button>
```

Route the user to landing page if the signup succeeded
Ref useRouter hook - https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#userouter-hook
signup.tsx

```ts
import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEventHandler, useState } from "react";

export function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
        >
          <div>
            <div className="px-10">
              <div className="text-3xl font-extrabold">Sign up</div>
            </div>
            <div className="pt-2">
              <LabelledInput
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                label="Username"
                placeholder="harkirat@gmail.com"
              />
              <LabelledInput
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                label="Password"
                type={"password"}
                placeholder="123456"
              />
              <button
                onClick={async () => {
                  const response = await axios.post(
                    "http://localhost:3000/api/user",
                    {
                      username,
                      password,
                    },
                  );
                  router.push("/");
                }}
                type="button"
                className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Sign in
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

function LabelledInput({
  label,
  placeholder,
  type,
  onChange,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
```

grab a postgresql url
introduce prisma

```bash
npm i prisma
npx prisma init
```

create a simple schema

```sql
model User {
  id        Int     @id  @default(autoincrement())
  username  String  @unique
  password  String
}
```

get pg url into .env file

migrate the database
