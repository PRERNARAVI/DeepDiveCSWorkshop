import React, {Component} from 'react';
import {Row, Container} from 'react-bootstrap';
import './imageCSS.css';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Featured extends Component {
    render() {
        return (
            <div>
                <Container className="featured-container">
                    <img className = "fixedImage" src={require('./pic1.jpeg')}/>
                     Featured Content
                     <a class = "top-right" color="#0d2b68"  font="bold" href="/schedule">CLICK ME</a>
                     <div class="bottom-left">Text about the Featured Content.</div>

                </Container>
            </div>
        )
    }
}