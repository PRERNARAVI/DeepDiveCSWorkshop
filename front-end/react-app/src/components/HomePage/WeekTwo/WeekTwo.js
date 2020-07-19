import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Featured from '../Featured';
import AboutUs from '../AboutUs';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Header from '../Header';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Content from "./Content"

export default class WeekTwo extends Component {
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
            
            <div class="background-container">
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
                                            aria-expanded="true" aria-controls="collapseOne" >
                                        Weeks <i id="icon" class="fas fa-angle-down" ></i>
                                        </a></NavLink>
                                        {this.state.open ? (
                                        <div className="content">
                                        <li className="list"><NavLink className ="list" href="/week1">Week 1</NavLink></li>
                                        <li className ="list"><NavLink className ="list" href="/week2">Week 2</NavLink></li>
                                        <li className ="list"><NavLink className ="list" href="/week3">Week 3</NavLink></li>
                                        <li className ="list"><NavLink className ="list" href="/week4">Week 4</NavLink></li>
                                        <li className="list"><NavLink className ="list" href="/week5">Week 5</NavLink></li>
                                        <li className ="list"><NavLink className ="list" href="/week6">Week 6</NavLink></li>
                                        <li className ="list"><NavLink className ="list" href="/week7">Week 7</NavLink></li>
                                        <li className ="list"><NavLink className ="list" href="/week8">Week 8</NavLink></li>
                                        </div>
                                        ) : null}
                                    </div>
                                    
                                </NavItem>
                                
                            </Nav>
                        </div>                   
                    </Row>  
                </Col>
                <Col xs={9}>
                    <br></br>
                    {/** Insert Featured and About Us components here RHS*/}
                    <Container className="home-page-container">
                        <Content />
                    </Container>
                    
                </Col>
            </Row>
            </div>
           
        )
        
    }
    
}