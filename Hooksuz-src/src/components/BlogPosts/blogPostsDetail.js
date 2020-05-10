import React from 'react';
import { withRouter } from 'react-router';

class BlogPostsDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPostsDetail: [
        {
          imgPath: [],
        },
      ],
    };
  }

  componentWillMount() {
    fetch(`json/blog.json`)
      .then((response) => {
        return response.json();
      })
      .then((blogPostsDetail) => {
        this.setState({
          blogPostsDetail: blogPostsDetail,
        });
      });
  }

  render() {
    return (
      <div className="blogDetail">
        {this.state.blogPostsDetail.slice(0, 1).map((item) => (
          <React.Fragment>
            <h1>{item.title}</h1>
          </React.Fragment>
        ))}
        <div className="blogDetailBox">
          <div className="container">
            <div className="top">
              {this.state.blogPostsDetail.slice(0, 1).map((item) => (
                <p>{item.content}</p>
              ))}
              <br></br>
              <br></br>
            </div>
            {this.state.blogPostsDetail.slice(0, 1).map((porfolioImg) => (
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
              {this.state.blogPostsDetail.slice(0, 1).map((item) => (
                <p>{item.content}</p>
              ))}
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BlogPostsDetail);