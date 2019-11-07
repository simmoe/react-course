// React is a JavaScript library created by Facebook
// React is a User Interface (UI) library
// React is a tool for building UI components

import React from "react"

// The HTML DOM is an Object Model for HTML. It defines:
// HTML elements as objects
// Properties for all HTML elements
// Methods for all HTML elements
// Events for all HTML elements

import ReactDOM from "react-dom"

//React DOM render takes two argumentws: 
//An HTML element (NOT a string) 
//And a reference to the HTML DOM

ReactDOM.render(<h1>Hei sveis</h1>, document.querySelector("#root"));

// THE JSX THING
// What we just saw looks unusual: HTML and JAVASCRIPT mixed!??
// This is called JSX - it is a React syntax that lets you write concise HTML/XML-like structures (e.g., DOM like tree structures) in the same file as you write JavaScript code
// i.e:

const  nav = (
    <ul id="nav">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
    </ul>
)

//It looks weird at first maybe, but it will come in handy along the way

// ALL IN ONE ELEMENT
// We can send lots of HTML to the render method  - but it needs to reside in ONE containing element:

ReactDOM.render(
    <main>
      <div>
        <h1>Hallo</h1>
      </div>
      <article>MOIN</article>
    </main>
    , document.querySelector("#root")
    
  )

/* COMPONENTS */
/* Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear. */

function Main() {  
  return (
    <main>
      <h1>Ha det på badet</h1>
      <p>Dette er min React-app</p>
    </main>
  )
}

ReactDOM.render(<Main />, document.querySelector("#root"))

//BUT wait - what about arrow functions? -right, let´s rewrite the code for the component as an arrow function:

const Main = () => {  
    return (
      <main>
        <h1>Ha det på badet</h1>
        <p>Dette er min React-app</p>
      </main>
    )
}

ReactDOM.render(<Main />, document.querySelector("#root"))

// Short about CSS in react 
// In the beginning we can just write absolutely normal css - only ONE difference: the className operator

const Main = () => {  
    return (
      <main>
        <h1 className='min-overskrift'>Ha det på badet</h1>
        <p>Dette er min React-app</p>
      </main>
    )
}
/* 

body {
    background-color: orange;
}
 
.min-overskrift {
     font-size: 60px;
}
*/ 


/* FLERE KOMPONENTER  */

import React from "react"
import ReactDOM from "react-dom"

const MinOverskrift = () => {
  return(
    <h2>Hejsa</h2>
  )
}

const Main = () => {
  return(
    <div>
        <MinOverskrift />
        <h1>Her er main komponenten</h1>
        <MinOverskrift />
    </div>
  )
}

ReactDOM.render(
  <Main />, 
  document.querySelector("#root")
)

/*  KOMPONENTER I EGNE FILER  */

//Lets move MinOverskrift to a separate file


/*                  MAKE a WEBPAGE WITH REACT  */

import React from "react"
import ReactDOM from "react-dom"
import MinHeader from "./components/MinHeader"
import MinMain from "./components/MinMain"
import MinFooter from "./components/MinFooter"

function App() {
  return(
    <div className="container">
      <MinHeader />
      <MinMain />
      <MinFooter />      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)

/* ___________________________HEADER________________________________ */

import React from "react"

function MinHeader() {
    return(
        <header>
            <h1>Dette er min header</h1>
        </header>
    )
}

export default MinHeader

/* ___________________________MAIN________________________________ */

import React from "react"

function MinMain() {
    return(
        <main>
            <p>Dette er main-elementet mitt</p>
        </main>
    )
}

export default MinMain

/* ___________________________FOOTER________________________________ */

import React from "react"

function MinFooter() {
    return(
        <footer>
            <p>Vi holder til i Rosenkrantz gate</p>
        </footer>
    )
}

export default MinFooter


/* CSS FOR THE PAGE */

/* 
body {
    margin: 0;
 }
 
 .container {
     display: grid;
     grid-template-rows: auto 1fr auto;
     min-height: 100vh;
 }
 
 header {
     background-color: orange;
 }
 
 footer {
     background-color: papayawhip;
 }
  */