import {React, useState} from 'react'
import axios from 'axios';
import {
    Link
} from "react-router-dom"; 

const Header = () => {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };

    const fetchData = async () => {
        try {
            console.log("Loading...")
            const response = await axios.get('/.netlify/functions/display-posts');
            var postData = response.data;
            console.log(postData);
            console.log("Data received");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <header>
            <nav className='navbar'>
                <div style={{display:'flex', alignItems:'center',justifyContent:'space-between', height:'100%', width:'100%'}}>
                    <Link st to='/'><img src="./img/logo.png" alt="" style={{maxWidth: '50px', marginTop:'5px'}}/></Link>
                    <button className={isActive ? "toggle-btn active" : "toggle-btn"} onClick={toggleClass} >
                        <span className="bar"></span>
                    </button>
                </div>
                <ul className={isActive ? "nav-list active" : "nav-list"}>
                    <li>
                        <button onClick={fetchData}>Test</button>
                    </li>
                    <li >
                    <Link to="/"><img src="./img/home.png" alt="" /></Link>
                    </li>
                    <li>
                    <Link to="/edit" style={{marginLeft:'25px'}}><img src="./img/edit.png" alt="" /></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header