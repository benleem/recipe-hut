import React, { } from 'react'
import Posts from '../components/Posts'

const Favorites = ({ favorites, setFavorites, search, posts, loading, user }) => {
    if (user) {
        const favoriteArr = favorites.map(favorite => favorite.id);
        const filteredPosts = posts.filter(post => favoriteArr.includes(post.ref["@ref"].id));
        return (
            <section className='edit'>
                {(filteredPosts.length === 0 && loading === false) ? <h1 className='no-posts'>This user has no favorites</h1> :  <Posts favorites={favorites} setFavorites={setFavorites} search={search} loading={loading} posts={filteredPosts}/>}
            </section>
        )
    }   
    else{
        return (
            <div className='no-user'>
                <p>Please login to view this page!</p>
            </div>
        )  
    }
}

export default Favorites
