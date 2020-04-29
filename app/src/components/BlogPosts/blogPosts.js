import React from 'react';
import Pagination from 'react-js-pagination';
import { withRouter } from 'react-router';

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.history);
    console.log(props.history.length);
    this.state = {
      blogPosts: [],
      isLoading: true,
      activePage:
        parseInt(new URLSearchParams(window.location.search).get('page')) || 1,
      totalCount: 0,
    };
  }

  handlePageChange(pageNumber) {
    this.props.history.push(`/blog?page=${pageNumber}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    this.setState({ activePage: pageNumber }, () =>
      this.fetchPosts(pageNumber)
    );
  }

  fetchPosts() {
    fetch(`json/blog.json`)
      .then((response) => {
        this.setState({
          totalCount:17,
        });
        return response.json();
      })
      .then((blogPosts) => {
        this.setState({
          blogPosts: blogPosts,
          isLoading: false,
        });
      });
  }

  componentWillMount() {
    this.fetchPosts();
  }

  blogPosts() {
    if (this.state.blogPosts.length === 0) {
      return <span style={{ color: 'red' }}>YETERLİ KAYIT BULUNAMADI!</span>;
    } else {
      return (
        <React.Fragment>
          {this.state.blogPosts.slice(0,10).map(function (item) {
            return <BlogPostsItem key={item.id} {...item} />;
          })}
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <div className="blogBox">
        <h1>- BLOG -</h1>
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
  const {id, title, description, number, totalNumber} = props;
  return (
    <li>
      <a id="blogUl_link" href={`blog/detail/${id}`} totalnumber={totalNumber}>
        <div className="number">
          - <span>{number}</span> -
        </div>
        <div className="title">{title}</div>
        <div className="desc">{description}</div>
      </a>
    </li>
  );
}
