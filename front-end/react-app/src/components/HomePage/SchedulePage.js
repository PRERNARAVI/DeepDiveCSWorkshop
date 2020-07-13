import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Featured from './Featured';
import AboutUs from './AboutUs';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Header from './Header';
import Schedule from './Schedule'

const options = [
    'one', 'two', 'three'
];
export default class SchedulePage extends Component {
    render() {
        return (
            <div>
            <Header/>
            <div class = "site-container">
            <div id = "nav-body">
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
            </div>
            <div id = "content-body" >
            {/** Insert Featured and About Us components here RHS*/}
            <Schedule/>
           
            </div>
            </div>
            </div>
    )
    }
}