import React from 'react'
import Post from './Post'

const Posts = ({fetchData, posts}) => {
    return (
        <div className='posts'>
            {posts.length ? posts.map(post => <Post fetchData={fetchData} key={post.ref["@ref"].id} post={post}/>).reverse() : "Loading..."}
        </div>
    )
}

export default Posts