import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu(props) {
  const menuMap = [
    // { name: 'HOME', to: '/', exact:true },
    { name: 'BLOG', to: '/blog' },
    { name: 'PORTFOLIO', to: '/portfolio' },
    { name: 'CONTACT', to: '/contact' },
    { name: 'DENEME', to: '/deneme' },
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