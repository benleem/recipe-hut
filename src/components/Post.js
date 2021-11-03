import React from 'react'

const Post = ({post}) => {
    return (
        <div className='post'>
            <div className='img-container'>
                <img src={post.imgUrl} alt="recipe"/>
            </div>
            <div>
                <h2 style={{paddingBottom:'0px'}}>{post.title}</h2>
                <p style={{fontSize:'12px'}}>By: {post.username}</p>
                <h3>Ingredients</h3>
                <p>{post.ingredients.map((ingredient, index) => ((index ? ', ': '') + ingredient))}</p>
                <h3>Description</h3>
                <p className='description'>{post.description}</p>
            </div>
        </div>
    )
    
}

export default Post 