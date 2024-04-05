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
# Database - Prisma 1