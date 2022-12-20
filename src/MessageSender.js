import React from 'react'
import "./MessageSender.css"
import {Avatar} from "@material-ui/core";
import './MessageSender.css';
import VideocamIcom from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { InsertEmoticonTwoTone } from '@material-ui/icons';
function MessageSender() {
    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return (
    <div className="messageSender">
        <div className="messageSender__top">
            <Avatar/>
            <form>
                <input placeholder="What's on your mind" className="messageSender__inpur"/>
                <input placeholder = "image URL (Optional)" className=""/>
                <button onClick={handleSubmit} type="submit">
                    Hidden submit
                </button>
            </form>
        </div>
         <div className="messageSender__bottom">
        <div className="messageSender__option">
            <VideocamIcom style={{color:'red'}}/>
            <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
            <PhotoLibraryIcon style={{color:'green'}}/>
            <h3>Photo/Video</h3>
        </div>
         <div className="messageSender__option">
            <InsertEmoticonIcon style={{color:'orange'}}/>
            <h3>Feeling/Activity</h3>
        </div>
    </div>
    </div>
  )
}

export default MessageSender