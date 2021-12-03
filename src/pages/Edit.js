import React, { useState } from 'react'
import Posts from '../components/Posts'
import Form from '../components/Form';

const Edit= ({search, fetchData, posts, user, setLoading, loading}) => {
    const [isActive, setActive] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState("");
    const [editObject, setEditObject] = useState({});
    
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
        return (
            <section className='edit'>
                <div className={isActive ? "form" : "form active"}>
                    <Form setLoading={setLoading} isActive={isActive} setActive={setActive} editObject={editObject} editId={editId} editMode={editMode} setEditMode={setEditMode} fetchData={fetchData} user={user} posts={posts}/> 
                </div>
                {loading ? null 
                :  <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <button className={isActive ? "show-btn active" : "show-btn"} onClick={toggleClass}>
                            <span className='bar'></span>
                        </button>
                    </div>}
                {(filteredPosts.length === 0 && loading === false) ? <h1 className='no-posts'>This user has no posts</h1> :  <Posts setEditObject={setEditObject} setEditId={setEditId} setActive={setActive} setEditMode={setEditMode} search={search} setLoading={setLoading} loading={loading} fetchData={fetchData} posts={filteredPosts}/>}
            </section>
        )
    }   
}

export default Edit