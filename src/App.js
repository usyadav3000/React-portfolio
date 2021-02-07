import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from "react-reveal/Slide";
import {Parallax} from "react-parallax";
import Container from "react-bootstrap/Container";
import MyNavbar from './components/my-navbar/mynavabar.component';
import MyCarousal from './components/my-carousal/mycarousal.component';
import TitleMessage from './components/title-massege/title-massege.component';
import About from './pages/about/about.component';
import Skills from './pages/skills/skills.component';
import Experience from './pages/experience/experience.component';
import TimeLine from './components/proect-timeline/project-timeline.component';
import ContactForm from './pages/contact-form/contact-form.component';
import FooterPanel from "./components/footer/footer.component";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";

import './App.css';

const App=()=>{
  return(
  <div className="App" style={{ position: "relative" }}>
    <MyNavbar />
    <MyCarousal />
    <TitleMessage />
    <Particles className="particles particles-box" params={particlesOptions}/>
    <div>
      <Parallax blur={{ min:-30, max:30}} bgImage={require("./assets/img/parallex/background.webp")} bgImageAlt="" strength={-200}>
        <Container className="container-box rounded">
        <Fade duration={500}> 
        <About />
        </Fade>
        </Container>
    </Parallax>
    </div>
    <div>
        <Container className="container-box rounded">
        <Slide duration={500}> 
        <hr />
        <Skills />
        </Slide>
        </Container>
    </div>
    <div>
        <Container className="container-box rounded">
        <Fade duration={500}> 
        <hr />
        <Experience />
        </Fade>
        </Container>
    </div>
    {/* project section */}
    <div>
        <Container className="container-box rounded">
        <Fade duration={500}> 
        <hr />
        <TimeLine />
        </Fade>
        </Container>
    </div>
    {/* contact-form */}
    <div>
        <Container className="container-box rounded">
        <Fade duration={500}> 
        <hr />
        <ContactForm />
        </Fade>
        </Container>
    </div>
    <hr />
    <FooterPanel />
  </div>
  );
};

export default App;
