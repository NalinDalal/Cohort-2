# 7.1|Context Api,Prop Drilling

Jargon -> Single Page App,Client Side Bundle, Client Side Routing

Pre-React- hard reloading of stes as a request was sent,would see a white page for some time
React- single page app,no hard reloading,client side routing

## Routing :-
react-router-dom -> reactrouter.com

Wrap app routes in browser through Application

Fresh Project:
cmd: "npm install react-router-dom"
week_7/week-7-1
App.jsx, Components/Dashboard.jsx,Components/Landing,jsx

In App.jsx the commented code with 1 infront of it,It was written first
Notice that the code with //1 was hard reloading
but to instant reload and remove the hard reloading comment the //1 code and new logic written
not works-excellent
we can't use a function outside a component that is not in <BrowserRouter>
hooks must be called inside a component inside browserrouter
hence we got correct error-43:08

## LazyRouting:
I want to go only on say page 1
but the website has say 10 pages.now do we want to load all 10 page,or just 1 page
1 page would be optimal,
->Whole bundle,code for page 1

default keyword ahead of a function suggests that only that function shoul be exported 
hence in the app.jsx file we need to specify the imports

```jsx
const Dashboard= lazy (()=>import('./components/Dashboard'))
const Landing = lazy(()=>import('./components/Landing'))
```

i don't know maybe move useNavigate() to BrowserRouter-> the corresponding code will have comment with '2' and commented one with '1'
error: useNavigate() may be used only in the context of a <Router> component
Suspense,lazy one with //2 comment ahead of it; previous will be commented
Suspense API,asynchronour component fetching,asynchronous data fetching

## PropDrilling
move to folder 7.1_2
will see more
create 3 component-App,count,Buttons
define state variable,render both variable-Count,Buttons

## ContextAPI
Solved by ContextAPI
we're actually pushing your state management outside the code react components

make a directory (contextApi0,contextApi1)
Let’s create a simple Counter application, first without the context API(contextApi0) and then with it(contextApi1)
Things to learn -
createContext
Provider
useContext hook

context-an object that let you teleport a thing from one place to another
context.jsx contextApi1/src/App.jsx

------------------------------------------------------------------------------------------------------------------------------------
# 7.2|Context,State Management,Recoil