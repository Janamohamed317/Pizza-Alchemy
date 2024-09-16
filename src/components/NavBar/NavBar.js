import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";
import { imgs } from '../../imgs/imgs';

const NavBar = React.forwardRef((props, ref) => {
    return (
        <nav className="navbar navbar-expand-lg" ref={ref}>

            <div className="navbar-brand" >
                <NavLink className="logo upper-case" to="/home">Pizza Alchemy</NavLink>
                <NavLink  to="/home">
                    <img src={imgs.logo2} className='brand-img' />
                </NavLink>

            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/menu">Menu</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/cart" >
                            <img src={imgs.cart} alt="Cart" />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
});

export default NavBar;
