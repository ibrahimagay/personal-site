import React from "react";
import {NavLink} from 'react-router-dom';

export default function Avatar(props) {
  return (
    <AvatarItems
      name="İBRAHİM AGAY"
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
      <NavLink {...anchorProps}><h1>{name}</h1></NavLink>      
    </div>
  );
}
