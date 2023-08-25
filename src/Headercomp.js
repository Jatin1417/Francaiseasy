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
                            <button className='btn'><img src={insta} alt='Instagram' /></button>
                            <button className='btn'><img src={lnkdn} alt='Linkednin' /></button>
                            <button className='btn'><img src={wtsp} alt='Whatsapp' /></button>
                        </Typography>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>

    )
}


export default Header