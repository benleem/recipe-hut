import React, { useState} from 'react'
import Posts from '../components/Posts'
import Form from '../components/Form';

const Edit= ({user}) => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    }

    // console.log(user)
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
                <Posts/>
            </section>
        )
    }   
}

export default Edit