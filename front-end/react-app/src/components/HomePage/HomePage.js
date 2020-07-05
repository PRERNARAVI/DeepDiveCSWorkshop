import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Featured from './Featured';
import AboutUs from './AboutUs';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Row>
                <Col xs={3}>
                    <Row >
                        {/** space for navigation bar LHS */}
                                
                                
                    </Row>  
                </Col>
                    <Col xs={9}>
                        {/** Insert Featured and About Us components here RHS*/}
                        <Featured/>
                        <AboutUs/>
                    </Col>
                </Row>
            </div>
        )
    }
}