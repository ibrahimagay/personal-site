import React from "react";
import { NavLink } from 'react-router-dom';

export default function Avatar(props) {
  return (
    <AvatarItems
      name="Personal Site"
      className="bgImage"
      to="/"
      exact="true"
    />
  );
}

function AvatarItems(props) {
  const { name, ...anchorProps } = props;
  return (
    <div className="top">
      <NavLink {...anchorProps}>{name}</NavLink>
    </div>
  );
}
