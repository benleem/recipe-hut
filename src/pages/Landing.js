import React from 'react'
import Banner from '../components/Banner'
import Offers from '../components/Offers'
import Recent from '../components/Recent'
import Transition from '../components/Transition'

const Landing = ({posts}) => {
    return (
        <section className='landing-page'>
            <Banner/>
            <Transition/>
            <Offers/>
            <Transition/>
            <Recent posts={posts}/>
            <Transition/>
            <div className='picture-gallery'>
                <p>Image grid</p>
            </div>
        </section>
    )
}

export default Landing