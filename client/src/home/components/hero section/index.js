import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from './main.png';
import './style.css';
const Herosection = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="hero-content">
              <h1>Empowering Minds, Enabling Growth:</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida
              </p>
              <div className="btn p-0 mt-4">
                <a href="#">Start Learning now</a>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <img src={Image} alt="" style={{ padding: 35 }} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Herosection;
