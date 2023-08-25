import React from 'react'
import './main.css';
import logo2 from './images/logo-contact.png'
import wtsp from './images/whatsapp.png';
import lnkdn from './images/linkedin.png';
import insta from './images/instagram.png';
import { Row, Col, Container } from 'react-bootstrap';

const footer = () => {

    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col xs='12' md='4'>
                        <p> <img src={logo2} className='logo2' alt="logo-footer" /></p>
                        <p>
                            <button className='btn'><img src={insta} alt='Instagram' /></button>
                            <button className='btn'><img src={lnkdn} alt='Linkednin' /></button>
                            <button className='btn'><img src={wtsp} alt='Whatsapp' /></button>
                        </p>
                    </Col>
                    <Col xs='12' md='8'>
                    <p class='tag-line'>With Francaiseasy, you can be sure to get the best French language education in the most convenient way possible. Choose us and you'll be on your way to mastering the French language in no time.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default footer;