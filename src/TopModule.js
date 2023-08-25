import React from 'react'
import './main.css';
import { Row, Col, Container } from 'react-bootstrap';
import topimg from './images/logo.jpg'

const TopModule = () => {
    return(
    <div className='top'>
        <Container className='Top-Module'>
        <Row>
            <Col xs='12' md='5' className='top-img-mobile'>
                <img src={topimg} className='top-img'  alt="learn"/>
            </Col>
            <Col xs='12' md='7' className='top-text'>
            <h1>Why choose Françaiseasy ?</h1>
              With Francaiseasy, you can be sure to get the best French language education in the most convenient way possible. Choose us and you'll be on your way to mastering the French language in no time.
            </Col>
        </Row>
        </Container>
    </div>
    )
}

export default TopModule;