import {React, useState} from 'react'
import {
    Link
} from "react-router-dom"; 
import netlifyIdentity from 'netlify-identity-widget';

const Header = () => {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    }

    const ntlIdentity = () => {
        netlifyIdentity.open();
    }
    
    const functionBundle = () =>{
        toggleClass();
        ntlIdentity();
    }

    return (
        <header>
            <nav className='navbar'>
                <div style={{display:'flex', alignItems:'center',justifyContent:'space-between', height:'100%', width:'100%'}}>
                    <Link to='/'><img src="./img/logo.png" alt="" style={{maxWidth: '50px', marginTop:'5px'}}/></Link>
                    <button className={isActive ? "toggle-btn active" : "toggle-btn"} onClick={toggleClass} >
                        <span className="bar"></span>
                    </button>
                </div>
                <ul className={isActive ? "nav-list active" : "nav-list"}>
                    <li style={{paddingLeft:'0px'}}>
                        <Link to="/"><img src="./img/home.png" alt="" onClick={toggleClass}/></Link>
                    </li>
                    <li>
                        <Link to="/edit"><img src="./img/edit.png" alt="" onClick={toggleClass}/></Link>
                    </li>
                    <li style={{paddingRight:'0px'}}>
                        <button onClick={functionBundle}><img src="./img/user.png" alt=""/></button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header