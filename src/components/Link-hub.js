import logo from '../assets/logo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfilePicture from './ProfilePicture'
import ProfileTitle from './ProfileTitle'
import ProfileSocialMedia from './ProfileSocialMedia'


function LinkHub() {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          
          <ProfilePicture 
            source=""
          />
          <ProfileTitle 
            title="That Comic Thing"
            subtitle="The internet's best comic, since 1927." 
          />
          <hr />
          <ProfileSocialMedia 
            twitter="@raydred" 
            instagram="@raydred"  
          />
          <hr />

        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default LinkHub;
