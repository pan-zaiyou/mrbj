// Sidebar.tsx
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`sidebar ${isMenuOpen ? 'open' : 'closed'}`}>
      <ul>
        <li onClick={handleMenuItemClick}>Menu Item 1</li>
        <li onClick={handleMenuItemClick}>Menu Item 2</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
