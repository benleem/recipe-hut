import React, { useRef, useEffect } from 'react';
import {
    Link
} from "react-router-dom"; 
import netlifyIdentity from 'netlify-identity-widget';

const Header = ({location, setSearch}) => {
    const header = useRef();
    const input = useRef();

    const ntlIdentity = () => {
        netlifyIdentity.open();
    }

    const saveInput = (e) => {
        setSearch(e.toLowerCase());
    }

    useEffect(() => {
        if (location.pathname === "/") {
            header.current.style.display = "none";
        }
        else{
            header.current.style.display = "flex";
        }
        setSearch("");
        input.current.value='';
    }, [location, setSearch])

    return (
        <header>
            <nav ref={header} className='navbar'>
                <Link to='/'><img src="./img/logo.png" alt="" style={{maxWidth: '50px', marginTop:'5px'}}/></Link>
                <ul className='nav-list'>
                    <li>
                        <input ref={input} type="text" placeholder="Search" onChange={e => saveInput(e.target.value)}/>
                    </li>
                    <li>
                        <Link to="/home"><img src="./img/home.png" alt=""/></Link>
                    </li>
                    <li>
                        <Link to="/edit"><img src="./img/edit.png" alt=""/></Link>
                    </li>
                    <li style={{paddingRight:'0px'}}>
                        <button onClick={ntlIdentity}><img src="./img/user.png" alt=""/></button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header