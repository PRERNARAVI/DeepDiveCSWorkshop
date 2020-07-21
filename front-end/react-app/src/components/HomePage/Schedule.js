import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';

  const WorkshopWeekCards = (props) =>
  {
      return(
          <div  id = "Week-Tile-Container">
            <Row>
                <Col>
                    <div className = "week-tile">
                        <div className = "week-tile-muted-green">
                            <div className = 'week-tile-content'>
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
                <Col >Second, but last</Col>
                <Col >Third, but second</Col>
            </Row>
          </div>

      )
  }
  export default WorkshopWeekCards;