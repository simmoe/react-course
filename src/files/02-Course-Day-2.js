/*  WE CONTINUE IN SCRIMBA  */
/*  JSX....... - how to combine Javascript and HTML in REACT */

import React from 'react'
import ReactDOM from 'react-dom'

function Main() {
  
  const emne = "React JS"
  const a = 10
  const b = 20
  
  return (
    <main>
      <h1>Learning {emne}</h1>
      <p>Summen av {a} og {b} er {a + b}</p>
    </main>
  )
}

ReactDOM.render(
  <Main />, 
  document.getElementById("root")
)

/*                      PROPS                        
Props are arguments passed into React components.
Props are passed to components via HTML attributes.
*/

/*-----------------------MAIN-------------------------*/

import React from 'react'
import ReactDOM from 'react-dom'
import Film from "./components/Movie"

const Main = () => {
  
  return (
    <main>
      <h1>Mine filmer</h1>
      <ul>
        <Movie tittel="Ben Hur" aar="1940" />       
        <Movie tittel="Spartacus" aar="1980" />       
        <Movie tittel="King Kong" aar="1990" />       
      </ul>
          
    </main>
  )
}

ReactDOM.render(
  <Main />, 
  document.getElementById("root")
  )
  
/*-----------------------MOVIE-------------------------*/
import React from "react"

const Movie = (props) => {
  return (
    <li>{props.tittel} kom ut i {props.aar}</li>
    )
  }
  
  export default Movie
  
  
/*-----------------------TEGNESERIER-------------------------*/
// well get images here https://github.com/simmoe/useful-files
// or maybe better, here: https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/simmoe/useful-files/tree/master/comics 


/*-----------------------MAIN-------------------------*/

import React from 'react'
import ReactDOM from 'react-dom'
import Comic from "./components/Comic"

const Main = () => {
  return (
    <div>
        <h1>Mine favoritter</h1>
        <main>
          <Comic title="Lynvingen" url="./img/lynvingen.jpg" />
          <Comic title="Månestråle" url="./img/maanestraale.jpg" />
          <Comic title="Supermann" url="./img/supermann.jpg" />
        </main>  
      </div>        
    )
  }
  
  ReactDOM.render(<Main />, document.getElementById('root'));
  
/*-----------------------Comic-------------------------*/

import React from "react"

const Comic = (props) => {
    return (
        <article>
            <h2>{props.title}</h2>
            <img src={props.url} />
        </article>
    )
}

export default Comic

// THEN ADD CSS

/* body { 
    background-color: #eee;
}

main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
}

main article {
    background-color: white;
    padding: 8px;
}

main article img {
    width: 100%;
} */

/* __________________________ MAKE THE COMICS INTO AN ARRAY OF COMPONENTS __________________ */

const Main = () => {

  const comics = [    
    { title: "Månestråle", url: "./img/maanestraale.jpg" },    
    { title: "Supermann", url: "./img/supermann.jpg" },
    { title: "Lynvingen", url: "./img/lynvingen.jpg" },
  ]

    return (
      <div>
        <h1>Mine favoritter</h1>
        <main>
          {
            comics.map( 
              (comic, i) => 
              <Comic 
                key={i}
                title={tegneserie.navn} 
                url={tegneserie.url} 
              /> 
            )
          }
        </main>  
      </div>        
    )
}

/*                   IF WE CAN MAKE IT, LETS GET SOME DATA                 */

// get some quotes: gist.github.com/simmoe

/*                            MAIN COMPONENT                              */

import React from 'react'
import ReactDOM from 'react-dom'
import quotes from './quotes.js'
import Quote from './components/Quote'

const Main = () => {
    return (
      <main>
        <h1>Hello quotes!</h1>
       {
            quotes.map(
            (q,i) => 
            <Quote quote={q.quote} author={q.author} key={i} />
          )
      }
      </main>
    )
}

ReactDOM.render(<Main />, document.getElementById('root'));


/*                            QUOTE COMPONENT                              */

import React from 'react'

const Quote = (props) => {
    return(
        <div className='quote'>        
            <blockquote cite={props.author}>
                <p><i>{props.quote}</i></p>
                <p><strong>{props.author}</strong></p>
                <hr />
            </blockquote>
        </div>
    )
}

export default Quote
