import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Featured from './Featured';
import AboutUs from './AboutUs';
import { Nav, NavItem, NavLink } from 'reactstrap';

const options = [
    'one', 'two', 'three'
];
export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
        open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }
    togglePanel(e){
        this.setState({open: !this.state.open})
    }
    render() {
        return (
            <div>
                <Row>
                <Col >
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
                                    <div>
                                        <NavLink onClick={(e)=>this.togglePanel(e)} className="header">
                                        Topics</NavLink>
                                        {this.state.open ? (
                                        <div className="content">
                                        {this.props.children}
                                        </div>
                                        ) : null}
                                    </div>
                                    
                                </NavItem>
                                
                            </Nav>
                        </div>                   
                    </Row>  
                </Col>
                    <Col >
                        {/** Insert Featured and About Us components here RHS*/}
                        <Featured/>
                        <AboutUs/>
                    </Col>
                </Row>
            </div>
        )
    }
}