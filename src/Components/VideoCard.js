import React from 'react'
import "../videocard.css"
import { Avatar } from '@mui/material';

function VideoCard({ image, title, channel, views, timestamps, channelImage }) {
    return (
        <div className='videoCard'>


            <img className="videoCard__thumbnail" src={image} alt="" />

            <div className="videoCard__info">

                <Avatar src={channelImage} className='videoCard__avatar'></Avatar>

                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} . {timestamps} </p>
                </div>

            </div>
        </div>
    )
}

export default VideoCard
