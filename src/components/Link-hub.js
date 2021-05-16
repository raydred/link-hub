import logo from '../assets/logo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfilePicture from './ProfilePicture'


function LinkHub() {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          
          <ProfilePicture />

        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default LinkHub;
