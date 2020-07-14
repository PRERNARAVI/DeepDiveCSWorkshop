import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Featured from './Featured';
import AboutUs from './AboutUs';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Header from './Header';
import "@fortawesome/fontawesome-free/css/all.min.css";

const options = [
    'one', 'two', 'three'
];
// const $ = window.$;
// $(".rotate").click(function(){
//     $(this).toggleClass("down"); 
// })
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
        var icon = document.getElementById('icon');
        if(this.state.open){
            icon.className = 'fa fa-angle-down';  
          } else{
            icon.className = 'fa fa-angle-up';
        }
    }
    render() {
        return (
            <div>
            <Header/>
            <Row>
                <Col >
                    <Row >
                        {/** space for navigation bar LHS */}
                        <div className= "nav-container">
                            <Nav vertical className= "nav-group" >
                                <NavItem>
                                    <NavLink className="nav-item" href="/">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-item" href="/schedule">Schedule</NavLink>
                                </NavItem>
                                 
                                <NavItem>
                                    <div>
                                        <NavLink onClick={(e)=>this.togglePanel(e)} className="header" 
                                        href="#">
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" 
                                            aria-expanded="true" aria-controls="collapseOne">
                                        Topics <i id="icon" class="fas fa-angle-down" ></i>
                                        </a></NavLink>
                                        {this.state.open ? (
                                        <div className="content">
                                        <li>Topic 1</li>
                                        <li>Topic 2</li>
                                        <li>Topic 3</li>
                                        <li>Topic 4</li>
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