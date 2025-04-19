import React from 'react';
import Navigation from './navigation';

const Header = () => {
  return (
    <header>
      <div className="branding">
        <p>हर हर महादेव</p>
        <h1>iprakhar25</h1>
        <span>software developer</span>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
