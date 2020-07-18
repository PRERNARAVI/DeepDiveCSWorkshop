import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <Container className = "about-us-container">
                    <div className = "about-us-text">
                    Hi and Welcome !
                    Many students, especially those from low-income and underprivileged communities, 
                    are unaware of the technical and soft skills that are expected in tech sector jobs and 
                    the technical interview process. In this workshop we aim to help with these topics and 
                    cement the data structures and computer science concepts that come up during technical 
                    interviews through weekly workshop meetings. These meetings will be in the form of 
                    videos (live or recorded) that go over computer science topics such as arrays, linked lists, 
                    and recursion, and soft skills such as working the clock, proactive communication and developing a solution.
                    <br></br>
                    
                    In striving to attain this workshops goals, we will also be assigning coding questions that 
                    cover the technical topic explored each week and that are typically asked in a a technical interview
                    
                    Workshop Pace

                    If time permits, would definetly recommend following the 10 week schedule - however, if you fnd yourself 
                    to be comftorable with a few of the topics and would like to proceed at a faster pace, its definitely 
                    fine for you to speed on through !

                 </div>
                 

                </Container>
            </div>
        )
    }
}