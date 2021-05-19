import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'




function ProfilePicture(source, className){ 

    return(
        
        <div className={className}>
            { source.source && <img src={source}/>}
            { !source.source && <FontAwesomeIcon icon={faUserCircle} size="6x"/>}
        </div>
    )
}

export default ProfilePicture;