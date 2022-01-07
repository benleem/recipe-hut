import React from 'react'
import Posts from '../components/Posts'

const Home = ({ favorites, setFavorites, search, posts, loading}) => {
    return (
        <div className='home'>
            <Posts favorites={favorites} setFavorites={setFavorites} search={search} loading={loading} posts={posts}/>
        </div>
    )
}

export default Home