import React from 'react'
import { Avatar } from '@mui/material'
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import "../channelRow.css"

function ChannelRow({ image, channel, subs, nov, verified, desc }) {
    return (
        <div className='channelRow'>
            <Avatar className='channelRow__logo' src={image}></Avatar>
            <div className="channelRow__text">
                <h2>{channel} {verified && <CheckCircleSharpIcon className='tick' />}</h2>
                <p>{subs} subscribers . {nov} videos</p>
                <p>{desc}..</p>
            </div>
        </div>
    )
}

export default ChannelRow
