import React from 'react'
import {
    Link
} from "react-router-dom"; 
import netlifyIdentity from 'netlify-identity-widget';

const Header = () => {
    const ntlIdentity = () => {
        netlifyIdentity.open();
    }

    return (
        <header>
            <nav className='navbar'>
                <Link to='/'><img src="./img/logo.png" alt="" style={{maxWidth: '50px', marginTop:'5px'}}/></Link>
                <ul className='nav-list'>
                    <li style={{paddingLeft:'0px'}}>
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