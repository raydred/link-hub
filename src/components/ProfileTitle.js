import React from 'react';

function ProfileTitle({title, subtitle}){ 

    return(
        <div>
            <h1 className="text-center profile-title">
            {title}
            </h1>
            
            {subtitle && <h2 className="text-center profile-subtitle">{subtitle}</h2>}
        </div>
    )
}

export default ProfileTitle;