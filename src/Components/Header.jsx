import React from 'react';
import logo from '../logo.svg'

const Header = () => {
  return (
    <header style={{ padding: '16px', backgroundColor: 'darkblue', color: 'white', textAlign: 'center' }}>
      <h1 style={{fontSize: '24px', fontWeight: 'bold', fontStyle: 'italic'}}>Random User Generator</h1>
      <img src={logo} alt="Logo"  width="32px" height= "32px" color='white' />
    </header>
  );
};

export default Header;
