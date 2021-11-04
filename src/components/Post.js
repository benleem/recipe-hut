import React from 'react'
import axios from 'axios'

const Post = ({fetchData, post}) => {
    const deletePost = async (form) =>{
        try {
            await axios.delete('/.netlify/functions/deletepost', {
                data:{
                    id: post.ref["@ref"].id
                }
            });
        } catch (err) {
            console.error(err);
        }
        fetchData();
    }

    return (
        <div className='post'>
            <div className='img-container'>
                <img src={post.data.postInfo.imgUrl} alt="recipe"/>
            </div>
            <div>
                <h2 style={{paddingBottom:'0px'}}>{post.data.postInfo.title}</h2>
                <p style={{fontSize:'12px'}}>By: {post.data.postInfo.username}</p>
                <h3>Ingredients</h3>
                <p>{post.data.postInfo.ingredients.map((ingredient, index) => ((index ? ', ': '') + ingredient))}</p>
                <h3>Description</h3>
                <p className='description'>{post.data.postInfo.description}</p>
                <div className='delete-post'>
                    <button onClick={deletePost}>Delete</button>
                </div>
            </div>
        </div>
    )
    
}

export default Post