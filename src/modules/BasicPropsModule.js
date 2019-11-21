// ------------------------------------------------------BASICPROPSMODULE.JS

import React from 'react'

const BasicPropsModule = (props) => {
    return(
        <div className="submodule">
            <h2>This is a module with props</h2>
            <p>- it receives this value: <b>{props.value}</b>, from the parent App.js</p> 
        </div>
    )
}

export default BasicPropsModule