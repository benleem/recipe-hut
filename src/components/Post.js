import React from 'react'

const Post = ({post}) => {
    return (
        <div className='post'>
            <h2>{post.title}</h2>
            <h3>Ingredients</h3>
            <p>{post.ingredients}</p>
            <h3>Description</h3>
            <p className='description'>{post.description}</p>
        </div>
    )
}

export default Post 