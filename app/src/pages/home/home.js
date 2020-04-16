import React from 'react';
import './_home.scss';
import BlogPosts from '../../components/BlogPosts/blogPosts';
export default class Home extends React.Component { 

  render() {
    return (
      <section className="contentBox">
        {/* <div className="aboutBox">
          <h1>- HOME -</h1>
        </div> */}
        <BlogPosts/> 
      </section>
    );
  }
}
