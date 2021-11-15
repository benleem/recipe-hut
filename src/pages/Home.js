import React from 'react'
import Posts from '../components/Posts'

const Home = ({posts, loading}) => {
    return (
        <div className='home'>
            <Posts loading={loading} posts={posts}/>
        </div>
    )
}

export default Home