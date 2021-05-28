import React from 'react';
import { Container, Row, Col } from 'bootstrap-4-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'
import SocialMediaLink from './SocialMediaLink';

function ProfileSocialMedia({twitter,instagram}){ 

    return(
        
        <div className="text-center">
           <Container>
                <Row>
                    <Col>
                        {twitter && <SocialMediaLink type="twitter" username={twitter} />  }
                        {instagram && <SocialMediaLink type="instagram" username={instagram} />  }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProfileSocialMedia; 