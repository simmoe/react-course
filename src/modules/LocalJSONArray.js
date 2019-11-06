import React, {useState} from 'react'
import './StateArrayModule.css';
import mtv from '../files/mtv'
import './LocalJSONArray.css'

const LocalJSONArray = () => {
    const [videos, setVideos] = useState( mtv.videos )

    function filterVideos(e){
        setVideos(
            mtv.videos.filter( ( video ) => video.song.toLowerCase().includes(e.target.value)  )
        ) 
    }

    return(
        <div className="submodule json-array">
            <h2>This module uses a JSON object from a local file</h2>
            <p>{mtv.description}</p>
            <input onInput={ filterVideos } placeholder="Search by title" />  
            <div className="videos">
                {videos.map( (video, i) => 
                <div key={i} className="video">
                    <h2>{video.song}</h2>
                    <p>{video.artist}<br/>Order: {video.number}</p> 
                </div>
                )}
            </div>
        </div>
    )
}

export default LocalJSONArray