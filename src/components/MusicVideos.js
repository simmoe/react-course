import React, {useState} from 'react'
import mtv from '../files/mtvData'
import MusicVideo from './MusicVideo'

const MusicVideos  = ()  => {
    const[videos, setVideos] = useState(mtv.videos)
    const searchVideos = (e) => {
        const filtered = mtv.videos.filter(
            video => video.song.toLowerCase().includes(e.target.value)
        )
        setVideos(filtered)
    }
    return(
        <div className='submodule'>
            <h1>MusicVideos </h1>
            <p>{mtv.description}</p>
            <input onChange={searchVideos} type='text' placeholder='search by title'></input>
            <div className='videos'>
            {
                videos.map(
                (video, index) => 
                <MusicVideo song={video.song} number={video.number} artist={video.artist} key={index} />
                )
            }
            </div>
        </div>
    )
}

export default MusicVideos 