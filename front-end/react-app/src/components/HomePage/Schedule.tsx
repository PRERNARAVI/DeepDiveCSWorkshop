import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';
import card_cover from   '../../assets/card_cover.jpg'
import FullWidthTabs from './testTabs'

  const WorkshopWeekCards = (props) =>
  {
      return(
          <Container id = "CardDeck-Container">
            <FullWidthTabs/>
          </Container>
        
          
      )
  }
  export default WorkshopWeekCards;