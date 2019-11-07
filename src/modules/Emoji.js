import React from 'react'

const Emoji = (props) => {
    return(
        <div className='emoji'>
            <img src={props.url} alt={props.title} />
        </div>
    ) 
}

export default Emoji