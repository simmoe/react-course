import React from 'react'

const SubModuleProps = (props)  => {
    return(
        <div className='submodule'>
            <h1>Submodule Props</h1>
            <p>This is a submodule with props - the module receives a JSON object called props from its parent. In that object there are variables, like this one: {props.example}</p>
        </div>
    )
}

export default SubModuleProps