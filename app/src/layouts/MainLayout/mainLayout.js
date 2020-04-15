import React from 'react';
import './_mainLayout.scss';
import Avatar from '../../components/Avatar/avatar.js';
import Menu from '../../components/Menu/menu.js';
import RecentPosts from '../../components/RecentPosts/recentPosts.js';
import SocialMedia from '../../components/SocialMedia/socialMedia.js';

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
