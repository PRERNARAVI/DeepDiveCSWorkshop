import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Featured from './Featured';
import AboutUs from './AboutUs';
import Fade  from './Fade';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './imageCSS.css';
import './styles.css'
const options = [
    'one', 'two', 'three'
];

const fadeImages = [
    './pic1.jpeg',
    './pic2.jpeg',
    './pic3.jpeg'
  ];
  
  const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: false,
    indicators: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
  }
  
  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade {...fadeProperties}>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[0]} />
            </div>
            <h2>First Slide</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} />
            </div>
            <h2>Second Slide</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} />
            </div>
            <h2>Third Slide</h2>
          </div>
        </Fade>
      </div>
    )
  }
export default class HomePage extends Component {
    render() {
        return (
            
            <div>


                <Slideshow></Slideshow>
                <Row className= "featured-container">
                    <Featured>
                    </Featured>

                </Row>
                <Row>
                    <Col class = "col">
                            <Row >
                                {/** space for navigation bar LHS */}
                                <div className= "nav-container">
                                    <Nav vertical className= "nav-group">
                                        <NavItem>
                                            <NavLink className="nav-item" href="/">About</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-item" href="/schedule">Schedule</NavLink>
                                        </NavItem>
                                        
                                        <NavItem>
                                            <NavLink className="nav-item" href="#">Topics</NavLink>
                                        </NavItem>
                                        
                                    </Nav>
                                </div>                   
                            </Row>  
                    </Col>
                </Row>
                   

                    <Col >
                        {/** Insert Featured and About Us components here RHS*/}
                        <AboutUs/>
                    </Col>
            </div>
           
        )
    }
}