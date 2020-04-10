import React from 'react';

export default function Menu(props) {
  const menuMap = [
    { name: 'Home', href: 'https://www.google.com.tr/' },
    { name: 'About', href: 'https://www.google.com.tr/'},
    { name: 'Blog', href: 'https://www.google.com.tr/'},
    { name: 'Contact', href: 'https://www.google.com.tr/'},
  ];
  return (
    <div className="bottom">
      <ul>
        {menuMap.map((item,index) => (
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
      <a {...anchorProps}>{name}</a>
    </li>
  );
}
