# DataBase- PostGres 1
To store the Data

2 types: SQL,NoSQL

SQL: Strict Schemas, very hard to change schemas
NoSQL: Shemaless, Faster to produce app

Types
SQl: postgres, mysql

Connecting to postgres
sample url: postgres://[username]:[password]@[host]/[database_name]

## Creating an instance
go to elephant sql,create a postgres sql,elephant will be deleted till jan 2025
we signed up with github for time being
nvm, just leave it as the elephant will get deleted itself in jan 2025

## Basic Queries
1.Insert
2.Update
3.Delete
4.Get

clone the repo make it download(week-13-sql-master):
folder name:PostGres1
npm install pg
npm install@types/pg

Create Table:
``` sql
CREATE TABLE users(
id SERIAL PRIMARY KEY, 
email VARCHAR(255) UNIQUE NOT NULL, 
password VARCHAR(255) NOT NULL);
```

``` bash
psql -h trumpet.db.elephantsql.com -p 5432 -U wzsxsnxg -d wzsxsnxg
```
pwd from the string in utils.ts:
LHZ9Cv4QoZ1zctxapkOq2ch672-o9UQe

create-table.ts: has a query which create a table
\q to exit in terminal

``` bash
yarn build
```

## Inserts
Insert the data into the table
``` sql
INSERT INTO todos (title, description, user_id, done)
VALUES ('Buy groceries', 'Milk, bread, and eggs', 1, FALSE);
INSERT INTO users (username, email, password)
VALUES ('john_doe', 'john.doe@example.com', 'hashed_password_here');
```

## Gets
To fetch data
``` sql
SELECT * FROM todos WHERE user_ id = desired_user_id;
```

## Update
in src/update-data.ts
``` bash
yarn build
yarn run v1.22.22
warning ../../../../../package.json: No license field
$ tsc -b
✨  Done in 0.52s.

󰀵 nalindalal  …/Cohort_Code/week_10/week-13-sql-master   main !?   v20.8.0   19:17  
 node dist/update-data.js
Todo with ID 1 updated to done!
^C
```

``` bash
psql -h trumpet.db.elephantsql.com -p 5432 -U wzsxsnxg -d wzsxsnxg
Password for user wzsxsnxg: 
psql (16.1, server 13.9 (Ubuntu 13.9-1.pgdg20.04+1))
SSL connection (protocol: TLSv1.3, cipher: TLS_AES_256_GCM_SHA384, compression: off)
Type "help" for help.

wzsxsnxg=> SELECT * FROM todos;
 id |     title     |      description      | user_id | done 
----+---------------+-----------------------+---------+------
  2 | Buy groceries | Milk, bread, and eggs |       4 | f
  3 | Buy groceries | Milk, bread, and eggs |      11 | f
  1 | Buy groceries | Milk, bread, and eggs |       1 | t
(3 rows)

```
Delete
``` bash
DELETE FROM todos WHERE id=1
```

## JOINS
A foreign key in a database is a field (or collection of fields) in one table that uniquely identifies a row of another table or the same table. It establishes a relationship between two tables, called the parent table and the child table.

src/joins/advance-1.ts
``` tsx
const joinQuery = `
        SELECT users.*, todos.title, todos.description, todos.done
        FROM users
        LEFT JOIN todos ON users.id = todos.user_id
        WHERE users.id = $1;
    `;
```

Types of joins
FULL JOIN - Should be present in either tables
INNER JOIN - Should be present in both the tables
LEFT JOIN - Should have all entries from left table
RIGHT JOIN - Opposite of left join

``` bash
node dist/joins/advance-1.js
User and Todos: [
  {
    id: 1,
    email: 'john.do11e@gmail2.com',
    password: 'hashed_password_here',
    title: 'Buy groceries',
    description: 'Milk, bread, and eggs',
    done: true
  }
]
```
--------------------------------------------------------------------------------------------------------------------------------
# Database - Prisma 1
Problems:
1. You have to write raw sql queries- encapsulate the sql query in simple functions
2. Migrations are hard
3. You dont get the best types
Solution - ORMs


Lets build a project from scratch
Big thing to note - You need full access of Postgres for the to work
You can
1. Either run it locally -
postgres://username:password@localhost:5432/db
2. Buy a full db

repo for now in folder Prisma1
set up the repo thru: https://www.prisma.io/docs/getting-started/quickstart

1. Create TypeScript project and set up Prisma ORM
As a first step, create a project directory and navigate into it:
``` bash
mkdir hello-prisma-1 
cd hello-prisma-1 
```
Next, initialize a TypeScript project using npm:
``` bash
npm init -y 
npm install typescript ts-node @types/node --save-dev 
```
This creates a package.json with an initial setup for your TypeScript app.

See installation instructions to learn how to install Prisma using a different package manager.

Now, initialize TypeScript:
``` bash
npx tsc --init 
```
Then, install the Prisma CLI as a development dependency in the project:
``` bash
npm install prisma --save-dev 
```

Finally, set up Prisma ORM with the init command of the Prisma CLI:
``` bash
npx prisma init --datasource-provider sqlite 
```

This creates a new prisma directory with your Prisma schema file and configures SQLite as your database. You're now ready to model your data and create your database with some tables.


Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Run prisma db pull to turn your database schema into a Prisma schema.
3. Run prisma generate to generate the Prisma Client. You can then start querying your database.

hello-prisma/prisma/schema.prisma- it is the schema file

```prisma
datasource db{
    provider="postgresql"
    url=env("DATABASE_URL")
}
```

create a env file already exist
keep the url there- 29:45
author id is entry for the author of the user table

main thing differentiating from nosql is author and userid

``` sql
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

initialise the database:
``` bash
npx prisma migrate dev --name init
```

1st created a file in migrations,
we have only concern of schema.prisma file

## Writing SQL Queries

tsconfig.json, Modules>uncomment rootDir

hello-prisma-1/src/create-user.ts ->tsc
--------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------
# Database - PostGres 2
MongoDB is Schemaless, bootstrap project fast
but not for long term,if backend has bug, can compromise database


SQl-strict schemas

## pg
pg is a Node.js library that you can use in your backend app to store data in the Postgres DB (similar to mongoose). We will be installing this eventually in our app.

--------------------------------------------------------------------------------------------------------------------------------

1. Create a DataBase
neon.tech or docker locally
``` bash
docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

connection string: username-pwd-host-dataase
let's to connect via terminal

2. Create DataBase and Define Schema
SQL has a database which is a collection of tables
Create a Table:
``` sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```
--------------------------------------------------------------------------------------------------------------------------------
Interacting with DataBase- CRUD
1. INSERT
``` sql
INSERT INTO users (username, email, password)
VALUES ('username_here', 'user@example.com', 'user_password');
```
Notice how you didn’t have to specify the id  because it auto increments

2. UPDATE
``` sql
UPDATE users
SET password = 'new_password'
WHERE email = 'user@example.com';
```

3. DELETE
``` sql
DELETE FROM users
WHERE id = 1;
```

4. Select
```sql 
SELECT * FROM users
WHERE id = 1;
```
--------------------------------------------------------------------------------------------------------------------------------
# create Queries from Node.js file
1. start a node.js project
``` zsh
cd PostGres2
npm init -y
npx tsc --init
```

2. Change the rootDir and outDir in tsconfig.json
``` json
"rootDir": "./src",
"outDir": "./dist",
```

3. Install the pg library and it’s types (because we’re using TS)
``` bash
npm install pg
npm install @types/pg
```

4. src>index.ts
do the code

5. ``` bash 
tsc -b
```

``` bash
node dist/index.js
```
## InSecurity
This is an insecure way to store data in your tables. 
When you expose this functionality eventually via HTTP, someone can do an SQL INJECTION to get access to your data/delete your data.

More Secure->
``` js
// Use parameterized query to prevent SQL injection
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
```

src/index.ts,index.js

# RelationShips
Relationships let you store data in different tables and relate it with each other.
- Relationships in Mongodb
    Since mongodb is a NoSQL database, you can store any shape of data in it. If I ask you to store a users details along with their address, you can store it in an object that has the address details.
- Relationships in SQL
    Since SQL can not store objects as such, we need to define two different tables to store this data in.

This is called a relationship , which means that the Address table is related to the Users table. When defining the table, you need to define the relationship.
``` sql
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
``` sql
INSERT INTO addresses (user_id, city, country, street, pincode)
VALUES (1, 'New York', 'USA', '123 Broadway St', '10001');
```

Now if you want to get the address of a user given an id , you can run the following query - 
``` sql
SELECT city, country, street, pincode
FROM addresses
WHERE user_id = 1;
```
Extra - Transactions in SQL
💡
Good question to have at this point is what queries are run when the user signs up and sends both their information and their address in a single request.
Do we send two SQL queries into the database? What if one of the queries (address query for example) fails? 
This would require transactions  in SQL to ensure either both the user information and address goes in, or neither does
SQL Query
``` sql
BEGIN; -- Start transaction

INSERT INTO users (username, email, password)
VALUES ('john_doe', 'john_doe1@example.com', 'securepassword123');

INSERT INTO addresses (user_id, city, country, street, pincode)
VALUES (currval('users_id_seq'), 'New York', 'USA', '123 Broadway St', '10001');

COMMIT;
```

Node.js Code
``` js
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

# Joins

Defining relationships is easy.
What’s hard is joining  data from two (or more) tables together.
For example, if I ask you to fetch me a users details and  their address, what SQL would you run?

Approach 2 (using joins)
``` sql
SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
JOIN addresses ON users.id = addresses.user_id
WHERE users.id = '1';
```
``` sql
SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
FROM users u
JOIN addresses a ON u.id = a.user_id
WHERE u.id = YOUR_USER_ID;
```

Benefits of using a join - 
Reduced Latency
Simplified Application Logic
Transactional Integrity
 
 Types of Joins
1. INNER JOIN
Returns rows when there is at least one match in both tables. If there is no match, the rows are not returned. It's the most common type of join.
Use Case: Find All Users With Their Addresses. If a user hasn’t filled their address, that user shouldn’t be returned

``` sql
SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
INNER JOIN addresses ON users.id = addresses.user_id;
```

2. LEFT JOIN
Returns all rows from the left table, and the matched rows from the right table.
Use case - To list all users from your database along with their address information (if they've provided it), you'd use a LEFT JOIN. Users without an address will still appear in your query result, but the address fields will be NULL for them.

``` sql
SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
LEFT JOIN addresses ON users.id = addresses.user_id;
```

3. RIGHT JOIN
Returns all rows from the right table, and the matched rows from the left table.
Use case - Given the structure of the database, a RIGHT JOIN would be less common since the addresses table is unlikely to have entries not linked to a user due to the foreign key constraint. However, if you had a situation where you start with the addresses table and optionally include user information, this would be the theoretical use case.

``` sql
SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
RIGHT JOIN addresses ON users.id = addresses.user_id;
```

4. FULL JOIN
Returns rows when there is a match in one of the tables. It effectively combines the results of both LEFT JOIN and RIGHT JOIN.
Use case - A FULL JOIN would combine all records from both users and addresses, showing the relationship where it exists. Given the constraints, this might not be as relevant because every address should be linked to a user, but if there were somehow orphaned records on either side, this query would reveal them.

``` sql
SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
FULL JOIN addresses ON users.id = addresses.user_id;
```

--------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------

# DataBase - Prisma 2
``` bash
mkdir Prisma2
```

# ORM-
ORM stands for Object-Relational Mapping, a programming technique used in software development to convert data between incompatible type systems in object-oriented programming languages.
easily interact with your database without worrying too much about the underlying syntax (SQL language for eg)

## Why ORM
converts objects to SQL queries under the hood
Abstraction that lets you flip the database you are using. Unified API irrespective of the DB
Type safety/Auto completion
Automatic migrations- hard to keep track of all the commands;As your app grows, you will have a lot of these CREATE  and ALTER  commands.;ORMs (or more specifically Prisma) maintains all of these for you.

``` sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL
);

ALTER TABLE users
ADD COLUMN phone_number VARCHAR(15);
```

## Prisma
Prisma unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations type-safety & auto-completion.

Installation
Let’s create a simple TODO app
 
Initialize an empty Node.js project
``` bash
npm init -y
```

Add dependencies
```bash 
npm install prisma typescript ts-node @types/node --save-dev
```

Initialize typescript
``` bash
npx tsc --init
```

Change `rootDit` to `src`
Change `outDir` to `dist`
Initialize a fresh prisma project
```bash
npx prisma init
```
create a schema.prisma file
copy the connection string from neon.db into the url section
Prisma lets to choose the database
define the model with comment model-> a User and ToDo table created

Run the migration files:
``` bash
npx prisma migrate dev --name Initialize the schema
```
provide it a name: 
```bash 
npx prisma migrate dev —-name UserAndTodoAdded
```
allow migration,yup it works


If you have psql, try to explore the tables that prisma  created for you.
``` bash
psql -h localhost -d postgres -U postgres
```

### Auto Generated Clients:
Prisma auto create few files based on 'schema.prisma' file
``` bash
npx prisma generate
```

Fucking Application Logic now->
src/index.ts
compile the typescript file
call the javascript file,will get a database

insert commented with 1,then the logic of update with 2, then get user details

orm provides auto-generated client than sql

## Relationships
Prisma let’s you define relationships  to relate tables with each other.
1. Types of relationships
One to One
One to Many
Many to One
Many to Many


# Assignment for this week
Assignments/week-10
1st one done along with comments


then after that
Try creating a todo application that let’s a user signup, put todos and fetch todos. 
Use 
Typescript as the language
Prisma as the ORM
Postgres as the database
Zod as validation library
