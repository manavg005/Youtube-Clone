import React from 'react'
import './Header.css';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <MenuRoundedIcon />
            <img className="header__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/America_Online_logo.svg" 
                alt=""
            />
            </div>
            <div className="header__input">
            <input placeholder="Search" type="text" />
            <SearchRoundedIcon className="header__inputButton"/>
            </div>
            <div className="header__icon">
            <VideoCallRoundedIcon className="header__icon"/>
            <AppsRoundedIcon className="header__icon"/>
            <NotificationsRoundedIcon className="header__icon"/>
            <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Bergtocht_van_S-charl_naar_Alp_Sesvenna._10-09-2019._%28d.j.b%29_25.jpg/500px-Bergtocht_van_S-charl_naar_Alp_Sesvenna._10-09-2019._%28d.j.b%29_25.jpg" />
            </div>

        </div>
    )
}

export default Header
