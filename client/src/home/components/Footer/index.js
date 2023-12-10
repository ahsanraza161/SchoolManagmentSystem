import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={6} className="mx-auto">
            <div className="social-icons">
              <ul>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-square-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-behance"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
