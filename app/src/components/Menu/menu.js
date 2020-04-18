import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu(props) {
  const menuMap = [
    { name: 'Home', to: '/', exact:true },
    { name: 'About', to: '/about' },
    { name: 'Blog', to: '/blog' },
    { name: 'News', to: '/news' },
    { name: 'Contact', to: '/contact' },
  ];
  return (
    <div className="bottom">
      <ul>
        {menuMap.map((item, index) => (
          <MenuItems key={index} {...item} />
        ))}
      </ul>
    </div>
  );
}

function MenuItems(props) {
  const { name, ...anchorProps } = props;
  return (
    <li>
      <NavLink activeClassName="menuActive" {...anchorProps}>{name}</NavLink>
    </li>
  );
}