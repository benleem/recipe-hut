import React from 'react'
import Post from './Post'
import Loading from './Loading'

const Posts = ({fetchData, posts, loading}) => {
    return (
        <div className='posts'>
            {loading ? <Loading/> : posts.map(post => <Post fetchData={fetchData} key={post.ref["@ref"].id} post={post}/>).reverse()}
        </div>
    )
}

export default Posts