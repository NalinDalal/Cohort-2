# ToDo App:
## Full stack end to end

We will just make it as our first REACT Project
this project contains a simple ToDo application
It has following features-

-A user can sign up
-A user can sign in
-Anyone can create ToDo
-Anyone can see their existing ToDos
-Anyone can mark a ToDo as Done

First we will create our backend folder

//initialize a node project
// put a package.json file in it

run command: "npm init" in backend folder and answer question

we will be created a backend/package.json file

run- "npm install express"
express is library ,create a server but use library which are pre-written
When you are running the projects this are needed

'npm install'- this commands goes to package.json, install all dependencies from it

## Don't share node modules on github

we will start with index.js
express server in it
use,post,get,put endpoints made


### now zod for validation
create a new file 'types.js'
zod types needed
b/f that install zod lib

write zod schema in types.js and export it using:

module.exports={
    createTodo:createTodo,
    updateTodo:updateTodo
}

Now in index.js
validation using zod and 

then mongodb schema updating-db.js
run command- npm install mongoose
to connect mongodb databse
mongodb url handy

since we can't commit this link to github hence we will create a env file and put it there

index.js:
await the function in app.post
u know cause if there is no database call in case database is down
to have an exception

to test the app: node backend/index.js