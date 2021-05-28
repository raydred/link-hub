
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfilePicture from './ProfilePicture'
import ProfileTitle from './ProfileTitle'
import ProfileSocialMedia from './ProfileSocialMedia'
import ProfileLinkList from './ProfileLinkList'


function LinkHub() {
  return (
    <Container className="app-width">
      <Row>
        <Col>
          
          <ProfilePicture 
            source=""
          />
          <ProfileTitle 
            title="That Comic Thing"
            subtitle="The internet's best comic, since 1927." 
          />
          <hr />
          <ProfileLinkList />
          <hr />          
          <ProfileSocialMedia 
            twitter="raydred" 
            instagram="raydred"  
          />

        </Col>
      </Row>
    </Container>
  );
}

export default LinkHub;
