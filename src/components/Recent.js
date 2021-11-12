import React, { useState} from 'react'

const Recent = () => {
    const [index, setIndex] = useState(0);

    let images = [
        {
            testUrl:'./img/placeholder.jpeg',
        },
        {
            testUrl:'./img/placeholder2.jpeg',
        },
        {
            testUrl:'./img/placeholder3.jpeg',
        },
        {
            testUrl:'./img/placeholder4.jpeg',
        },
        {
            testUrl:'./img/placeholder5.jpeg',
        }
    ];

    const handleNext = () =>{
        if (index === images.length - 1 ) {
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }
    }

    const handlePrev = () =>{
        if (index === 0) {
            setIndex(images.length - 1);
        }
        else{
            setIndex(index - 1);
        }
    }
    
    return (
        <div className='recent-posts'>
            <div className='carousel'>
                <button className='controller next' onClick={handleNext}>Next</button>
                <button className='controller prev' onClick={handlePrev}>Prev</button>
                <div className='carousel-content'>
                    <div className='slide'>
                        <img src={images[index].testUrl} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recent