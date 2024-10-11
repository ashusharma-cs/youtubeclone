import React, { useState } from 'react'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

import "../header.css"
import { Link } from 'react-router-dom';

function Header() {

    const [inputSearch, setinputSearch] = useState("");

    return (
        <div className='header'>

            <div className="header__left">

                <MenuSharpIcon />

                <Link to="/">
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png?20220605194644" alt="" />
                </Link>

            </div>


            <div className="header__input">

                <input onChange={e => setinputSearch(e.target.value)} value={inputSearch} type="text" placeholder='Search' />
                <Link to={`/search/${inputSearch}`}>
                    <SearchSharpIcon className='header__inputButton' />
                </Link>

            </div>

            <div className="header__right">

                <VideoCallSharpIcon className='header__icon' />
                <NotificationsSharpIcon className='header__icon' />
                <AccountCircleSharpIcon className='header__icon' />

            </div>


        </div>
    )
}

export default Header
