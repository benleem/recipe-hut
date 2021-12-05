import React, { useEffect } from 'react'
// import Slide from './Slide'
import "@glidejs/glide/dist/css/glide.core.min.css"
import "@glidejs/glide/dist/css/glide.theme.min.css"
import Glide from '@glidejs/glide'

const sliderConfiguration= {
    gap: 20,
    perView: 3,
    startAt: 0,
    type: "carousel",
    focusAt:"center",
    breakpoints: {
        800: {
          perView: 2
        },
        480: {
          perView: 1
        }
    }
};

const Recent = ({posts}) => {
    useEffect(() => {
        // console.log(posts);
        new Glide('.glide', sliderConfiguration).mount();
    }, [])

    return (
        <div className='glide-wrapper'>
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <li className="glide__slide">
                            <img src='./img/add.svg' alt="" />
                            <p>0</p>   
                        </li>
                        <li className="glide__slide">
                            <img src='./img/add.svg' alt="" />
                            <p>1</p>   
                        </li>
                        <li className="glide__slide">
                            <img src='./img/add.svg' alt="" />
                            <p>2</p>   
                        </li>
                        <li className="glide__slide">
                            <img src='./img/add.svg' alt="" />
                            <p>3</p>   
                        </li>
                        <li className="glide__slide">
                            <img src='./img/add.svg' alt="" />
                            <p>4</p>   
                        </li>
                    </ul>
                </div>
                <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                </div>
                <div className="glide__bullets" data-glide-el="controls[nav]">
                    <button className="glide__bullet" data-glide-dir="=0"></button>
                    <button className="glide__bullet" data-glide-dir="=1"></button>
                    <button className="glide__bullet" data-glide-dir="=2"></button>
                    <button className="glide__bullet" data-glide-dir="=3"></button>
                    <button className="glide__bullet" data-glide-dir="=4"></button>
                </div>
            </div>
        </div>
        
    )
}

export default Recent