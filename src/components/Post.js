import React from 'react'
import axios from 'axios'
import { useLocation } from 'react-router'

const Post = ({ setLoading, setEditObject, setEditId, setActive, setEditMode, fetchData, post}) => {
    const location = useLocation();

    const editPost = () =>{
        setEditObject(post.data.postInfo);
        setEditId(post.ref["@ref"].id);
        window.scrollTo(0, 0);
        setEditMode(true);
        setActive(true);
    }
    
    const deletePost = async () =>{
        setEditMode(false);
        try {
            setLoading(true);
            await axios.post('/.netlify/functions/cloudinary_delete', {data: post.data.postInfo.imgId});
            await axios.delete('/.netlify/functions/delete', {
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
                {location.pathname === "/edit" ?
                    <div className='edit-section'>
                        <button className='edit-post' onClick={editPost}>Edit</button>
                        <button className='delete-post' onClick={deletePost}>Delete</button>
                    </div> : null
                }
            </div>
        </div>
    )
    
}

export default Post