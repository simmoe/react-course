import React from 'react'

const SubModulePropsDefault = (props)  => {
    return(
        <div className='submodule'>
            <h1>Submodule Default Props</h1>
            <p>We can check whether a component actually recieves a prop with LOGICAL AND</p>
            <p>This prop exists: {props.example}</p>
            <p>But this one is empty: {props.nonExisting}</p>
            {
                !props.nonExisting && <p>In stead we can use a default property like this sentence</p>
            }
            <p>It can also be used to check a property inline, like  
                {
                props.nonExisting 
                ? 'hei' 
                : <strong> hei med dig</strong>
                }
            </p>
        </div>
    )
}

export default SubModulePropsDefault