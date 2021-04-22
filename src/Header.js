import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className = "header">
            {/* <div className = "header__left">
               <TwitterIcon/>    
            </div> */}
            <div className = "header__mid">
                <h1>Home</h1>
            </div>
            <div className = "header__textarea">
                <textarea></textarea>
            </div>
        </div>
    )
}

export default Header;
