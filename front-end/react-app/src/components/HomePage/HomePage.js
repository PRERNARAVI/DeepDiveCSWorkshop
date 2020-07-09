import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Featured from './Featured';
import AboutUs from './AboutUs';
import { Nav, NavItem, NavLink } from 'reactstrap';

const options = [
    'one', 'two', 'three'
];
export default class HomePage extends Component {
    render() {
        return (
            
            <div>
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