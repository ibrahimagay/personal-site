import React from 'react';

export default function SocialMedia(props) {
  const socialMedia = [
    { name: 'Facebook', href: 'https://www.google.com.tr/', className:"facebook", target:"_blank"},
    { name: 'Twitter', href: 'https://www.google.com.tr/', className:"twitter", target:"_blank" },
    { name: 'LinkedIn', href: 'https://www.google.com.tr/', className:"linkedin", target:"_blank" },
    { name: 'Email', href: 'mailto:https://www.google.com.tr/', className:"mail" },
  ];
  return (
    <div className="socialMedia">
      <div className="title">SPREAD THE LOVE</div>
      <ul>
      {socialMedia.map((item) => (
          <SocialMediaItem {...item} />
        ))}
      </ul>
    </div>
  );
}

function SocialMediaItem(props) {
  const { name, ...anchorProps } = props;

  return (
    <li>
      <a {...anchorProps}>{name}</a>
    </li>
  );
}
