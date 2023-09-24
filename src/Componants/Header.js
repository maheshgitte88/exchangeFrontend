import React, { useState, useEffect } from 'react';
import Module from './Module';
import MarketModule from './MarketModule';
import './Header.css';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isModuleOpen, setModuleOpen] = useState(false);
  const [isMarketModuleOpen, setMarketModuleOpen] = useState(false);


  const handleTradeClick = () => {
    setModuleOpen(!isModuleOpen);
    setMarketModuleOpen(false);
  };

  const handleModuleItemHover = () => {
    setModuleOpen(true);
  };

  const handleModuleItemLeave = () => {
    setModuleOpen(false);
  };

  const handleModuleItemClick = () => {
    setModuleOpen(false);
  };

  const handleMarketTradeClick = () => {
    setMarketModuleOpen(!isMarketModuleOpen);
    setModuleOpen(false);
  };

  const handleMarketModuleItemHover = () => {
    setMarketModuleOpen(true);
  };

  const handleMarketModuleItemLeave = () => {
    setMarketModuleOpen(false);
  };

  const handleMarketModuleItemClick = () => {
    setMarketModuleOpen(false);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('color-theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('color-theme', newTheme);
    window.location.reload();
  };

  return (
    <>
      <header className={`header ${theme}-theme`}>
        <nav className="nav pr-4">
          <div className="logo">Your Logo </div>
          <div className="logo">
            <ul className={`nav-items`}>
              <li className="nav-item" onClick={handleMarketTradeClick} >Markets
                <i className={`bi ${isMarketModuleOpen ? 'bi-caret-up-fill' : 'bi-caret-down-fill'}`}></i></li>

              <li className="nav-item" onClick={handleTradeClick} >Trade
                <i className={`bi ${isModuleOpen ? 'bi-caret-up-fill' : 'bi-caret-down-fill'}`}></i></li>
            </ul>
          </div>
          <ul className={`nav-items ${isDropdownOpen ? `open ${theme}-theme` : ''}`}>
            <li className="nav-item"><button className="bg-yellow-200 hover:bg-yellow-600 text-black px-3 rounded"><i className="bi bi-arrow-down-square"></i><a href='/DepositeCrypto'>Deposit</a></button></li>
            <li className="nav-item">Wallet</li>
            <li className="nav-item">Orders</li>
            <li className="nav-item"><i className="bi bi-person-circle bi--lg"></i></li>
            <li className="nav-item"> <i class="bi bi-bell"></i></li>
            <li className="nav-item"><i className="bi bi-globe2 divide-x divide-gray-400"></i></li>
            <li className="nav-item" onClick={toggleTheme}>
              {theme === 'dark' ? (
                <i className="bi bi-sun"></i>
              ) : (
                <i className="bi bi-moon"></i>
              )}
            </li>
          </ul>
          <button className={`menu-btn btn btn-secondary ${theme}-theme`} onClick={toggleDropdown}>
            <i className={`bi ${isDropdownOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>
        </nav>
      </header>
      {/* {isModuleOpen && <Module />} */}
      {isModuleOpen && (
        <Module
          onMouseEnter={handleModuleItemHover}
          onMouseLeave={handleModuleItemLeave}
          onItemClick={handleModuleItemClick}
        />
      )}

      {isMarketModuleOpen && (
        <MarketModule
          onMouseEnter={handleMarketModuleItemHover}
          onMouseLeave={handleMarketModuleItemLeave}
          onItemClick={handleMarketModuleItemClick}
        />
      )}

    </>


  );
};

export default Header;
