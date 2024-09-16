import React from 'react';
import { imgs } from '../../imgs/imgs';
import './Home.css'
function Logo() {
    return (
        <div className="container d-flex justify-content-center align-items-center flex-column flex-md-row">
            <div className="text-center text-md-start me-md-3">
                <h1 className='logo-txt'>Welcome to
                    <br />
                    <span className="name">Pizza Alchemy</span>
                </h1>
            </div>
            <img src={imgs.logo} alt="Pizza Alchemy Logo" className="logo-img"/>
        </div>
    );
}

export default Logo;
