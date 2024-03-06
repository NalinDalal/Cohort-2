# Week 6:
we will start with 
## 6.1 React Hooks-all inside folder 6.1

Components can only have a single child- no 2 siblings can be present here
this single child can have multiple childs and siblings b/c
1. Easy to understand

Create a react app that has a
1. Header component that takes a title as a prop and renders it inside a div
2. The top level App component renders 2 Headers


now code:
terminal-> npm create vite@latest
project name: experiments
framework: react

remove every thing from app.css,index.css,app.jsx

app.jsx: 2 header,along with state of title
run the file, output rendered as {title}
we need to have a top level div,it is must
can't return div w/o a parent div

hence to create siblings we must have an empty div as parent and then 2 child in it as:
<>
      <div>
        <Header title="nalin1"></Header>
        <Header title="nalin2"></Header>
      </div>
    </>
no multiple child rather than single parent

<>
    <Header title="nalin1"></Header>
    <Header title="nalin2"></Header>
</>

### re-render
re-render:anytime a final dom manipulation happens by react,clicking a button is not re-render instead updation of dom is re-render

React Developer tools->

assignment in lecture:
create a button which changes the name on clicking it to a random number
-> src/app.jsx

can see all of the div get re-render
A re-render means that
1. React did some work to calculate what all should update in this component
2. The component actually got called (you can put a log to confirm this)
3. The inspector shows you a bounding box around the component

It happens when
1. A state variable that is being used inside a component changes
2. A parent component re-render triggers all children re-rendering

create a new component headerwithbutton,push state down to it,parent state has no components

memo lets you skip re-rendering a component when its props are unchanged

### key
Lets create a simple todo app that renders 3 todos
1. Create a Todo component that accepts title, description as input
2. Initialise a state array that has 3 todos
3. Iterate over the array to render all the TODOs
4. A button in the top level App component to add a new TODO
note: whenevr rendering a list,make sure list has unique identifier for every element,key = identifier
makes it unoptimal

id:tell react hiearchy,make re-rendering easy

### Wrapper Component-component taking another component as input
repo- experiments_3
Cardwrapper,then TestComponent1,then TestComponent2, then RealCardwrapper3 functions were made accordingly,
hence to test the respective functions do one thing
comment out everyother thing except one function and run 
then do for every function

last function will be RealCardwrapper3

Assignment:
Create an app that polls the sum server
Gets the current set of TODOs
Renders it on screen

server endpoint: https://sum-server.100xdevs.com/todos

npm create vite@latest
✔ Project name: … assignment
assignment/src/app.jsx

render the todos after 10sec

6.1 completed
------------------------------------------------------------------------------------------------------------------
## 6.2 useEffect,useMemo,useCallback - folder 6.2
after folder 6.2 move to 6.2.1-useEffect
it suggest that if id changes,re-render
perform side effect in function component,
sideEffect- don't affect other function, can't be done during Re-Rendering


6.2.2 folder- useMemo timing
means remembering some output given an input and not computing it again

6.2.3 folder- useCallback
means cache a function definition b/w re-rendering

6.2.4 - Custom Hooks
make your own hooks
------------------------------------------------------------------------------------------------------------------

## 6.3- react
Reconciliation
process of taking current state, finding div from existing state,
Reconciling what DOM should look like, putting things on dom

Can you do DOM manipulation yourself - Yes
Should you do it yourself - No
Is it good for you to delegate the heavy task of calculating the DOM changes to React - Yes
What do you give to React - The state
How often does react re-render - Any time state changes 
Does React have tricks to make calculations faster - Yes

new react app- react-app-test in week_6>6.3 folder
react is a framework
reactdom is used to write website,reactNative can be used to write mobile app
------------------------------------------------------------------------------------------------------------------

## 6.4-Assignment
### 1-use-Memo
Assignment1-
okay we did the solution in assignment1 file
assignments-master/week-6/1-use-memo/src/components/Assignment1.jsx
now this file is included in assignments-master/week-6/1-use-memo/src/app.jsx

to run an assignment file in app.jsx just comment out the included file's corresponding tag, like assignment 1
then comment off the {/*<Assignment1 />*/} tag

Assignment2-
goal is too find a specific word using search bar from given data
hence render the whole using filter and useMemo

Assignment3-
all logic in for loop,keep totalValue as variable,hence use let, now this one is commented out
we will use useMemo
now try the same using "reducer"

### 2-use-callback
Assignment1-
Count increment and decrement,button click calls a function having been already defined the logic
useCallback used so that no re-rendering happens

Assignment2-
Input box,type something,onclick the button show the text as alert

### 3-use-ref
Assignment1-
Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

Assignment2-
Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

Assugnments Done