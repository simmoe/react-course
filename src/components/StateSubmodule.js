import React from 'react'

const StateSubmodule = (props)  => {
    const changeParentState = (e) => {
        props.setString(e.target.value)
    }
    return(
        <div className='subsubmodule'>
            <h1>Submodule of the StateModule</h1>
            <p>This module recievies two props that are in fact state variables from its parent. </p>
            <p>State variable number: {props.stateVariable}</p>
            <p>The module also recieves a text: <b>{props.string}</b></p>
            <input onChange={changeParentState} type='text' placeholder='write a new value'></input>
        </div>
    )
}

export default StateSubmodule