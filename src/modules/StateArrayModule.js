// ------------------------------------------STATEARRAYMODULE.JS



import React, {useState} from 'react'
import './StateArrayModule.css';

const StateArrayModule = () => {
    const birdsArray = ["seagull", "hummingbird", "blackbird"]
    const [birds, setBirds] = useState( birdsArray )

    function filterBirds(e){
        setBirds(
            birdsArray.filter( ( bird ) => bird.includes(e.target.value)  )
        ) 
    }

    return(
        <div className="submodule state-array">
            <h2>This module let´s you filter an array</h2>
            <p>{birds.map( (bird, i) => <li key={i}>{bird}</li> )}</p>
            <input onInput={ filterBirds } />  
        </div>
    )
}

export default StateArrayModule