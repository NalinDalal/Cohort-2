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
------------------------------------------------------------------------------------------------------------------------

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

------------------------------------------------------------------------------------------------------------------------

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