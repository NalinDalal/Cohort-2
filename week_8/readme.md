## week 8.0
Let's Start by making a clone of youtube

npx create-next-app@latest
Need to install the following packages:
create-next-app@14.1.4
Ok to proceed? (y) y
✔ What is your project named? … week_8.0
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
Creating a new Next.js app in /Users/nalindalal/Downloads/Cohort_2/Cohort_Code/week_8/week_8.0.

in index.tsx clear everything and leave only a top level div

now create a folder in src and have a file named "VideoCard.tsx" in it

now we downloaded a photo and put it in public folder
now call the photo in tsx file

now we utilised the inline css
can go to "https://tailwindcss.com/docs/grid-template-columns" for docs
----------------------------------------------------------------------------------------------------------------------------------------------------------------

## week_8.1
folder week_8.1
create a project - tailwind-prac
clear app.css,index.css and get to app.jsx

InLine CSS
``` jsx
<div style={{backgroundColor:"red"}}>Hi in red</div>
```

## TailWind CSS
### tailwind-prac
Read the Docs - 
First we need to install it in the repo:
``` bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file
also add the necesary code in tailwind.config.js file from the website, it says that tailwind should watchout for some particular files  in content ->
```js
content:[
"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", {/*extensions of files used */} ]
```
then in index.css file
```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```
App.jsx contains everything needed in heirarchical order with comments

----------------------------------------------------------------------------------------------------------------------------------------------------------------

### Dukan App clone 
initialize the projects
go to src folder
``` bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

now
create a revenue card component- src/components/RevenueCard.jsx

storybook- to opensource part of code
workshop for building UI components and pages in isolation
cmd: npx storybook@latest init

main concepts to get you started.


Stories
A story captures the rendered state of a UI component. Each component can have multiple stories, where each story describes a different component state.


Docs
Storybook can analyze your components to automatically create documentation alongside your stories. This automatic documentation makes it easier for you to create UI library usage guidelines, design system sites, and more.


Testing
Stories are a pragmatic starting point for your UI testing strategy. You already write stories as a natural part of UI development, so testing those stories is a low-effort way to prevent UI bugs over time.


Sharing
Publishing your Storybook allows you to share your work with others. You can also embed your stories in places like Notion or Figma.

----------------------------------------------------------------------------------------------------------------------------------------------------------------

## Week 8.2- PayTM Clone

We’re building a PayTM like application that let’s users send money to each other given an initial dummy balance
clone the repo
The repo is a basic express + react + tailwind boilerplate

### Step 1:
backend/index.js
frontend/src/App.jsx

### Step 2 - User Mongoose schemas
 
We need to support 3 routes for user authentication
Allow user to sign up.
Allow user to sign in.
Allow user to update their information (firstName, lastName, password).
 
To start off, create the mongo schema for the users table
Create a new file (db.js) in the root folder
Import mongoose and connect to a database of your choice
Create the mongoose schema for the users table 
Export the mongoose model from the file (call it User)

### Step 3 - Create routing file structure
1. file backend/routes/index.js that exports a new express router.
( How to create a router - https://www.geeksforgeeks.org/express-js-express-router-function/ )

2. Import the router in index.js and route all requests from /api/v1 to it

### Step 4 - Route user requests
1. Create a new user router 
Define a new router in backend/routes/user.js and import it in the index router.
Route all requests  that go to /api/v1/user to the user router.

2. Create a new user router 
Import the userRouter in backend/routes/index.js so all requests to /api/v1/user get routed to the userRouter.

### Step 5 - Add cors, body parser and jsonwebtoken
1. Add cors
Since our frontend and backend will be hosted on separate routes, add the cors middleware to backend/index.js

2. Add body-parser
Since we have to support the JSON body in post requests, add the express body parser middleware to backend/index.js
You can use the body-parser npm library, or use express.json 

3. Add jsonwebtoken
We will be adding authentication soon to our application, so install jsonwebtoken library. It’ll be useful in the next slide
``` bash
npm install jsonwebtoken
```

4. Export JWT_SECRET
Export a JWT_SECRET from a new file backend/config.js

5. Listen on port 3000 
Make the express app listen on PORT 3000 of your machine

### Step 6 - Add backend auth routes

In the user router (backend/routes/user), add 3 new routes.

1. Signup
This route needs to get user information, do input validation using zod and store the information in the database provided
Inputs are correct (validated via zod)
Database doesn’t already contain another user
 
If all goes well, we need to return the user a jwt which has their user id encoded as follows - 
```javascript
{
	userId: "userId of newly added user"
}
```
💡
Note - We are not hashing passwords before putting them in the database. This is standard practise that should be done, you can find more details here - https://mojoauth.com/blog/hashing-passwords-in-nodejs/
 
Method: POST 
Route: /api/v1/user/signup
Body:

``` js
{
	username: "name@gmail.com",
	firstName: "name",
	lastName: "name",
	password: "123456"
}
```

Response:
Status code - 200
``` js
{
	message: "User created successfully",
	token: "jwt"
}
 ```

Status code - 411
``` js
{
	message: "Email already taken / Incorrect inputs"
}
 ```

 2. Route to sign in
Let’s an existing user sign in to get back a token.
 
Method: POST 
Route: /api/v1/user/signin

Body:
```js
{
	username: "name@gmail.com",
	password: "123456"
}
```

Response:
Status code - 200
``` js
{
	token: "jwt"
}

```
Status code - 411
``` js
{
	message: "Error while logging in"
}
 ```

At the end user.js done

### Step 7 - Middlewares
Now that we have a user account, we need to gate routes which authenticated users can hit.
For this, we need to introduce an auth middleware
 

Create a middleware.js file that  exports an authMiddleware function
1. Checks the headers for an Authorization header (Bearer <token>)
2. Verifies that the token is valid
3. Puts the userId in the request object if the token checks out.
4. If not, return a 403 status back to the user
 
### Step 8 - User routes
1. Route to update user information - authMiddleware.js
User should be allowed to optionally send either or all of
password
firstName
lastName
Whatever they send, we need to update it in the database for the user.
Use the middleware we defined in the last section to authenticate the user
Method: PUT
Route: /api/v1/user
Body:
{
	password: "new_password",
	firstName: "updated_first_name",
	lastName: "updated_first_name",
}

Response:

Status code - 200
{
	message: "Updated successfully"
}

Status code - 411 (Password is too small…)
{
	message: "Error while updating information"
}
 
 
2. Route to get users from the backend, filterable via firstName/lastName
This is needed so users can search for their friends and send them money
 
Method: GET
Route: /api/v1/user/bulk
Query Parameter: ?filter=harkirat
 
Response:
Status code - 200

Explain
{
	users: [{
		firstName: "",
		lastName: "",
		_id: "id of the user"
	}]
}

### Step 9 - Create Bank related Schema
Update the db.js file to add one new schemas and export the respective models
Accounts table
The Accounts table will store the INR balances of a user.
The schema should look something like this - 
{
	userId: ObjectId (or string),
	balance: float/number
}
 

Explain
In the real world, you shouldn’t store `floats` for balances in the database.
You usually store an integer which represents the INR value with 
decimal places (for eg, if someone has 33.33 rs in their account, 
you store 3333 in the database).


There is a certain precision that you need to support (which for india is
2/4 decimal places) and this allows you to get rid of precision
errors by storing integers in your DB

### Step 10 - Transactions in databases
 
A lot of times, you want multiple databases transactions to be atomic
Either all of them should update, or none should
 
This is super important in the case of a bank
 
Can you guess what’s wrong with the following code - 
 ``` js
const mongoose = require('mongoose');
const Account = require('./path-to-your-account-model');

const transferFunds = async (fromAccountId, toAccountId, amount) => {
    // Decrement the balance of the fromAccount
	  await Account.findByIdAndUpdate(fromAccountId, { $inc: { balance: -amount } });

    // Increment the balance of the toAccount
    await Account.findByIdAndUpdate(toAccountId, { $inc: { balance: amount } });
}

// Example usage
transferFunds('fromAccountID', 'toAccountID', 100);
 ```

Answer
What if the database crashes right after the first request (only the balance is decreased for one user, and not for the second user)
What if the Node.js crashes after the first update?

It would lead to a database inconsistency. Amount would get debited from the first user, and not credited into the other users account.

If a failure ever happens, the first txn should rollback.

This is what is called a transaction in a database. We need to implement a transaction on the next set of endpoints that allow users to transfer INR

### Step 11 - Initialize balances on signup
Update the signup endpoint to give the user a random balance between 1 and 10000.
This is so we don’t have to integrate with banks and give them random balances to start with.
 
 
Solution - user.js
``` js
router.post("/signup", async (req, res) => {
    const { success } = signupBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const userId = user._id;

		/// ----- Create new account ------

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

		/// -----  ------

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})
```

### Step 12 - Create a new router for accounts
 
1. Create a new router

All user balances should go to a different express router (that handles all requests on /api/v1/account ). 
Create a new router in routes/account.js and add export it
 
Solution

``` js
// backend/routes/account.js
const express = require('express');

const router = express.Router();

module.exports = router;
```

2. Route requests to it
Send all requests from /api/v1/account/*  in routes/index.js to the router created in step 1.
 
Solution
``` js
// backend/user/index.js
const express = require('express');
const userRouter = require("./user");
const accountRouter = require("./account");

const router = express.Router();

router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;
```

### Step 13 - 
1. An endpoint for user to get their balance.
Method: GET
Route: /api/v1/account/balance
Response:
Status code - 200
{
	balance: 100
}
 
Solution
``` js
router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })
});
``` 
 
2. An endpoint for user to transfer money to another account
Method: POST
Route: /api/v1/account/transfer
Body
{
	to: string,
	amount: number
}
 
Response:
Status code - 200
{
	message: "Transfer successful"
}
Status code - 400
 
{
	message: "Insufficient balance"
}
 
Status code - 400
 
{
	message: "Invalid account"
}
 

Final Solution
Finally, the account.js file should look like this

``` js
// backend/routes/account.js
const express = require('express');
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })
});

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;

    // Fetch the accounts within the transaction
    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();

    res.json({
        message: "Transfer successful"
    });
});

module.exports = router;
```

Yup BackEnd Done
--------------------------------------------------------------------------------------------------------------------------------

### Step 1 - Add routing to the react app
 frontend/src/App.jsx ->
Import react-router-dom into your project and add the following routes - 
/signup - The signup page
/signin - The signin page
/dashboard - Balances and see other users on the platform.
/send - Send money to other users
App.jsx


### Step 2 - Create and hook up Signup page
 
If the user signup is successful, take the user to /dashboard
If not, show them an error message

### Step 3 - Create the signin page
 
If the signin in successful, take the user to /dashboard

### Step 4 - Dashboard page
 
Show the user their balance, and a list of users that exist in the database
Clicking on Send money should open a modal that lets the user send money

### Step 5 - Auth Components
Full Signup component
 
You can break down the app into a bunch of components. The code only contains the styles of the component, not any onclick functionality. 
1. Heading component- Heading.jsx
 
``` jsx
export function Heading({label}) {
    return <div className="font-bold text-4xl pt-6">
      {label}
    </div>
}
```

2. Sub Heading component - SubHeading.jsx
 ``` jsx
export function SubHeading({label}) {
  return <div className="text-slate-500 text-md pt-1 px-4 pb-4">
    {label}
  </div>
}
```
3. InputBox component - InputBox.jsx

``` jsx
export function InputBox({label, placeholder}) {
    return <div>
      <div className="text-sm font-medium text-left py-2">
        {label}
      </div>
      <input placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" />
    </div>
}
```

4. Button Component - Button.jsx
```jsx
export function Button({label, onClick}) {
    return <button onClick={onClick} type="button" class=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{label}</button>
}
```
This section was blindly copied from https://flowbite.com/docs/components/buttons/

5. BottomWarning - ButtomWarning.jsx
``` jsx
import { Link } from "react-router-dom"

export function BottomWarning({label, buttonText, to}) {
    return <div className="py-2 text-sm flex justify-center">
      <div>
        {label}
      </div>
      <Link className="pointer underline pl-1 cursor-pointer" to={to}>
        {buttonText}
      </Link>
    </div>
}
```

Full Signup component - Signup.jsx
``` jsx
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signup = () => {
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox placeholder="John" label={"First Name"} />
        <InputBox placeholder="Doe" label={"Last Name"} />
        <InputBox placeholder="harkirat@gmail.com" label={"Email"} />
        <InputBox placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}
 ```

Full Signin component - Signin.jsx
 
``` jsx
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin = () => {

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox placeholder="harkirat@gmail.com" label={"Email"} />
        <InputBox placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}
```

### Step 6 - Signin-ed Comonents
1. Appbar - Appbar.jsx

``` jsx
export const Appbar = () => {
    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    U
                </div>
            </div>
        </div>
    </div>
}
```
2. Balance - Balance.jsx

``` jsx
export const Balance = ({ value }) => {
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {value}
        </div>
    </div>
}
```

3. Users component - Users.jsx
``` jsx
import { useState } from "react"
import { Button } from "./Button"

export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([{
        firstName: "Harkirat",
        lastName: "Singh",
        _id: 1
    }]);

    return <>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </>
}

function User({user}) {
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button label={"Send Money"} />
        </div>
    </div>
}
```
 
4. SendMoney Component - SendMoney.jsx
 
``` jsx
export const SendMoney = () => {
    return <div class="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div
                class="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
            >
                <div class="flex flex-col space-y-1.5 p-6">
                <h2 class="text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div class="p-6">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <span class="text-2xl text-white">A</span>
                    </div>
                    <h3 class="text-2xl font-semibold">Friend's Name</h3>
                </div>
                <div class="space-y-4">
                    <div class="space-y-2">
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="amount"
                    >
                        Amount (in Rs)
                    </label>
                    <input
                        type="number"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        id="amount"
                        placeholder="Enter amount"
                    />
                    </div>
                    <button class="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                        Initiate Transfer
                    </button>
                </div>
                </div>
        </div>
      </div>
    </div>
}
```

### Step 7 - Wiring up the backend calls
You can use 
fetch or 
axios
to wire up calls to the backend server.
The final code looks something like this - 
https://github.com/100xdevs-cohort-2/paytm/tree/complete-solution (complete-solution branch on the repo)
 
The important bits here are - 
Signup call -  https://github.com/100xdevs-cohort-2/paytm/blob/complete-solution/frontend/src/pages/Signup.jsx#L36
Call to get all the users given the filter - https://github.com/100xdevs-cohort-2/paytm/blob/complete-solution/frontend/src/components/Users.jsx#L13
Call to transfer money b/w accounts - https://github.com/100xdevs-cohort-2/paytm/blob/complete-solution/frontend/src/pages/SendMoney.jsx#L45
