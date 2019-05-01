import React from 'react';
import TwitterIcon from '../../assets/icons/twitter-white.svg';
import GoogleIcon from '../../assets/icons/google-icon.svg';
import RedditIcon from '../../assets/icons/reddit-white-outline.svg';
import './SocialButton.css';

const SocialButton = ({ social=null }) => {
    switch (social) {
        case "twitter":
            return(
                <button style={{backgroundColor: "#1da1f2"}} className="social-button twitter-button">
                    <img className="social-icon" src={TwitterIcon} alt="Twitter"/>
                </button>);
        case "google":
            return (
                <button className="social-button google-button">
                    <img className="social-icon" src={GoogleIcon} alt="Google"/>
                </button>);
        case "reddit":
            return (
                <button style={{backgroundColor: "#ff4500" }} className="social-button reddit-button">
                    <img className="social-icon" src={RedditIcon} alt="Reddit"/>
                </button>);
        default:
            return(
                <button className="social-button">
                    <img style={{height: "45px"}} className="social-icon" src={GoogleIcon} alt="Google"/>
                </button>); 
    }
}

export default SocialButton;