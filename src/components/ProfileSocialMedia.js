import React from 'react';
import { Container, Row, Col } from 'bootstrap-4-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'

function ProfileSocialMedia({twitter,instagram}){ 

    return(
        
        <div className="text-center">
           <Container>
                <Row>
                    <Col>
                        {twitter && <span><FontAwesomeIcon icon={faTwitter} size='2x' /> </span>}
                        {instagram && <span><FontAwesomeIcon icon={faInstagram} size='2x' /></span>}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProfileSocialMedia; 