// Module.js
import React, { useEffect, useState } from 'react';
import './Module.css';
const Module = ({ onMouseEnter, onMouseLeave, onItemClick }) => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('color-theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`module-container ${theme}-theme`}>
            <div className="module shadow-md">

                <div className="module-section flex">
                    <a href='/' className='flex module-item hover:bg-orange-200 py-4 mx-4'>
                        <i className="bi bi-chevron-bar-expand px-4 pt-2"></i>
                        <div className="module-item px-4" onClick={onItemClick}>Spot <div className="text-xs text-right">Trade cryoto and earn</div></div>
                    </a>
                    <div className='flex module-item hover:bg-orange-200 py-4 mx-4'>
                        <i className="bi bi-percent px-4 pt-2"></i>
                        <div className="px-4" onClick={onItemClick}>Margin <div className="text-xs text-right">More Info</div></div>
                    </div>
                </div>

                <div className="module-section flex">
                    <div className='flex module-item hover:bg-orange-200 py-4 mx-4'>
                        <i className="bi bi-people-fill px-4 pt-2"></i>
                        <div className="module-item px-4" onClick={onItemClick}>P2P <div className="text-xs text-right">transfer P2P in Low Price</div></div>
                    </div>
                    <div className='flex module-item hover:bg-orange-200 py-4 mx-4'>
                        <i className="bi bi-arrows-angle-contract px-4 pt-2"></i>
                        <div className="module-item px-4" onClick={onItemClick}>Convert <div className="text-xs text-right">More Info</div></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Module;
