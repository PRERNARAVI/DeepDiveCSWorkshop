import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <Container className="about-us-comtainer" >
                    <h3 className="about-us-heading">Hi and Welcome!</h3>
                    <div className = "about-us-text">
                    Many students, especially those from low-income and underprivileged communities, 
                    are unaware of the technical and soft skills that are expected in tech sector jobs and 
                    the technical interview process. In this workshop we aim to help with these topics and 
                    cement the data structures and computer science concepts that come up during technical 
                    interviews through weekly workshop meetings. These meetings will be in the form of 
                    videos (live or recorded) that go over computer science topics such as <b>arrays</b>, <b>linked lists</b>, 
                    and <b>recursion</b>, and soft skills such as <b>working the clock</b>, <b>proactive communication</b> and <b>developing a solution. </b>
                    </div>
                    <div className = "about-us-text">
                    In striving to attain this workshops goals, we will also be assigning coding questions that 
                    cover the technical topic explored each week and that are typically asked in a a technical interview  
                    </div>
                    <h4 className="about-us-heading">Workshop Pace</h4>
                    <div className = "about-us-text">
                    If time permits, would definetly recommend following the 10 week schedule - however, if you fnd yourself 
                    to be comftorable with a few of the topics and would like to proceed at a faster pace, its definitely 
                    fine for you to speed on through!
                    </div>
                 </Container>
                 
                 
            </div>
        )
    }
}