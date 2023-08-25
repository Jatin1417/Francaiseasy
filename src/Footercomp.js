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
                            <a className='btn' href='https://www.instagram.com/francaiseasy_/?igshid=MzRlODBiNWFlZA%3D%3D' ><img src={insta} alt='Instagram' /></a>
                            <a className='btn' href='https://www.linkedin.com/company/fran%C3%A7aiseasy-centre-de-francophiles/' ><img src={lnkdn} alt='Linkednin' /></a>
                            <a className='btn' href='https://wa.me/7303094335' ><img src={wtsp} alt='Whatsapp' /></a>
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