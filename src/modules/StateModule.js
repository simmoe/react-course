// ------------------------------------------STATEMODULE.JS




import React, {useState} from 'react'

const StateModule = (props) => {
    const [count, setCount] = useState(0)

    return(
        <div className="submodule">
            <h2>This is a module with state</h2>
            <p>We use state to set values - i.e a number: <b>{count}</b></p>
            <button onClick={ () => {setCount(count + 1)} }>Hit me to count</button> 
        </div>
    )
}

export default StateModule