// ------------------------------------------------CHARACTER.JS

import React from 'react'

const Character = (props) => {
    const handleClick = () => {
        props.onClick(props.name)
    }
    return(
        <div className="character">
            <img onClick={handleClick} src={props.img} alt={"Profile of " + props.name}/>
            <h3>{props.name}</h3>
            <hr/>
            <p>
                {props.gender}<br/>
                {props.status}<br/>
            </p>
        </div>
    )
}

export default Character