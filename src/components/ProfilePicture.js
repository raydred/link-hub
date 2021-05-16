import React from 'react';




function ProfilePicture(source, className){

    if(!source)
        source = "";

    return(
        
        <div className={className}>
            <img src={source}/>
        </div>
    )
}

export default ProfilePicture;