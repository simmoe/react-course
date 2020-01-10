import React,{useState} from 'react'
import StateSubmodule from './StateSubmodule'

const StateModule = ()  => {
    const [stateVariable, setStateVariable] = useState(0)
    const [string, setString] = useState('I am a string in state')
    return(
        <div className='submodule'>
            <h1>StateModule</h1>
            <p>This module has state. It means dynamic variables, that can be updated very quickly. Like this number: <strong>{stateVariable}</strong></p>
            <button onClick={ () => setStateVariable(stateVariable + 1)  }>Hit me to count</button>
            <p>This module also has a string value in state: <b>{string}</b></p>
            <StateSubmodule setString={setString} stateVariable={stateVariable} string={string} />
        </div>
    )
}

export default StateModule