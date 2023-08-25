import React from 'react'
import './main.css';
import { Row, Col, Container } from 'react-bootstrap';
import TestBlock from './TestBlock';
import test from './images/test.jpg'

const Testimonial = () => {
    return (
        <div className='Test-Module'>
            <Container >
                <p className='heading'>Testimonials</p>
                <Row>
                    <Col xs="12" md="6"><TestBlock image={test}></TestBlock></Col>
                    <Col xs="12" md="6"><TestBlock image={test}></TestBlock></Col>
                </Row>
                <Row>
                    <Col xs="12" md="6"><TestBlock image={test}></TestBlock></Col>
                    <Col xs="12" md="6"><TestBlock image={test}></TestBlock></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonial;