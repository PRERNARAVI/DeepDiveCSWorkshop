import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import CardCover from "./../../assets/card_cover.jpg";
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';

  const WorkshopWeekCards = (props) =>
  {
      return(
          <Container id = "CardDeck-Container">
          <CardDeck>
            <Card>
                <CardImg top width="100%" src={CardCover} alt="Card image cap" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={CardCover} alt="Card image cap" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={CardCover} alt="Card image cap" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
            <div id = "card-seperator"></div>
            <Card>
                <CardImg top width="100%" src={CardCover} alt="Card image cap" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card> 
          </CardDeck>
          <CardDeck>
            <Card>
                    <CardImg top width="100%" src={CardCover}alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Button</Button>
                    </CardBody>
            </Card>
            <Card>
                    <CardImg top width="100%" src={CardCover} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Button</Button>
                    </CardBody>
            </Card> 
            <Card>
                    <CardImg top width="100%" src={CardCover} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Button</Button>
                    </CardBody>
            </Card>  
            <Card>
                    <CardImg top width="100%" src={CardCover} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Button</Button>
                    </CardBody>
            </Card>  
            

          </CardDeck>
          <CardDeck>
            <Card>
                    <CardImg top width="100%" src={CardCover} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Button</Button>
                    </CardBody>
            </Card>  
            <Card>
                    <CardImg top width="100%" src={CardCover} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Button</Button>
                    </CardBody>
            </Card> 
            <Card className = "emptyCard">
            </Card>  
            <Card className = "emptyCard"> 
            </Card> 
            </CardDeck>
        
          </Container>
        
          
      )
  }
  export default WorkshopWeekCards;