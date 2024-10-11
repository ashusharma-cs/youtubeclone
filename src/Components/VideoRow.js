import React from 'react'
import "../videoRow.css"

function VideoRow({ views, subs, desc, timestamp, channel, title, image }) {
    return (
        <div className='videoRow'>
            <img className="videoRow__thumbnail" src={image} alt="" />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p>{views} views . {timestamp} </p>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default VideoRow
