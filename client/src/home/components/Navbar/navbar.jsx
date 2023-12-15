import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
import logo from './logo.png';

const Navbar = () => {
  return (
    <header>
      <Container>
        <Row className="align-items-center">
          <Col lg={3} md={3}>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </Col>
          <Col lg={9}>
            <div className="main-menu">
              <nav>
                <ul className="d-lg-flex d-none">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Result</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Navbar;
