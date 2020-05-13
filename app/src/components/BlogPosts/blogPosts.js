import React, { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

function BlogPosts(props) {
  const [blogPosts, setBlogPosts] = useState([
    {
      number: '',
      title: '',
      description: '',
      content: '',
      imgPath: [],
    },
  ]);
  const [countPerPage, setCountPerPage] = useState(10);
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(5);
  const [totalCount, setTotalCount] = useState(0);
  const [activePage, setActivePage] = useState(
    parseInt(new URLSearchParams(window.location.search).get('page')) || 1
  );

  function fetchPosts() {
    fetch(`json/blog.json`)
      .then((response) => {
        return response.json();
      })
      .then((blogPosts) => {
        setBlogPosts(blogPosts);
        setTotalCount(blogPosts.length);
      });
  }

  function handlePageChange(pageNumber) {
    props.history.push(`/blog?page=${pageNumber}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setActivePage(pageNumber);
    fetchPosts();
  }

  useEffect(() => {
    fetchPosts();
  });

  return (
    <div className="blogBox">
      <h1>- BLOG -</h1>
      <ul className="blogUl">
        {blogPosts
          .slice((activePage - 1) * countPerPage, activePage * countPerPage)
          .map((item) => (
            <li key={item.id}>
              <Link id="blogUl_link" to={`/blogDetail`}>
                <div className="number">
                  - <span>{item.number}</span> -
                </div>
                <div className="title">{item.title}</div>
                <div className="desc">{item.description}</div>
              </Link>
            </li>
          ))}
      </ul>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={countPerPage}
        totalItemsCount={totalCount}
        pageRangeDisplayed={pageRangeDisplayed}
        onChange={handlePageChange.bind(this)}
      />
    </div>
  );
}
export default withRouter(BlogPosts);
