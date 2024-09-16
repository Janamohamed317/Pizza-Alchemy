import React, { useState } from 'react';
import './Menu.css';
import MenuItemsDisplay from './MenuItemsDisplay';
import { menuOptions } from '../../imgs/imgs';

function Menu() {
    const [selectedMenu, setMenu] = useState("chicken");
  

    return (
        <div className='container menu'>
            <div className='row justify-content-center mb-3'>
                {menuOptions.map(option => (
                    <div key={option.name} className='col-4 col-sm-4 col-md-2 d-flex justify-content-center mb-2'>
                        <button
                            className={`menu-btn ${selectedMenu === option.name ? 'selected' : ''}`}
                            onClick={() => setMenu(option.name)}>
                            {option.label}
                        </button>
                    </div>
                ))}
            </div>
            <MenuItemsDisplay selectedMenu={selectedMenu} />
        </div>
    );
}

export default Menu;
