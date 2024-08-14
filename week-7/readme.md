# 7.1|Context Api,Prop Drilling

Jargon -> Single Page App,Client Side Bundle, Client Side Routing

Pre-React- hard reloading of stes as a request was sent,would see a white page for some time
React- single page app,no hard reloading,client side routing

## Routing :-
react-router-dom -> reactrouter.com

Wrap app routes in browser through Application

Fresh Project:
cmd: "npm install react-router-dom"
week_7/week-7-1/src
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
c1 to c2; c2 to it's children c3,c4
will see more-ugly way to send down props down the component change
but c2 doesn't need it
create 3 component-App,count,Buttons
define state variable,render both variable-Count,Buttons

## ContextAPI
introduced to solve prop drilling problem
folder 7.1_final
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
folder 7.2

3 things to do if using context:
Define the context
provide throughout component chain
to use it use 'useContext' hook,makes it prettier

So basically, we had ugly way to have it passed down in hierarchy,but if any preceeding memeber don't wanna use it,so we introduced Context. It directly passes down the prop

sub_folder week-7-master
Recoil State Managament Library-component in diff folder,state in another
ReCoil-State management library for React

Recoil has a concept of an atom to store the state
An atom can be defined outside the component
Can be teleported to any component

creating an Atom

Now same as previous c1,child c2,grand child c3,c4
define atom c0 in some other place ,give default value
can use it in c3,c4;hence only c3,c4 gets re-rendered

made a new project by name-"my_folder"
run-npm install recoil
so I basically copied code from master repo to my_folder repo

### Things to learn -
RecoilRoot
atom
useRecoilState
useRecoilValue
useSetRecoilState
selector

make in src folder
store/atoms/count.jsx
define that atoms in count.jsx
Make an context.jsx file with all code in src folder

a/f defining count.jsx, go to App.jsx and clean it state variable,context logic

like useState gave us count,setCount
useRecoil gives us 3 hooks-useRecoilState,useRecoilValue,useSetRecoilValue
useRecoilState gives access to all
useRecoilValue to count
useSetRecoilValue to setCount

my_folder>src>App.jsx
const count = useRecoilValue(countAtom);
need only value,no updation logic,atom passed in it
atom or recoil logic if we want it to use,wrap it inside <RecoilRoot></RecoilRoot>

src/context.jsx,store/atoms/count.jsx

see compare the master folder and my folder and see for all code,so that in my folder it runs

create a selector in store/atoms/count.js

------------------------------------------------------------------------------------------------------------------------------------
# 7.3|Assignments
Assignments Folder under hood 7.3

assign_1:Create User Profile Card Component
install the dependencies;
create a First.jsx file in src folder

now create a component folder, with 2 folders in it:Assets(already present),UserProfileCard/UserProfileCard.jsx,UserProfileCard.css
include the css file into jsx file
clear App.jsx

mounter UserProfileCard into App.jsx,add image into the concerned assets folder, specify the path specifically else it will render error

UserProfileContainer.css to style the image, style thru .upc, then the gradient, now provide style to images, image in profile-down div

now the background colour of whole site: index.css
same documentation in assign_1 individual readme file

assign_2:Create a BackGround Changer in ReactJS
this too done

all assignment done except otp one,document all assignments clearly and calmly

# 7.4|ReCoil
go to folder 7.4
folder 1-easy-bits:
make app.jx,index.css,app,css empty

them make 6 buttons in App.jsx which will be same as linkedin top bar
Home,Me will be as it is, but in remaining I need to render some numbers
now we can do this the ugly way by using useState Hooks and connecting it to backend
but we don't wanna use it

create a new file atoms.js
now we set something in the elements
we want to use it in App.jsx - useRecoilValue

Atoms and Selector Done

2-async-queries
npm create vite@latest

cd 2-async-queries
npm install
npm install recoil

npm run dev

## atomFamily
folder - atom-family
Problem - Sometimes you need more than one atom for your use case
Question - Create a component that takes a todo id as input, and renders the TODO
You need to store the Todo in an atom (can't use useState)
All the TODOs can be hardcoded as a variable
multiple atoms defined but only specific one rendered through id

atom family let's to create multiple atoms dynamically
Returns a function that returns a writeable RecoilState atom.

an atom represents a piece of state with Recoil. An atom is created and registered per <RecoilRoot> by your app. But, what if your state isn’t global? What if your state is associated with a particular instance of a control, or with a particular element? For example, maybe your app is a UI prototyping tool where the user can dynamically add elements and each element has state, such as its position. Ideally, each element would get its own atom of state. You could implement this yourself via a memoization pattern. But, Recoil provides this pattern for you with the atomFamily() utility. An Atom Family represents a collection of atoms. When you call atomFamily() it will return a function which provides the RecoilState atom based on the parameters you pass in.

## selector family
folder- selector-family
app.jsx,atoms.ts
Returns a function that returns a read-only RecoilValueReadOnly or writeable RecoilState selector.

A selectorFamily is a powerful pattern that is similar to a selector, but allows you to pass parameters to the get and set callbacks of a selector. The selectorFamily() utility returns a function which can be called with user-defined parameters and returns a selector. Each unique parameter value will return the same memoized selector instance.

