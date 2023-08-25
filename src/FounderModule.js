import React from 'react'
import './main.css';
import { Container } from 'react-bootstrap';



const Founder = () => {
    return (
        <div className='Founder-img'>
            <Container>
                <div className='Founder-info-div'>
                    <p className='Head-founder'>Know a bit about our founder</p>
                    <p className='Founder-info'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </Container>
        </div>
    )
}

export default Founder;