import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StoreFrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCirclesIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, Icon, IconButton } from '@material-ui/core'
import  AddIcon  from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'




function Header() {
    return  <div className="header">  
        <div className="header__left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png?20200820101156" alt=""/>
            <div className="header__input">
                <SearchIcon />
                <input placeholder="Search Facebook" type="text"/>
            </div>
        </div>
        <div className="header__center">
            <div className="header__option header__option--active">
                <HomeIcon fontSize="large"/>
            </div>
            <div className="header__option">
                <FlagIcon fontSize="large"/>
            </div>
             <div className="header__option">
                <SubscriptionsOutlinedIcon fontSize="large"/>
            </div>
            <div className="header__option">
                <StoreFrontOutlinedIcon fontSize="large"/>
            </div>
            <div className="header__option">
                <SupervisedUserCirclesIcon fontSize="large"/>
            </div>
        </div>
        <div className="header__right">
            <div className="header__info">
                <Avatar />
                <h4>Shane Sharareh</h4>
            </div>
            <div className="header__options">
            <IconButton>
                <AddIcon/>
            </IconButton>
            <IconButton>
            <ForumIcon/>
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon/>
            </IconButton>
          <IconButton>
                <ExpandMoreIcon/>
            </IconButton>  
            </div>
        </div>

    </div>

  
}

export default Header;
