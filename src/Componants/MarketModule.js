// Module.js
import React, { useEffect, useState } from 'react';
import './Module.css';
const MarketModule = ({ onMouseEnter, onMouseLeave, onItemClick }) => {
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
                    <div className='flex module-item hover:bg-orange-200 py-4'>
                        <i className="bi bi-graph-up-arrow px-4 pt-2"></i>
                        <div className="module-item px-4" onClick={onItemClick}>Market Overview <div className="text-xs text-right">More Info</div></div>
                    </div>
                    {/* <div className='flex module-item py-4'>
                        <i className="bi bi-percent px-4 pt-2"></i>
                        <div className="px-4" onClick={onItemClick}>Margin <div className="text-xs text-right">More Info</div></div>
                    </div> */}
                </div>

                <div className="module-section flex">
                    <div className='flex module-item hover:bg-orange-200 py-4'>
                        <i className="bi bi-bar-chart-line-fill px-4 pt-2"></i>
                        <div className="module-item px-4" onClick={onItemClick}>Tradeing Data <div className="text-xs text-right">More Info</div></div>
                    </div>
                    {/* <div className='flex module-item py-4'>
                        <i className="bi bi-arrows-angle-contract px-4 pt-2"></i>
                        <div className="module-item px-4" onClick={onItemClick}>Convert <div className="text-xs text-right">More Info</div></div>
                    </div> */}
                </div>

            </div>
        </div>
    );
};

export default MarketModule;
