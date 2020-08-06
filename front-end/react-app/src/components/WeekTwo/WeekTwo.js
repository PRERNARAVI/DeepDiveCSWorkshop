import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Featured from '../HomePage/Featured';
import AboutUs from '../HomePage/AboutUs';
import { Nav, NavItem } from 'reactstrap';
import Header from '../Header';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Content from "./Content";
import { NavLink } from "react-router-dom";
import NavBar from "./../NavBar";

export default class WeekTwo extends Component {
    render() {
        return (   
            <div >
            <Row>
                <Col >
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