import React from 'react'

const Slide = ({title, src}) => {
    return (
        <li className='carousel-slide'>
            <img src={src} alt="" />
            <p>{title}</p>
        </li>
    )
}

export default Slide
