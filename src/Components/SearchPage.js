import React from 'react'
import "../searchPage.css"
import TuneSharpIcon from '@mui/icons-material/TuneSharp';
import ChannelRow from "./ChannelRow"
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchPage__filter">
                <TuneSharpIcon></TuneSharpIcon>
                <h2>Filters</h2>
            </div>

            <hr />

            <ChannelRow
                image="https://yt3.googleusercontent.com/4syhBAa6d4sK_J8YxhRFHDyARee3qoR2bUtGMtRDyyVncFn41bSHUDf-FNmvcu3TD2JwowD8sA=s176-c-k-c0x00ffffff-no-rj"
                channel="BeerBiceps"
                verified
                subs="5.44M"
                nov="830"
                desc="BeerBiceps is the home for The Ranveer Show or TRS - Happiness Through Curiosity. A show where we host the world's greatest success stories and try digging out their secrets to success. We cover everyone from entrepreneurs to Bollywood film stars to even athletes."></ChannelRow>

                <hr />

                <VideoRow
                views="1.4M"
                subs="659K"
                desc="No matter how tough it gets. Spoken by Les Brown, Eric Thomas, Nathan Harmon. Music: The Storm by Secession Studios"
                timestamp="9 Hours ago"
                channel="Ben Lionel Scott"
                title="No Matter How Tough It Gets"
                image="https://images.pexels.com/photos/853247/pexels-photo-853247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></VideoRow>
        </div>
    )
}

export default SearchPage
