import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

const Footer=()=>{
  return(
    <Container>
      <Row>
        <Col>
          <footer className="text-center py-3">
            Copyright &copy; proshop
          </footer>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
