import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import { Nav, NavItem } from 'reactstrap';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
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
            <div className= "nav-container">
                <Nav vertical className= "nav-group" >
                    <NavItem>
                        <NavLink style={{ textDecoration: 'none' }} className="nav-item" to="/">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ textDecoration: 'none' }} className="nav-item" to="/schedule">Schedule</NavLink>
                    </NavItem>
                        
                    <NavItem>
                        <div>
                            <NavLink style={{ textDecoration: 'none' }} onClick={(e)=>this.togglePanel(e)} className="header" 
                            to="#">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" 
                                aria-expanded="true" aria-controls="collapseOne">
                            Weeks <i id="icon" class="fas fa-angle-down" ></i>
                            </a></NavLink>
                            {this.state.open ? (
                            <div className="content">
                            <li className="list"><NavLink style={{ textDecoration: 'none' }} className ="list" to="/week1">Week 1</NavLink></li>
                            <li className ="list"><NavLink style={{ textDecoration: 'none' }} className ="list" to="/week2">Week 2</NavLink></li>
                            <li className ="list"><NavLink style={{ textDecoration: 'none' }} className ="list" to="/week3">Week 3</NavLink></li>
                            <li className ="list"><NavLink style={{ textDecoration: 'none' }} className ="list" to="/week4">Week 4</NavLink></li>
                            <li className="list"><NavLink style={{ textDecoration: 'none' }} className ="list" to="/week5">Week 5</NavLink></li>
                            <li className ="list"><NavLink style={{ textDecoration: 'none' }} className ="list" to="/week6">Week 6</NavLink></li>
                            <li className ="list"><NavLink style={{ textDecoration: 'none' }} className ="list" to="/week7">Week 7</NavLink></li>
                            <li className ="list"><NavLink style={{ textDecoration: 'none' }} className ="list" to="/week8">Week 8</NavLink></li>
                            </div>
                            ) : null}
                        </div>   
                    </NavItem>      
                </Nav>
            </div>              
        );
    }
}