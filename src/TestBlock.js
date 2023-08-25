import React from "react";


const TestBlock = (props) => {
    return(
        <div  className='test-section'>
                    <div className='test-div'>
                        <div className='Test-img-div'><img src={props.image} className='Test-img' alt='Test' /></div>
                        <div class="testimonial-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                    </div>
        </div>
    )
}

export default TestBlock;