import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuestionCircle,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SocialMedia from '../data/social-media.json'

function SocialMediaLink({type, username}){ 

    let icon = faQuestionCircle; //default fallback
    
    switch(type)
    {
        case "twitter":
            icon = faTwitter;
            break;
        case "instagram":
            icon = faInstagram;
            break;
        case "email":
            icon = faEnvelope;
            break;
    }

    let url = (SocialMedia[type] ?? "#") + "/" + username;
    

    return(
        <a className="socialmedialink" href={url} target="_blank">
            <FontAwesomeIcon icon={icon} size='2x' />
        </a>
    )
}

export default SocialMediaLink;