import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';
import card_cover from '../../assets/card_cover.jpg'

  var divStyle = {
    //backgroundImage: 'url("https://assets.leetcode.com/explore/cards/30-day-coding-challenge/img")',
    backgroundImage: 'url(' + card_cover + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'right center',
    // WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };

  const WorkshopWeekCards = (props) =>
  {
      
      return(
          <div  id = "Week-Tile-Container">
            <Row>
                <Col>
                    <div className = "week-tile">
                        <div className = "week-tile-muted-green">
                            <div className = 'week-tile-content' >
                                <div className = 'week-tile-title'>
                                    Week One
                                </div>
                                <div className = 'week-tile-body'>
                                    Kickoff 
                                    <br/>
                                    and
                                    <br/>
                                    How to Work the Clock
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col >
                    <div className = "week-tile">
                        <div className = "week-tile-muted-blue">
                            <div className = 'week-tile-content' >
                                <div className = 'week-tile-title'>
                                    Week Two
                                </div>
                                <div className = 'week-tile-body'>
                                    Arrays and Strings 
                                    <br/>
                                    and
                                    <br/>
                                    Proactive Communication
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col >
                <div className = "week-tile">
                        <div className = "week-tile-muted-red">
                            <div className = 'week-tile-content' >
                                <div className = 'week-tile-title'>
                                    Week Three
                                </div>
                                <div className = 'week-tile-body'>
                                    Recursion 
                                    <br/>
                                    and
                                    <br/>
                                    Design your Algorithm
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className = "week-tile-seperator"></div>
            <Row>
                <Col>
                    <div className = "week-tile">
                        <div className = "week-tile-muted-yellow">
                            <div className = 'week-tile-content' >
                                <div className = 'week-tile-title'>
                                    Week Four
                                </div>
                                <div className = 'week-tile-body'>
                                    Time Complexity 
                                    <br/>
                                    and
                                    <br/>
                                    Writing Code on the Whiteboard
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col >
                    <div className = "week-tile">
                        <div className = "week-tile-muted-brown">
                            <div className = 'week-tile-content' >
                                <div className = 'week-tile-title'>
                                    Week Five
                                </div>
                                <div className = 'week-tile-body'>
                                    Trees and Binary Search 
                                    <br/>
                                    and
                                    <br/>
                                    Talking through your Solution
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col >
                <div className = "week-tile">
                        <div className = "week-tile-muted-green">
                            <div className = 'week-tile-content' >
                                <div className = 'week-tile-title'>
                                    Week Six
                                </div>
                                <div className = 'week-tile-body'>
                                    Linked Lists 
                                    <br/>
                                    and
                                    <br/>
                                    Handling Mistakes
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className = "week-tile-seperator"></div>
            <Row>
                <Col>
                    <div className = "week-tile">
                        <div className = "week-tile-muted-blue">
                            <div className = 'week-tile-content' >
                                <div className = 'week-tile-title'>
                                    Week Seven
                                </div>
                                <div className = 'week-tile-body'>
                                    Stacks and Queues 
                                    <br/>
                                    and
                                    <br/>
                                    Testing your Code
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col >
                    <div className = "week-tile">
                        <div className = "week-tile-muted-red">
                            <div className = 'week-tile-content' >
                                <div className = 'week-tile-title'>
                                    Week Eight
                                </div>
                                <div className = 'week-tile-body'>
                                    Heaps 
                                    <br/>
                                    and
                                    <br/>
                                    Increasing your Code Speed
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col >
                <div className = "week-tile">
                        <div className = "week-tile-muted-brown">
                            <div className = 'week-tile-content' >
                                <div className = 'week-tile-title'>
                                    Week Nine
                                </div>
                                <div className = 'week-tile-body'>
                                    Hashtables 
                                    <br/>
                                    and
                                    <br/>
                                    Tackling Imposter Syndrome
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className = "week-tile-seperator"></div>
            <Row className="justify-content-md-center">
                <Col xs={4}>
                    <div className = "week-tile">
                        <div className = "week-tile-muted-yellow">
                            <div className = 'week-tile-content' >
                                <div className = 'week-tile-title'>
                                    Week Ten
                                </div>
                                <div className = 'week-tile-body'>
                                    Graphs 
                                    <br/>
                                    and
                                    <br/>
                                    Putting it all Together
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
                
          </div>

      )
  }
  export default WorkshopWeekCards;