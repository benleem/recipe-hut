import React from 'react'
import Posts from '../components/Posts'

const Home = ({ search, posts, loading}) => {
    return (
        <div className='home'>
            <Posts search={search} loading={loading} posts={posts}/>
        </div>
    )
}

export default Home