import React from 'react'
import Post from './Post'

const Posts = ({posts}) => {
    return (
        <div className='posts'>
            {posts.length ? posts.map(post => <Post key={post.ref["@ref"].id} post={post.data.postInfo}/>).reverse() : "Loading..."}
        </div>
    )
}

export default Posts