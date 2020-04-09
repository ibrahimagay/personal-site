import React from 'react';

export default function SocialMedia(props) {
  return (
    <div className="socialMedia">
      <div className="title">SPREAD THE LOVE</div>
      <ul>
        <SocialMediaItem
          name="Facebook"
          href="https://www.google.com.tr/"
          className="facebook"
        />
        <SocialMediaItem
          name="Twitter"
          href="https://www.google.com.tr/"
          className="twitter"
        />
        <SocialMediaItem
          name="LinkedIn"
          href="https://www.google.com.tr/"
          className="linkedin"
        />
        <SocialMediaItem
          name="Email"
          href="https://www.google.com.tr/"
          className="mail"
        />
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
