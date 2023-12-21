import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './student.css';
import Studentimage from './Screenshot 2023-12-03 023928.png'
import { useNavigate ,useLocation} from 'react-router-dom';

const Dashboard = () => {
  console.log("DAAASHBOARDDD")

  const {state} = useLocation();
  const {Userdata}= state
  console.log(Userdata)
  const navigate = useNavigate();
  return (
    <div>
      <Container fluid >
        <section className="cards">
          <Row>
            <Col lg={3}>
              <div className="info ">
                <div className="info-icon">
                  <i class="fa-regular fa-pen-to-square"></i>
                  <h5>Upcoming Exams</h5>
                </div>
                <div className="info-txt">6</div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="info exams">
                <div className="info-icon">
                  <i class="fa-regular fa-money-bill-1"></i>
                  <h5>Due Fees</h5>
                </div>
                <div className="info-txt">6</div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="info events">
                <div className="info-icon">
                  <i class="fa-regular fa-flag"></i>
                  <h5>Upcomig Events</h5>
                </div>
                <div className="info-txt">6</div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="info documents">
                <div className="info-icon">
                  <i class="fa-regular fa-folder"></i>
                  <h5>Documents</h5>
                </div>
                <div className="info-txt">6</div>
              </div>
            </Col>
          </Row>
        </section>
        <Row>
          <Col lg={6}>
            <div className="student-card">
              <h2>My Information</h2>
              <div className="student-info">
                <Row>
                  <Col lg={4}>
                    <img src={Studentimage} alt="" />
                  </Col>
                  <Col lg={8}>
                    <ul>
                      <li>
                        <strong>Name:</strong> {Userdata.firstName +" "+Userdata.lastName}
                      </li>
                      <li>
                        <strong>Father Name:</strong> {Userdata.fatherName}
                      </li>
                      <li>
                        <strong>Age:</strong> {Userdata.age}
                      </li>
                      <li>
                        <strong>Class:</strong> {Userdata.grade}
                      </li>
                      <li>
                        <strong>Section:</strong> {Userdata.section}
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="notice-card">
              <h2>Notice Board</h2>
              <div className="notice-info">
                <h5>Jennyfar Lopez</h5>
                <p>Great School management System</p>
              </div>
              <div className="notice-info">
                <h5>Jennyfar Lopez</h5>
                <p>Great School management System</p>
              </div>
              <div className="notice-info">
                <h5>Jennyfar Lopez</h5>
                <p>Great School management System</p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="courses-card">
              <h2>Courses list</h2>
              <ul>
                <li>
                  <strong>Physics:</strong> MR.XYZ
                </li>
                <li>
                  <strong>Chemistry:</strong> MR.ABC
                </li>
                <li>
                  <strong>Maths:</strong> Mr.ABC
                </li>
                <li>
                  <strong>Urdu:</strong>Mr.ABC
                </li>
                <li>
                  <strong>P.S.T:</strong> MR.ABC
                </li>
              </ul>
            </div>
            <div className="exam-card">
              <h2>All Exam Result</h2>
              <div className="exam-info">
                <ul>
                  <li>Class Test</li>
                  <li>Mathematics</li>
                  <li>4.00</li>
                  <li>98.0</li>
                  <li>100.00</li>
                </ul>
              </div>
              <div className="exam-info">
                <ul>
                  <li>Class Test</li>
                  <li>Mathematics</li>
                  <li>4.00</li>
                  <li>98.0</li>
                  <li>100.00</li>
                </ul>
              </div>
              <div className="exam-info">
                <ul>
                  <li>Class Test</li>
                  <li>Mathematics</li>
                  <li>4.00</li>
                  <li>98.0</li>
                  <li>100.00</li>
                </ul>
              </div>
              <div className="exam-info">
                <ul>
                  <li>Class Test</li>
                  <li>Mathematics</li>
                  <li>4.00</li>
                  <li>98.0</li>
                  <li>100.00</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
