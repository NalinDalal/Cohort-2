# Week 12

# 12.1 | Deployment of FrontEnd on AWS

Objects- things that are not simple text,atleast 500kb in size,stored in database

AWS-S3(Simple Storage Service)
on AWS we store like Google Drive,like drag-drop

## CDNs Content Delievery Network

When u create it, provide it a source

cloudfront- one of famous CDNs
Object Store-store file in single location(source)
now the request goes to pop;if present at pop then okay else fetch from source

## Deployment

- Step 1 - How to deploy Frontends to AWS
  New things we will learn include

1. Object stores (S3)
2. CDNs (Cloudfront)
   Step 1 - Signup and get an AWS account.
   Step 2 - Make sure you can access S3 and cloudfront (this will automatically happen if you are the root user of that account)

- Step 2- For React Frontends(react/HTML+JS)
  initialise a react project- experiment1

`npm run dev` - local initialisation
`npm run build` - for Deployment, create a dist folder to deploy the application
`serve`- for deployment on internet

- Step 3
  now uploading all this on AWS-S3->

1. For frontends, mp4 files, images, Object stores + CDNs are a better approach.
2. You can't use the same for backends, since every request returns a different response. Caching doesn't make any sense there.

Go to S3. Create a new bucket, make sure to block all public access,
create bucket

manually drag-drop the dist folder content into the bucket,note content not the folder

You might be tempted to open your S3 bucket at this point, but don’t
Your S3 bucket should be blocked by default, and you should allow cloudfront (CDN) to access it.

- Step 4 - Connecting Cloudfront

1.  Create cloudfront distribution
    Go to cloudfront and create a new distribution. A distribution here means you’re creating a place from where content can be distributed.

2.  Select your S3 bucket as the source

Origin Access Control (OAC) is a feature in Cloudfront, which allows you to restrict direct access to the content stored in your origin, such as an Amazon S3 bucket or a web server, ensuring that users can only access the content through the CDN distribution and not by directly accessing the origin URL.
By the end of this, you should have a working cloudfront URL.
select origin access control settings
origin Access control->legacy access identities->origin access control, create new OAC

can have some extra protection selected,enable security protection
select default root object as index.html: it says that bydefault the site goes to index.html
go to permission policy for pages, allow it, deploy it.

now making our url look control

## URL

Connect your own domain to it
get a domain at namecheap.com

now show amazon your ownership of url for certificate

request public certificate
->domain name
->validation method,choose dns one
->type of key algorithm
click on request

now go to domain on domain.google.com>dns>manage custom records>create record,copy the first part on cns into it, then value corresponding to it,select type same as above
Click on save

after some time from aws point select the certificate, make sure to point to respective url, as it only generates the certificate

Step 9 - Error pages
You will notice a problem, whenever you try to access a route on your page that isn’t the index route (/user/1) , you reach an error page

This is because cloudfront is looking for a file /user/1in your S3, which doesn’t exist.
To make sure that all requests reach index.html, add an error page that points to index.html
go to error page response,edit it,select code and do the things

# 12.2 Advanced TypeScript APIs

## Pick

Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).
Imagine you have a User model with several properties, but for a user profile display, you only need a subset of these properties.

```ts
interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

// For a profile display, only pick `name` and `email`
type UserProfile = Pick<User, "name" | "email">;

const displayUserProfile = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};
```

## Partial

Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.
specifically useful when we want to do updates

```ts
interface User {
  id: string;
  name: string;
  age: string;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, "name" | "age" | "email">;

type UpdatePropsOptional = Partial<UpdateProps>;

function updateUser(updatedProps: UpdatePropsOptional) {
  // hit the database tp update the user
}
updateUser({});
```

## Read only

When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.

```ts
interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: "https://api.example.com",
  apiKey: "abcdef123456",
};

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.
```

## Record

Record let’s you give a cleaner type to objects
You can type objects like follows -

```ts
interface User {
  id: string;
  name: string;
}

type Users = { [key: string]: User };

const users: Users = {
  abc123: { id: "abc123", name: "John Doe" },
  xyz789: { id: "xyz789", name: "Jane Doe" },
};
```

or use Record

```ts
interface User {
  id: string;
  name: string;
}

type Users = Record<string, User>;

const users: Users = {
  abc123: { id: "abc123", name: "John Doe" },
  xyz789: { id: "xyz789", name: "Jane Doe" },
};

console.log(users["abc123"]); // Output: { id: 'abc123', name: 'John Doe' }
```

## Map

maps gives you an even fancier way to deal with objects. Very similar to Maps in C++

```ts
interface User {
  id: string;
  name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, User>();

// Add users to the map using .set
usersMap.set("abc123", { id: "abc123", name: "John Doe" });
usersMap.set("xyz789", { id: "xyz789", name: "Jane Doe" });

// Accessing a value using .get
console.log(usersMap.get("abc123")); // Output: { id: 'abc123', name: 'John Doe' }
```

## Exclude

In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.

```ts
type Event = "click" | "scroll" | "mousemove";
type ExcludeEvent = Exclude<Event, "scroll">; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent("click"); // OK
```

## Type Interence in Zod

When using zod, we’re done runtime validation.
For example, the following code makes sure that the user is sending the right inputs to update their profile information
go to zod.ts

# 12.3 | Docker

we already have notes make use of them with more in week 15 supposedly

# 12.4 | SQL Relationships

Since SQL can not store objects as such, we need to define two different tables to store this data in.

This is called a relationship , which means that the Address table is related to the Users table.
When defining the table, you need to define the relationship between the two tables.

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

SQL query
To insert the address of a user -

```sql
INSERT INTO addresses (user_id, city, country, street, pincode)
VALUES (1, 'New York', 'USA', '123 Broadway St', '10001');
```

Now if you want to get the address of a user given an id , you can run the following query -

```sql
SELECT city, country, street, pincode
FROM addresses
WHERE user_id = 1;
```

# 12.5 | Transactions in SQL

Transactions are a way to group multiple queries into a single unit.
Good question to have at this point is what queries are run when the user signs up and sends both their information and their address in a single request.
Do we send two SQL queries into the database? What if one of the queries (address query for example) fails?
This would require transactions in SQL to ensure either both the user information and address goes in, or neither does

```sql

BEGIN; -- Start transaction

INSERT INTO users (username, email, password)
VALUES ('john_doe', 'john_doe1@example.com', 'securepassword123');

INSERT INTO addresses (user_id, city, country, street, pincode)
VALUES (currval('users_id_seq'), 'New York', 'USA', '123 Broadway St', '10001');

COMMIT;
```

```js
import { Client } from 'pg';

async function insertUserAndAddress(
    username: string,
    email: string,
    password: string,
    city: string,
    country: string,
    street: string,
    pincode: string
) {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'mysecretpassword',
    });

    try {
        await client.connect();

        // Start transaction
        await client.query('BEGIN');

        // Insert user
        const insertUserText = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING id;
        `;
        const userRes = await client.query(insertUserText, [username, email, password]);
        const userId = userRes.rows[0].id;

        // Insert address using the returned user ID
        const insertAddressText = `
            INSERT INTO addresses (user_id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5);
        `;
        await client.query(insertAddressText, [userId, city, country, street, pincode]);

        // Commit transaction
        await client.query('COMMIT');

        console.log('User and address inserted successfully');
    } catch (err) {
        await client.query('ROLLBACK'); // Roll back the transaction on error
        console.error('Error during transaction, rolled back.', err);
        throw err;
    } finally {
        await client.end(); // Close the client connection
    }
}

// Example usage
insertUserAndAddress(
    'johndoe',
    'john.doe@example.com',
    'securepassword123',
    'New York',
    'USA',
    '123 Broadway St',
    '10001'
);
```

# Assignment

Assignment for this week
Try creating a todo application that let’s a user signup, put todos and fetch todos.
Use
Typescript as the language
Prisma as the ORM
Postgres as the database
Zod as validation library

# 12.6 | monorepos and npm package deployments-> 12.5

# 12.7 -> turbo repo

cmd->

```bash
npx create-turbo@latest
```

to run:

```bash
npm run dev
```

1:27:18
create a ui folder in packages and
install mui in turbo repo, inside packages/ui

```bash
 npm i @mui/material @emotion/eact @emotion/styled
```

signup.tsx in ui.export this from index.tsx .
then go to app>web>app>page.tsx and add signup.tsx in it

do the things,then run it through web folder->

```bash
yarn dev
```

yeah done!!
