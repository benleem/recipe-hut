import React, { useState, useRef, useEffect } from 'react';
import {
    Link
} from "react-router-dom"; 
import { useAuth0 } from "@auth0/auth0-react";
import './header.css'

const Header = ({ user, location, setSearch }) => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const [isActive, setActive] = useState(false);
    const header = useRef();
    const input = useRef();

    const saveInput = (e) => {
        setSearch(e.toLowerCase());
    }

    const toggleClass = () => {
        setActive(!isActive);
    }

    useEffect(() => {
        setSearch("");
        input.current.value='';
    }, [setSearch])

    useEffect(() => {
        window.onresize = () => {
            let width = window.innerWidth;
            if (width > 400) {
                setActive(false);
            }
        }
    }, [])

    return (
        <header>
            <nav ref={header} className={isActive ? 'navbar active' : 'navbar'}>
                <div>
                    <Link to="/"><img src="./img/logo.png" alt="" style={{maxWidth: '40px', marginTop:'5px'}}/></Link>
                    <span>
                        <input ref={input} type="text" placeholder="Search" onChange={e => saveInput(e.target.value)}/>
                        <button className='change-class' onClick={toggleClass}><img src={isActive ? './img/menu-secondary.svg' : './img/menu.svg'} alt="" /></button>
                    </span>
                </div>
                <ul className={isActive ? "nav-list active" : "nav-list"}>
                    <li>
                        <Link to="/"><img src="./img/home.svg" alt="" onClick={toggleClass}/></Link>
                    </li>
                    <li>
                        <Link to="/favorites"><img src="./img/favorites.svg" alt="" onClick={toggleClass}/></Link>
                    </li>
                    <li>
                        <Link to="/edit" style={{width: '50px'}}><img src="./img/edit.svg" alt="" onClick={toggleClass}/></Link>
                    </li>
                    <li style={{paddingRight:'0px'}}>
                        {user === undefined ? 
                            <button className='login-btn' onClick={loginWithRedirect}><img src="./img/user.svg" alt="" onClick={toggleClass}/></button> :
                            <img className='profile-img' src={user.picture} alt="profile" />
                        }
                        {user === undefined ? null : <button className='logout-btn' onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header