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
          
          <ProfilePicture source=""/>
          <ProfileTitle text="That Comic Thing™" />
          <ProfileSocialMedia twitter="@raydred" instagram="@raydred"  />

        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default LinkHub;
