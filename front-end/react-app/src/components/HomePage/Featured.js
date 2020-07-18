import React, {Component} from 'react';
import {Row, Container} from 'react-bootstrap';
import './imageCSS.css';
import Fade from "./Fade";
import { Nav, NavItem, NavLink } from 'reactstrap';
import image1 from '../../stacksQueues.png';
import image2 from '../../timeComplexity.png';
import image3 from '../../graphs.png';
import { useParams } from 'react-router-dom';
const fadeImages = [
    image1,
    image2,
    image3
  ];

  const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: false,
    indicators: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
  }

  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade {...fadeProperties}>

          {fadeImages.map((pic, index) =>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[index]} />
              </div>
              <h2>{index + 1}</h2>
          </div>
          )}
        </Fade>
      </div>
    )
  }
export default class Featured extends Component {
    render() {
        return (
            <div>
                <Container className="featured-container">
                    {/* <img className = "fixedImage" src={require('./pic1.jpeg')}/> */}
                     <Slideshow></Slideshow>
                     

                </Container>
            </div>
        )
    }
}