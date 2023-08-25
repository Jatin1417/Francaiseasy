import React from "react";


const TestBlock = (props) => {
    return(
        <div  className='test-section'>
                    <div className='test-div'>
                        <div className='Test-img-div'><img src={props.image} className='Test-img' alt='Test' /></div>
                        <div class="testimonial-para">{props.para}</div>
                    </div>
        </div>
    )
}

export default TestBlock;