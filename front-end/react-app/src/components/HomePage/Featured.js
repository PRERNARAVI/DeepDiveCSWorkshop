import React, {Component} from 'react';
import {Row, Container} from 'react-bootstrap';
import './imageCSS.css';

export default class Featured extends Component {
    render() {
        return (
            <div>
                <Container>
                    <img className = "fixedImage" src={require('./pic1.jpeg')}/>
                     Featured Content
                </Container>
            </div>
        )
    }
}