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
when component get mount or unmount
components go through a lifecycle of events: mounting, updating, and unmounting. These events are triggered when a component is created, updated, or destroyed.

# Custom Hooks
Hooks that you create yourself, so other people can use them are called custom hooks.

Custom Hooks in React are user-defined f
unctions that encapsulate reusable logic and
stateful behavior. They allow developers to extract and share common functionality across
multiple components, promoting code reusability and maintaining cleaner and more modular
code.

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

# Browser functionality related Hooks
1. useIsOnline hook
Create a hook that returns true or false based on weather the user is currently online
You are given that -
    1. window.navigator.onLine returns true or false based on weathel the user is online
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
Cleanup: The useEffect hook also returns a cleanup f
unction. This f
unction removes the
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