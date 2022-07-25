import React from 'react';
import './SidebarOptions.css';

function SidebarOptions ({ Icon, title, count, selected }) {
  return (
    <div className={`sidebarOptions ${selected && 'sidebarOptions--active'}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{count}</p>
    </div>
  );
}

export default SidebarOptions;
