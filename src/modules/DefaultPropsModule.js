import React from 'react'

const DefaultPropsModule = (props) => {
    return(
        <div className="submodule">
            <h2>This is the props submodule</h2>
            <p>- it receives this value: <b>{props.value}</b><br/> (you´re right, nothing there), from the parent App.js.</p> 
            <p>Instead we can use a default props value, as we have done for this one: <b>{props.otherValue || "I'm the default value!"}</b></p> 
        </div>
    )
}

export default DefaultPropsModule