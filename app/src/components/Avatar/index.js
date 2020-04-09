import React from 'react';

export default function Avatar(props) {
  return (
    <AvatarItems
      name="Personal Site"
      className="bgImage"
      href="https://www.google.com.tr/"
    />
  );
}

function AvatarItems(props) {
  const { name, ...anchorProps } = props;
  return (
    <div className="top">
      <a {...anchorProps}>{name}</a>
    </div>
  );
}
