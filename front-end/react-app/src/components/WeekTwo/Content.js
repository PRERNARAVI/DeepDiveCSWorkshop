import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";

export default class Content extends Component {
    render() {
        return (
            <div>
                <Container className="about-us-comtainer" >
                    <h3 className="about-us-heading">Welcome to Week 2!</h3>
                    <div className = "about-us-text">
                    In this week, we will be introducing you to <b><u>Arrays and Strings</u></b> on the Technical Side.
                    We will also be providing tips on <b><u>Proactive Communication</u></b> to train you for behavioral interviews.
                    Given below is a link to the recorded workshop. You can also view and access the material from 
                    the workshop following that. Finally, we have also allocated a section below to go over assigned coding 
                    problems pertaining to arrays and strings, to help deepen your understanding for these critical concepts.
                    We have tried to pick out those questions and patterns that commonly appear in technical interviews.
                    </div>
                    <div className = "about-us-text">
                    If you have any questions, feel free to reach out to us. Hope this helps!
                    </div>
                    <h4 className="about-us-heading">Workshop Recordings</h4>
                    <div className = "about-us-text">
                    You can find the recorded video from the workshop below!
                    </div>
                    <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/jX6kn9_U8qk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true" width="950px" height="565px"></iframe>
                    </div>

                    <h4 className="about-us-heading">Technical Skills Section</h4>
                    <div className = "about-us-text">
                    Here are a few resources from the workshop that introduce you to Arrays and Strings!
                    </div>
                    <div>
                        {/** Calculated dimensions using aspect ratio, please change with scale */}
                    <iframe className = "technical-weekTwo-ppt" src="https://gtvault-my.sharepoint.com/personal/pravi34_gatech_edu/_layouts/15/Doc.aspx?sourcedoc={9e93ece5-b968-4454-9883-c452b9e4f673}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="455px" height="281px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                    <iframe className = "technical-weekTwo-ppt" src="https://gtvault-my.sharepoint.com/personal/pravi34_gatech_edu/_layouts/15/Doc.aspx?sourcedoc={9e93ece5-b968-4454-9883-c452b9e4f673}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="455px" height="281px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                    </div>
                    <h4 className="about-us-heading">Soft Skills Section</h4>
                    <div className = "about-us-text">
                    Here are a few resources from the workshop that give you tips on Proactive Communication!
                    </div>
                    <div>
                    <iframe className = "soft-skill-ppt" src="https://gtvault-my.sharepoint.com/personal/pravi34_gatech_edu/_layouts/15/Doc.aspx?sourcedoc={f1292387-001a-4d66-8428-a617574ad792}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="950px" height="565px" >This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                    </div>
                    <h4 className="about-us-heading">Frequently Asked Interview Questions for this Week's Topics</h4>
                    <div className = "about-us-text">
                    Insert Questions here
                    </div>
                    <div className="week-nav">
                    <Row>
                        <Col>
                            <NavLink style={{ textDecoration: 'none' }} className = "previous-week-text" to="/week1">&lt; Previous Week</NavLink>
                        </Col>
                        <Col>
                            <NavLink style={{ textDecoration: 'none' }} className = "next-week-text" to="/week3"> Next Week &gt;</NavLink>
                        </Col>
                    </Row>
                    </div>
                    <br></br>
                    <br></br>
                 </Container>

                
                
            </div>
        
        )
    }
} 