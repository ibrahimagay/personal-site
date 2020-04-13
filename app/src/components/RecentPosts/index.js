import React from 'react';

export default class RecentPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: true,
    };
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=0')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          posts: json,
          isLoading: false,
        });
      });
  }

  renderPosts() {
    if (this.state.posts.length === 0) {
      return <span style={{color:"red"}}>YETERLİ KAYIT BULUNAMADI!</span>;
    } else {
      return (
        <ul>
          {this.state.posts.map(function (item) {
            return <RecentPostsItem key={item.id} {...item} />;
          })}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="recentPosts">
        <div className="title">RECENT POSTS</div>
        {this.state.isLoading ? (
          <div className="mask"></div>
        ) : (
          this.renderPosts()
        )}
      </div>
    );
  }
}
function RecentPostsItem(props) {
  const { title, userId, ...anchorProps } = props;
  return (
    <li>
      <a {...anchorProps} href={title}>
        {title}
      </a>
    </li>
  );
}
