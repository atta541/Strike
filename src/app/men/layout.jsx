import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Men's Section</h1> {/* This will be shared across all subpages */}
      {children}  {/* Renders the child page */}
    </div>
  );
};

export default Layout;
