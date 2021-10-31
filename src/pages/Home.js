import React from 'react'
import Posts from '../components/Posts'

const Home = ({account}) => {
    return (
        <section className='home'>
            <p>This is the home page</p>
            <p>{account}</p>
            <Posts/>
        </section>
    )
}

export default Home