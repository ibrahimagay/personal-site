import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

function BlogPostsDetail(props) {
  const [blogPostsDetail, setBlogPostsDetail] = useState([
    {
      title: '',
      content: '',
      imgPath: [],
    },
  ]);

  useEffect(() => {
    fetch(`json/blog.json`)
      .then((response) => {
        return response.json();
      })
      .then((blogPostsDetail) => {
        setBlogPostsDetail(blogPostsDetail);
      });
  });

  return (
    <div className="blogDetail">
      {blogPostsDetail.slice(0, 1).map((item) => (
        <React.Fragment>
          <h1>{item.title}</h1>
        </React.Fragment>
      ))}
      <div className="blogDetailBox">
        <div className="container">
          <div className="top">
            <p>{blogPostsDetail[0].content}</p>
            <br></br>
            <br></br>
          </div>
          {blogPostsDetail.slice(0, 1).map((porfolioImg) => (
            <div className="center">
              {porfolioImg.imgPath.map((item) => (
                <React.Fragment>
                  <img src={`images/blog/${item}`} alt="..."></img>
                </React.Fragment>
              ))}
            </div>
          ))}
          <div className="top">
            <br></br>
            <br></br>
            <p>{blogPostsDetail[0].content}</p>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(BlogPostsDetail);
