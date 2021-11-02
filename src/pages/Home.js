import React from 'react'
import Posts from '../components/Posts'

const Home = ({user}) => {
    return (
        <div id='wrapper'>
            <Posts user={user}/>
        </div>
    )
}

export default Home