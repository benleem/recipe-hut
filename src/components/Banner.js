import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='text'>
                <h1>Share and collect recipes from all over the world</h1>
                <h3>With Recipe Hut you can discover a plethora of recipes. Search recipes by title or publisher to 
                    find recipes fast. Browse the home page to stumble upon enchanting meals to cook up for dinner. 
                    You can also add to our community whether you are a hobbyist or a master chef!
                </h3>
                <Link to="/home">Enter the Hut</Link>
            </div>
            <div className='img'>
                <img src="./img/placeholder.jpeg" alt=""/>
            </div>
        </div>
    )
}

export default Banner
