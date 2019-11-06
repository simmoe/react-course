// The JSON for Rick and Morty is colledted from this exellent ressource: https://github.com/jdorfman/awesome-json-datasets#github-api
// Turns out there is a Rick and Morty API: https://rickandmortyapi.com/

import React, {useState} from 'react'
import characters from '../files/rickmorty'
import Character from './Character'
import './characters.css'

let str = ''
characters.results.map( c => { str += `"${c.name}",` } )
console.log(str)

const RickMorty = () => {

    const [stateCharacters, setStateCharacters] = useState(characters.results)

    const removeCharacter = (e) => {
        setStateCharacters(stateCharacters.filter( c => c.name !== e ))
    }
    
    return (
        <div className="submodule">
            <h2>This module uses a submodule to parse characters</h2>
            <p>Click image to remove character. Since we need the submodule to handle the clik event, we pass on an onClick function from the parent component - when the submodule img is clicked, the submodule passes an event with the character name, back to the parent component. The parent then removes this item from state</p>
            <div className="characters">
                {stateCharacters.map( (character, index) =>
                 <Character key={index} name={character.name} img={character.image} gender={character.gender} status={character.status} onClick={removeCharacter} />
             )}
            </div>
        </div>
    )
}

export default RickMorty