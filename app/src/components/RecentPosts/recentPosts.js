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
    fetch(`json/blog.json`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          recentBlogPost: json,
          isLoading: false,
        });
      });
  }

  renderPosts() {
    if (this.state.recentBlogPost.length === 0) {
      return <span style={{ color: 'red' }}>YETERLİ KAYIT BULUNAMADI!</span>;
    } else {
      return (
        <ul>
          {this.state.recentBlogPost.slice(0,10).map(function (item) {
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
  const {id, title} = props;
  return (
    <li>
      <a href={`blog/detail/${id}`}>
        {title}
      </a>
    </li>
  );
}
