
import React from 'react';
import BlogPostsDetail from '../../components/BlogPosts/blogPostsDetail';
import './_blog.scss';

export default class BlogDetail extends React.Component {
   render() {
    return (      
      <section className="contentBox">        
        <BlogPostsDetail/>   
      </section>
    );
  }
}