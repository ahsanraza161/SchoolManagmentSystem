import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './admin.css'
import Hamburger from '../../components/common/hamburger'
const AdminDashboard = () => {
  return (
      <div>
         <Hamburger/>
        <Container fluid >
        <section className="cards">
          <Row>
            <Col lg={3}>
              <div className="specs ">
                <div className="info-icon">
                <i class="fa-solid fa-users" style={{color: '#78c552'}}></i>
                  <h5>Students</h5>
                </div>
                <div className="student-txt">6</div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="specs">
                <div className="info-icon">
                <i class="fa-solid fa-user-group" style={{color:'#008ae5'}}></i>
                  <h5>Teachers</h5>
                </div>
                <div className="info-txt">6</div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="specs">
                <div className="info-icon">
                <i class="fa-solid fa-user-plus" style={{color:'#ffcb00'}}></i>
                  <h5>Parents</h5>
                </div>
                <div className="info-txt">6</div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="specs">
                <div className="info-icon">
                <i class="fa-regular fa-money-bill-1" style={{color:'#00bfd6'}}></i>
                  <h5>Total Earnings</h5>
                </div>
                <div className="info-txt">6</div>
              </div>
            </Col>
          </Row>
        </section>
        </Container>
        </div>
  );
}


export default AdminDashboard