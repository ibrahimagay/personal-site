import React from 'react';
import './_mainLayout.scss';
import Avatar from '../../components/Avatar/avatar';
import Menu from '../../components/Menu/menu';
import RecentPosts from '../../components/RecentPosts/recentPosts';
import SocialMedia from '../../components/SocialMedia/socialMedia';

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
