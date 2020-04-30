import React from 'react';
import Pagination from 'react-js-pagination';
import {withRouter } from 'react-router';
import {Link} from 'react-router-dom';

const countPerPage = 10;

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
        return response.json();
      })
      .then((blogPosts) => {
        debugger;
        this.setState({
          totalCount:blogPosts.length,         
          blogPosts: blogPosts,
          isLoading: false,
        });
      });
  }

  componentWillMount() {
    this.fetchPosts();
  }

  blogPosts() {
    debugger;
    if (this.state.blogPosts.length === 0) {
      return <span style={{ color: 'red' }}>YETERLİ KAYIT BULUNAMADI!</span>;
    } else {
      return (
        <React.Fragment>
          {this.state.blogPosts.slice((this.state.activePage - 1) * countPerPage,this.state.activePage * countPerPage).map(function (item) {
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
          itemsCountPerPage={countPerPage}
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
  const {title, description, number, totalNumber} = props;
  return (
    <li>
      <Link id="blogUl_link" to={`/blogDetail`} totalnumber={totalNumber}>
        <div className="number">
          - <span>{number}</span> -
        </div>
        <div className="title">{title}</div>
        <div className="desc">{description}</div>
      </Link>
    </li>
  );
}
