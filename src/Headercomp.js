import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import './Header.css';
import logo from './images/logo.jpg'
import wtsp from './images/whatsapp.png';
import lnkdn from './images/linkedin.png';
import insta from './images/instagram.png';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (

        <AppBar className='Header' position='static'>
            <Container>
                <Toolbar className='toolbar'>
                    <div className='header-comp'>
                        <Typography>
                            <img src={logo} className='logo' alt="logo" />
                        </Typography>
                        <Typography>
                            <button className='btn'>Home</button>
                            <button className='btn'>About</button>
                            <button className='btn'>Contact</button>
                        </Typography>
                        <Typography>
                            <a className='btn' href='https://www.instagram.com/francaiseasy_/?igshid=MzRlODBiNWFlZA%3D%3D' ><img src={insta} alt='Instagram' /></a>
                            <a className='btn' href='https://www.linkedin.com/company/fran%C3%A7aiseasy-centre-de-francophiles/' ><img src={lnkdn} alt='Linkednin' /></a>
                            <a className='btn' href='https://wa.me/7303094335' ><img src={wtsp} alt='Whatsapp' /></a>
                        </Typography>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>

    )
}


export default Header