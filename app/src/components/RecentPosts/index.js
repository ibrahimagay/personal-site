import React from 'react';

export default function RecentPosts(props) {
  const recentPosts = [
    {
      name: 'Lorem ipsum is placeholder text commonly 01',
      href: 'https://www.google.com.tr/',
    },
    {
      name: 'Lorem ipsum is placeholder text commonly 02',
      href: 'https://www.google.com.tr/',
    },
    {
      name: 'Lorem ipsum is placeholder text commonly 03',
      href: 'https://www.google.com.tr/',
    },
    {
      name: 'Lorem ipsum is placeholder text commonly 04',
      href: 'https://www.google.com.tr/',
    },
  ];
  return (
    <div className="recentPosts">
      <div className="title">RECENT POSTS</div>
      <ul>
        {recentPosts.map((item) => (
          <RecentPostsItem {...item} />
        ))}
      </ul>
    </div>
  );
}

function RecentPostsItem(props) {
  const { name, ...anchorProps } = props;

  return (
    <li>
      <a {...anchorProps}>{name}</a>
    </li>
  );
}
