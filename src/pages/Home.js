import React from 'react'
import Posts from '../components/Posts'

const Home = ({posts}) => {
    return (
        <div id='wrapper'>
            <Posts posts={posts}/>
        </div>
    )
}

export default Home