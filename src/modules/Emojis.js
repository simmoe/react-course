import React from 'react'
import emojis from '../files/emojis'
import Emoji from './Emoji'
import './emoji.css'

const Emojis = () => {
    const keys = Object.keys(emojis).slice(0, 40)
    return(
        <div className='submodule'>
            <h2>An extensive dataset</h2>
            <p>This module parses a huge array with images from github. To keep sane, we just map the first 40 here onto a subcomponent...</p>
            <div className='emojis'>
            {
                keys.map(
                    key => 
                        <Emoji title={key} url={emojis[key]} key={key} />
                )
            }
            </div>
        </div>
    )
}

export default Emojis