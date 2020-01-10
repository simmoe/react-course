import React from 'react'

const MusicVideo = (props)  => {
    return(
        <div className='video'>
            <h3>{props.song}</h3>
            <p>By: {props.artist}<br/>
               Number: {props.number}
            </p>
        </div>
    )
}

export default MusicVideo