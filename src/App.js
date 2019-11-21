// -----------------------------------------------------------------APP.JS
import React from 'react'
import BasicModule from './modules/BasicModule'
import BasicPropsModule from './modules/BasicPropsModule'
import DefaultPropsModule from './modules/DefaultPropsModule'
import StateModule from './modules/StateModule'
import StateArrayModule from './modules/StateArrayModule'
import LocalJSONArray from './modules/LocalJSONArray'
import RickMorty from './modules/RickMorty'
import Recipe from './modules/Recipe'
import Checklist from './modules/Checklist'
import Emojis from './modules/Emojis'

const App = () => {
  return(
    <div className="app">
      <h1>App.js</h1>
      <p>App.js is the parent file in a hierarchy of submodules we will create.</p> 
      <div className="submodules">
        <BasicModule />
        <BasicPropsModule value="pink"/>
        <DefaultPropsModule />
        <StateModule />
        <StateArrayModule />
        <Checklist />
        <LocalJSONArray />
        <RickMorty />
        <Recipe />
        <Emojis />

      </div>
    </div>
  )
}

export default App

/* 
GITHUB PAGES DEPLOY STEPS 

Figure the URL of the branch - https://simmoe.github.io/react-course/

Install github-pages node module from the folder terminal: npm install gh-pages --save 

Locate the package.json file in your root directory, add this line of code to the top of the object: 

"homepage": "link-to-your-repository", and save.

In your package.json file, locate “scripts” add these lines of code:
{
   ...
   "predeploy": "yarn run build",
   "deploy": "gh-pages -d build",
   ...
}
now go to github.com and choose a theme like an idiot
*/
