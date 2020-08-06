import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Featured from '../HomePage/Featured';
import AboutUs from '../HomePage/AboutUs';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Header from '../HomePage/Header';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Schedule from "./Schedule";
import { Link } from "react-router-dom";

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
    componentDidMount() {
        const height = document.getElementById("background-container").scrollHeight
        const listItemHeight = document.getElementById("active-page").clientHeight 
        this.setState({height})
        this.setState({listItemHeight})
    }

    render() {
        return (
            
            <div id="background-container">
            <Header/>
            <Row>
                <Col md = {2}>
                    <Row >
                        {/** space for navigation bar LHS */}
                        <div className= "nav-container "  style={{height: this.state.height}} >
                            <Nav vertical className= "nav-group" >
                                <NavItem>
                                    <Link className="nav-item" to="/">About</Link>
                                </NavItem>
                                <NavItem>
                                <div id = "active-page">
                                    <Link className="nav-item" to="/schedule">Schedule</Link>
                                    </div>
                                    <div id = "triangle" style ={{borderWidth: Math.ceil(this.state.listItemHeight*.5) }}>

                                    </div>
                                </NavItem>
                                 
                                <NavItem>
                                    <div>
                                        <NavLink onClick={(e)=>this.togglePanel(e)} className="header nav-item" 
                                        href="#">
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" 
                                            aria-expanded="true" aria-controls="collapseOne" >
                                        Weeks <i id="icon" class="fas fa-angle-down" ></i>
                                        </a></NavLink>
                                        {this.state.open ? (
                                        <div className="content">
                                        <li className="list"><Link className ="list nav-item" to="/week1">Week 1</Link></li>
                                        <li className ="list"><Link className ="list nav-item" to="/week2">Week 2</Link></li>
                                        <li className ="list"><Link className ="list nav-item" to="/week3">Week 3</Link></li>
                                        <li className ="list"><Link className ="list nav-item" to="/week4">Week 4</Link></li>
                                        <li className="list"><Link className ="list nav-item" to="/week5">Week 5</Link></li>
                                        <li className ="list"><Link className ="list nav-item" to="/week6">Week 6</Link></li>
                                        <li className ="list"><Link className ="list nav-item" to="/week7">Week 7</Link></li>
                                        <li className ="list"><Link className ="list nav-item" to="/week8">Week 8</Link></li>
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
                    <Container id="home-page-container">
                        <Schedule />
                    </Container>
                    
                </Col>
            </Row>
            </div>
           
        )
        
    }
    
}