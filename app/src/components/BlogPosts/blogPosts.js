import React from 'react';
import Pagination from 'react-js-pagination';
import {withRouter} from 'react-router';

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.history);
    this.state = {
      posts: [],
      isLoading: true,
      activePage:
        parseInt(new URLSearchParams(window.location.search).get('sayfa')) || 1,
      totalCount: 0,
    };
  }

  handlePageChange(pageNumber) {
    this.props.history.push(`/blog?sayfa=${pageNumber}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    this.setState({ activePage: pageNumber }, () =>
      this.fetchPosts(pageNumber)
    );
  }

  fetchPosts() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${this.state.activePage}&_limit=10`
    )
      .then((response) => {
        this.setState({
          totalCount: parseInt(response.headers.get('x-total-count')),
        });
        return response.json();
      })
      .then((posts) => {
        this.setState({
          posts: posts,
          isLoading: false,
        });
      });
  }

  componentWillMount() {
    console.log('componentWillMount');
    this.fetchPosts();
  }

  blogPosts() {
    if (this.state.posts.length === 0) {
      return <span style={{ color: 'red' }}>YETERLİ KAYIT BULUNAMADI!</span>;
    } else {
      return (
        <ul>
          {this.state.posts.slice(0, 10).map(function (item) {
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
          itemsCountPerPage={10}
          totalItemsCount={this.state.totalCount}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }

}

export default withRouter(BlogPosts);


function BlogPostsItem(props) {
  const { title, body, id, userId, ...anchorProps } = props;
  return (
    <li>
      <a {...anchorProps} href="{title}" target="_blank">
        <div className="number">
          - <span>{id}</span> -
        </div>
        <div className="title">{title}</div>
        <div className="desc">{body}</div>
      </a>
    </li>
  );
}
