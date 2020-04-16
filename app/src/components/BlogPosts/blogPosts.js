import React from 'react';
import Pagination from 'react-js-pagination';

export default class BlogPosts extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: true,
      activePage: 0,
    };
  }

  
  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          posts: json,
          isLoading: false,
        });
      });
  }

  blogPosts() {
    if (this.state.posts.length === 0) {
      return <span style={{ color: 'red' }}>YETERLİ KAYIT BULUNAMADI!</span>;
    } else {
      return (
        <ul>
          {this.state.posts.slice(0, 25).map(function (item) {
            return <BlogPostsItem key={item.id} {...item} />;
          })}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="blogBox">
        <ul className="blogUl">
          {this.state.isLoading ? (
            <div className="mask"></div>
          ) : (
            this.blogPosts()
          )}
        </ul>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={5}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}
function BlogPostsItem(props) {
  const { title,body,id,userId, ...anchorProps } = props;
  return (
    <li>
      <a {...anchorProps} href="javascript:;">        
        <div className="number">
          - <span>{id}</span> -
        </div>
        <div className="title">{title}</div>
        <div className="desc">{body}</div>
      </a>
    </li>
  );
}