import React from 'react';

const handleError = (ev) =>{
    ev.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/1024px-Placeholder_no_text.svg.png';
}

function ProfilePicture(source){ 

    return(
        
        <div className="text-center">
            <img 
                onError={handleError} 
                src={source} 
                width='180'
                className="profile"    
            />            
        </div>
    )
}

export default ProfilePicture;