import React, { useState } from 'react'
import Posts from '../components/Posts'
import Form from '../components/Form';

const Edit= ({fetchData, posts, user}) => {
    const [isActive, setActive] = useState(false);
    
    const toggleClass = () => {
        setActive(!isActive);
    }

    if (user === null) {
        return (
            <div className='no-user'>
                <p>Please login to view this page!</p>
            </div>
        )
    }   
    else{
        const filteredPosts = posts.filter(post => post.data.postInfo.userId === user.id);
        if (filteredPosts.length > 0) {
            return (
                <section className='edit'>
                    <div className={isActive ? "form" : "form active"}>
                        <Form user={user}/> 
                    </div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <button className={isActive ? "show-btn active" : "show-btn"} onClick={toggleClass}>
                            <span className='bar'></span>
                        </button>
                    </div>
                    <Posts fetchData={fetchData} posts={posts.filter(post => post.data.postInfo.userId === user.id)}/>
                </section>
            )
        }
        else{
            return(
                <section className='edit'>
                    <div className={isActive ? "form" : "form active"}>
                        <Form fetchData={fetchData} user={user}/> 
                    </div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <button className={isActive ? "show-btn active" : "show-btn"} onClick={toggleClass}><span className='bar'></span></button>
                    </div>
                    <h1 className='no-posts'>This user has no posts</h1>
                </section>
            )
        }
    }   
}

export default Edit