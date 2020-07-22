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
                                    Arrays and Sorting 
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
                        <div className = "week-tile-muted-blue">
                            <div className = 'week-tile-content' >
                                <div className = 'week-tile-title'>
                                    Week Two
                                </div>
                                <div className = 'week-tile-body'>
                                    Strings 
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
                                    Strings 
                                    <br/>
                                    and
                                    <br/>
                                    Proactive Communication
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
                                    Week One
                                </div>
                                <div className = 'week-tile-body'>
                                    Arrays and Sorting 
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
                        <div className = "week-tile-muted-brown">
                            <div className = 'week-tile-content' >
                                <div className = 'week-tile-title'>
                                    Week Two
                                </div>
                                <div className = 'week-tile-body'>
                                    Strings 
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
                        <div className = "week-tile-muted-green">
                            <div className = 'week-tile-content' >
                                <div className = 'week-tile-title'>
                                    Week Three
                                </div>
                                <div className = 'week-tile-body'>
                                    Strings 
                                    <br/>
                                    and
                                    <br/>
                                    Proactive Communication
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
                                    Week One
                                </div>
                                <div className = 'week-tile-body'>
                                    Arrays and Sorting 
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
                                    Week Two
                                </div>
                                <div className = 'week-tile-body'>
                                    Strings 
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
                        <div className = "week-tile-muted-brown">
                            <div className = 'week-tile-content' >
                                <div className = 'week-tile-title'>
                                    Week Three
                                </div>
                                <div className = 'week-tile-body'>
                                    Strings 
                                    <br/>
                                    and
                                    <br/>
                                    Proactive Communication
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