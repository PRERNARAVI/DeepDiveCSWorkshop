import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';

  const WorkshopWeekCards = (props) =>
  {
      return(
          <Container id = "CardDeck-Container">
            <Row>
                <Col xs>First, but unordered</Col>
                <Col xs={{ order: 12 }}>Second, but last</Col>
                <Col xs={{ order: 1 }}>Third, but second</Col>
            </Row>
          </Container>
        
          
      )
  }
  export default WorkshopWeekCards;