# 9.1 - Custom Hooks in React
Hooks- use state and other react features without writing a class. function that let you "hook into" React State and lifecycle feature from function components.

Hooks provide a more concise, readable way to manage state and side effects in your React applications. They also promote reusability and separation of concerns by allowing you to encapsulate logic into custom hooks.

To create a custom hook, you simply define a function that uses one or more built-in hooks or other custom hooks. This function can then be used in multiple components to share and reuse the logic.

Using custom hooks can greatly simplify your code and make it more maintainable. They allow you to extract common logic into reusable functions, reducing duplication and improving code organization.

Initialise a project-
 npm create vite@latest
✔ Project name: … hooks-prac
✔ Select a framework: › React
✔ Select a variant: › JavaScript

clean the app.css,index.css file
clean up the app.jsx file and write the code with //1
note: import react specifically, other wise won't work

## LifeCycle Events
when component get mount or unmount, they go through a lifecycle of events: mounting, updating, and unmounting. These events are triggered when a component is created, updated, or destroyed.

# Custom Hooks
Hooks that you create yourself, so other people can use them are called custom hooks.

Custom Hooks in React are user-defined functions that encapsulate reusable logic and stateful behavior. 
They allow developers to extract and share common functionality across multiple components, promoting code reusability and maintaining cleaner and more modular code.

A custom hook is effectively a function, but with the following properties -
1. Uses another hook internally (useState, useEffect, another custom hook)
2. Starts with use

A few good examples of this can be
1. Data fetching hooks
2. Browser functionality related hooks - useOnlineStatus, useWindowSize, useMousePosition
3. Performance/Timer based - useInterval, useDebounce

## Custom Hooks- Data Fetching Hooks:
Data fetching hooks can be used to encapsulate all the logic to fetch data from backend

npm create vite@latest
✔ Project name: … axios
✔ Select a framework: › React
✔ Select a variant: › JavaScript


hit the backend at every 5 sec, cause if any changes from anyother devices- autoRefreshing hooks, input is n

documentation in App.jsx as there were 3 variation itself

## Browser functionality related Hooks
1. useIsOnline hook
Create a hook that returns true or false based on whether the user is currently online
You are given that -
    1. window.navigator.onLine returns true or false based on weather the user is online
    2. You can attach the following event listeners to listen to weather the user is online or not
        ```jsx 
        window.addEventListener('online', () => console. log('Became online')); 
        window.addEventListener('offline', () → console. log('Became offline'));
        ```
Initialization: The isOnline state variable is initialized with the current value of
window.navigator.onLine . This represents the initial online status.
Effect Hook: The useEffect hook is used to add event listeners for the 'online' and
'offline' events when the component mounts. These listeners update the isOnline state
accordingly.
Event Listeners: Two event listeners, handleOnline and handleOffline , are defined to
update the isOnline state based on the user's online or offline status.
Cleanup: The useEffect hook also returns a cleanup function. This function removes the
event listeners when the component is unmounted, preventing memory leaks.

## MousePointer inside mouse-pointer app, current width and height
to return the location of mouse pointer

## Performance/Timerbased

1. useInterval
Create a hook that runs a certain callback function every n seconds.
You have to implement useInterval which is being used in the code below
The Custom React Hook — useInterval facilitates running a callback function at specified intervals. This hook is then utilized in the App component to increment a timer every second.

 npm create vite@latest
✔ Project name: … performance
✔ Select a framework: › React
✔ Select a variant: › JavaScript
Explanation:
The App component utilizes the useInterval hook to increment the count state value
every second.
The rendered output displays the current value of the timer, which increases every second.


2. useDebounce
Debouncing is a technique used to delay the execution of a function until after a certain amount of time has passed since the last invocation of the function.

Create a hook that debounces a value given
1. The value that needs to be debounced
2. The interval at which the value should be debounced.

The Custom React Hook — useDebounce is utilized in a SearchBar component to debounce
the user input, making it ideal for scenarios such as live search functionality. Below is a detailed explanation:
1. useDebounce Hook:
Explanation:
Function Signature: The useDebounce hook takes two parameters - value (the input
value to be debounced) and delay (the debounce delay in milliseconds).
State: The debouncedValue state holds the debounced value.
Effect Hook: Inside the useEffect hook, a timer is set using setTimeout . This timer
updates the debouncedValue with the current input value after the specified delay.
Cleanup: The clearTimeout function is used for cleanup to ensure that the timer is
cleared if the input value changes before the delay has passed.
Dependencies: The effect hook depends on the value and delay parameters, ensuring
the effect is re-run when they change.

npm create vite@latest
✔ Project name: … performance_2
✔ Select a framework: › React
✔ Select a variant: › JavaScript

3. useDeferred value-to get deferred value, deferred value will lag behind latest value

9.1 end
----------------------------------------------------------------

# 9.2 - TypeScript

Strongly Typed
    Java,C,C++
    Benefits:
     1. Lesser runtime errors
     2.Stricter Codebase
     3.Easy to catch errors at compile time
    
Loosely Typed
    Python,JavaScript etc
    Benefits:
    1.Easy to write code
    2.Faster to bootstrap
    3.Low learning curve

People realised that javascript is a very power language, but lacks types.
Typescript was introduced as a new language to add types on top of javascript.
Strict syntactical superset of javascript, optional static typing to language.

### Running of TypeScript:
Never runs in browser. Browser understand only JavaScript.
TypeScript files get compiled down to JavaScript.
When compiles to JS, get Type Checking. If error conversion fails.
tsc - typescript compiler to convert into javascript.

install type script locally
npm install -g typescript

after that move the desired folder and run :
npm init -y
npx tsc --init

hence 2 files initialised- package.json, tsconfig.json
tsconfig.json - config which can be set to true,false and hence affecting the whole file conversion from typescript to javascript

create a file- a.ts

```bash
tsc
tsc -b
```
tsc - checks if typescript compiler present
tsc -b - convert the ts file to js file

a.ts converts to a.js
always run the javascript file

```bash
node a.js
```

okay we added a error in a.ts file as a comment for now

## Basic Types in TypeScript
Typescript provides you some basic types
number, string, boolean, null, undefined.

Problem 1: Hello World - hello_world.ts
function that greets a user given their first name.
💡 Thing to learn - How to give types to arguments of a function

Argument - firstName

see type it as javascript file itself, error: parameter implicitly has an 'any' type

hence sol:-
```tsx
firstName:string
```
Problem 2: Sum function - sum.ts
Write a function that calculates the sum of two functions
💡 Thing to learn - How to assign a return type to a function

note: always remember to convert the ts file to js file using cmd- tsc -b

typescript can type inference-> explicitly define the type of output
but it is a good practice

Problem 3: Return true or false based on if a user is 18+
function name- isLegal

Note: See we can't have same variable name in a particular folder
i.e. say a.ts has a variable name a in folder 9.2
then in any file in folder 9.2 we can't assign that particular variable name

Problem 4: Create a function that takes another function as i/p, and runs it after 1 sec

## tsconfig file
The target option in a tsconfig.json file specifies the ECMAScript target version to which the TypeScript compiler will compile the TypeScript code.
To try it out, try compiling the following code for target being ES5 and es2020

## rootDir, outDir
much harder to keep track of files
make a src folder- put all input,ts file here
make a dist/build folder- put all output,js file here

now in tsconfig.json file
search for rootDir, outDir and adjust the folders accordingly,set 
"rootDir" : "./src"
"outDir" : "./dist"

never push dist folder,only original src folder must be committed, hence add the folder to .gitignore file
can configure the conversion from ts to js through tsconfig.json

## InterFaces
an interface is a way to define a contract for objects. It allows you to specify the structure and types of properties and methods that an object should have. Interfaces are particularly useful for defining the shape of objects that will be used across your application, ensuring consistency and type safety.

interface.ts file

### React Project with TypeScript
npm create vite@latest
✔ Project name: … ts-react
✔ Select a framework: › React
✔ Select a variant: › TypeScript

interface can be implemented as class but types can't
You can use interfaces to aggregate data
You can use interfaces to implement classes from

## Types
9.2/ts-react/src/types.ts
Let you to aggregate data together
type need = while declaring, but interface doesn't
both can be used as both are same
types can't be used to implement classes, interface can be used
extra things:

## Intersection
type having property of multiple types
```tsx
type Employee2 = {
name: string; startDate: Date;
} ; 
```
interface - extend in a class
type - intersection and unions

## Arrays
Given an array of positive integers as input, return the maximum value in the array
array.ts

filter out the users that are legal of age
array2.ts

## Enums
Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.
enums.ts

## server
server in ts

## generics
just like generic in c++
Generics enable you to create components that work with any data type while still providing compile-time type safety.

```tsx
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);
```

## modules
modules can be exported and imported for instance see modules.ts and modules2.ts