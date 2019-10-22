import React from 'react'
import BasicModule from './modules/BasicModule'
import BasicPropsModule from './modules/BasicPropsModule'
import DefaultPropsModule from './modules/DefaultPropsModule'

const App = () => {
  return(
    <div className="app">
      <h1>App.js</h1>
      <p>App.js is the parent file in a hierarchy of submodules we will create.</p>
      <div className="submodules">
        <h2>Here comes the submodules</h2>
        <BasicModule />
        <BasicPropsModule value="pink"/>
        <DefaultPropsModule />
      </div>
    </div>
  )
}

export default App

/* 
GITHUB PAGES DEPLOY STEPS 

Push repo to github and create a github pages branch from master

Copy the URL of the branch - https://simmoe.github.io/react-course/

Install github-pages node module from the folder terminal: npm install gh-pages --save 

Locate the package.json file in your root directory, add this line of code to the top of the object: "homepage": "link-to-your-repository", and save.

In your package.json file, locate “scripts” add these lines of code:
{
   ...
   "predeploy": "yarn run build",
   "deploy": "gh-pages -d build",
   ...
}

now go to github.com and SWITCH the branch to gh-pages branch 

push/wait.......

*/

