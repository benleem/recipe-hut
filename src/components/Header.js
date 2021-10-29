import {React, useState} from 'react'
import {
    Link
} from "react-router-dom";

const Header = ({name}) => {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
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
                    <li >
                    <Link to="/"><img src="./img/home.png" alt="" /></Link>
                    </li>
                    <li>
                    <Link to="/edit" style={{margin: '0px 25px'}}><img src="./img/edit.png" alt="" /></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header