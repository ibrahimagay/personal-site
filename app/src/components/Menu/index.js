import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu(props) {
  const menuMap = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Blog', to: '/blog' },
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
      <Link {...anchorProps}>{name}</Link>
    </li>
  );
}
