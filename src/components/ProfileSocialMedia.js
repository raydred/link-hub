import React from 'react';
import { Container, Row, Col, BDiv } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'

function ProfileSocialMedia(twitter, instagram){ 

    return(
        
        <div className="text-center">
           <Container>
                <Row>
                    <Col>Column</Col>
                    <Col>Column</Col>
                    <BDiv w="100"></BDiv>
                    <Col>Column</Col>
                    <Col>Column</Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProfileSocialMedia;