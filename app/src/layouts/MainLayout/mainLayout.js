import React from 'react';
import Avatar from '../../components/Avatar/index';
import Menu from '../../components/Menu/index';
import RecentPosts from '../../components/RecentPosts/index';
import SocialMedia from '../../components/SocialMedia/index';

export default function MainLayout(props) {
  return (
      <div className="homeBox">
        <section className="leftBox">
          <Avatar />
          <Menu />
        </section>
        {props.children}
        <section className="rightBox">
          <RecentPosts />
          <SocialMedia />
        </section>
      </div>
  );
}
