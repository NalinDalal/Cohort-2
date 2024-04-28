# Assignment- ToDo App

Try creating a todo application that let’s a user signup, put todos and fetch todos.
Use

- Typescript as the language
- Prisma as the ORM
- Postgres as the database
- Zod as validation library

## Fucking Logic

front end for user signin, sign up, it's logic with same backend
so we got some major steps like:

signup, signin, in the database itself
the validation can be done with help of email authentication,

once the user logs-in he/she must be able to see his/her todos like:

```txt
todo heading
todo description
todo date created
todo status-> done and delete button

```

## Step 1:

Initialise the Repo

now in the repo we will create a folder called `backend`, `frontend`

`frontend` folder will contain the frontend code
`backend` folder will contain the backend code

initialise the backend repo:

```bash
npm init -y
npm install prisma typescript ts-node @types/node express @types/express cors @types/cors --save-dev
tsc --init

npx prisma init
```

now go to the tsconfig.json file, and change the rootDir to src,outDir to dist
done

now go to schema.prisma file into the prisma folder
get a fucking connection string from neondb and get that there in the schema.prisma file
no wait fuck it, just create a .env file and put the connection string there,
then just call the url in the schema.prisma file
we did it.
note that the .env file will be ignored by git,by adding the filename into the .gitignore file

now define the schema of the database, like

```sql
model user{
id int @id @default(autoincrement())
username string @unique
email string @unique
password string
}
```

we get the idea rico

user-id, name, email, password
todo- id, title, description, status, user-id, date

now migrate the file

```bash
npx prisma migrate dev
```

now provide the name of migration file in the prisma migrate command
we did it

---

## Step 2:

Server made in typescript
for that first we need to install typescript and ts-node
go to tsconfig.json
under modules section,comment off the "module": "commonjs", "rootDir": "./src", "outDir": "./dist" line
this suggests that the modules are commonjs
the working directory i.e. typescipt directory is 'src'
the output directory i.e. javascript directory is 'dist'

now go to index.ts file
make a basic server with express as library,port=3000,
3 response status-> Success=200,NotFound=411,Error=500

okay so now the files to put data into the database->
create-user.ts file into the src folder-> to create the users
create-todo.ts file into the src folder-> to create the todos
get-todo.ts file into the src folder-> to fetch the todos
put-todo.ts file into the src folder-> to put the todos into the database
delete-todo.ts file into the src folder-> delete the todos from the database
update-todos.ts file into src folder-> update a specific todo from the databse to another todos
