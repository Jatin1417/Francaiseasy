import React from 'react'
import './main.css';
import { Row, Col, Container } from 'react-bootstrap';
import TestBlock from './TestBlock';
import test1 from './images/Test1.jpeg'

const Testimonial = () => {
    const para1 = "I am studying A2 at Francaiseasy. The classes are well organised and very enjoyable. Aastha ma’am is a patient and supportive teacher. After just 2 months of classes I am much more confident about writing and conversing in French. I would highly recommend Francaiseasy to any beginner or intermediate who wants to become fluent in the French language.";
    return (
        <div className='Test-Module'>
            <Container >
                <p className='heading'>Testimonials</p>
                <Row>
                    <Col xs="12" md="6"><TestBlock image={test1} para={para1}></TestBlock></Col>
                    <Col xs="12" md="6"><TestBlock image={test1} para={para1}></TestBlock></Col>
                </Row>
                <Row>
                    <Col xs="12" md="6"><TestBlock image={test1} para={para1}></TestBlock></Col>
                    <Col xs="12" md="6"><TestBlock image={test1} para={para1}></TestBlock></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonial;