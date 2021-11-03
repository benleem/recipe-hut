import React, { useState} from 'react'
import Posts from '../components/Posts'
import Form from '../components/Form';

const Edit= ({posts, user}) => {
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
        return (
            <section className='edit'>
                <div className={isActive ? "form" : "form active"}>
                    <Form user={user}/> 
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <button className={isActive ? "show-btn active" : "show-btn"} onClick={toggleClass}><span className='bar'></span></button>
                </div>
                <Posts posts={posts.filter(post => post.data.postInfo.userId === user.id)}/>
            </section>
        )
    }   
}

export default Edit