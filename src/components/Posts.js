import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Post from './Post'

const Posts = () => {
    const [posts, setPost] = useState([]);

    const fetchData = async () => {
        try {
            console.log("Loading...")
            const response = await axios.get('/.netlify/functions/display-posts');
            var postInfo = await response.data.data;
            setPost(postInfo);
            console.log("Data received");
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    const feed = posts.map(post => post);

    return (
        <div className='posts'>
            {feed.length ? feed.map(post => <Post key={post.ref["@ref"].id} post={post.data.postInfo}/>) : "Loading..."}
        </div>
    )
}

export default Posts