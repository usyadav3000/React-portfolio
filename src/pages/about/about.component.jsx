import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Profile from '../../assets/img/profile/profile1.webp';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './about.style.css';

const About = () => {
    return (
      <div id="about">
        <div className="about">
          <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
          <Container>
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={6}>
                <Row className="justify-content-center mb-2 mr-2 ">
                  <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row className=" align-items-start p-2 my-details rounded">
                  Hi there! I am <strong>&nbsp;Umashankar Yadav</strong>
                  <br />A passionate programmer and a Web developer, born and brought up in India. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and MySQL as my tech stack.
                  <br />
                   I am pursuing  Engineering with specialization in 'Computer Science and Engineering'.
                
                  <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                  <br /> <br />
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <a href="#contact">
                        <Button className="m-2" variant="outline-primary">
                          Let's talk
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://drive.google.com/file/d/1YjUKXrTq17sD3GXDmA7WWYixviplPvvi/view" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-success">
                          My Resume
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/usyadav3000" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-dark">
                          GitHub
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://www.linkedin.com/in/umashankar-yadav-77063016b/" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-info">
                          LinkedIn
                        </Button>
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  };
  
  export default About;