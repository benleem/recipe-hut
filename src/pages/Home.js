import React from 'react'
import axios from 'axios';
import Posts from '../components/Posts'

const Home = () => {
    const fetchData = async () => {
        try {
            console.log("Loading...")
            const response = await axios.get('/.netlify/functions/display-posts');
            var postData = await response.data;
            console.log(postData);
            console.log("Data received");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className='home'>
            <p>This is the home page</p>
            <button onClick={fetchData}>Test</button>
            <Posts/>
        </section>
    )
}

export default Home