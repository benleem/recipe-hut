import React, { useState} from 'react'
import Posts from '../components/Posts'
import Form from '../components/Form';

const Edit= ({user}) => {
    const [isActive, setActive] = useState(false);
    const [formView, setFormView] = useState(false);
    const [postsView, setPostsView] = useState(false);

    const toggleForm = () => {
        setFormView(!formView);
        setPostsView(false);
    }
    const togglePosts = () => {
        setPostsView(!postsView);
        setFormView(false);
    }

    const postsBundler = () => {
        setActive(!isActive);
        togglePosts();
    }

    const formBundler = () => {
        setActive(!isActive);
        toggleForm();
    }

    // console.log(user)
    if (user === null) {
        return (
            <div>
                <p>Please login to view this page!</p>
            </div>
        )
    }   
    else{
        return (
            <section className='edit'>
                <div className={isActive ? "fork active" : "fork"}>
                    <div className='add'>
                        <button onClick={formBundler} >Add a recipe</button>
                    </div>
                    <div className='edit'>
                        <button onClick={postsBundler}>Edit/Delete recipes</button>
                    </div>
                </div>
                <div className={formView ? "form active" : "form"}>
                    <Form/>
                </div>
                <div className={postsView ? "content active" : "content"}>
                    <p style={{textAlign:'center'}}>User email: {user.email}</p>
                    <Posts/>
                </div>
            </section>
        )
    }   
}

export default Edit