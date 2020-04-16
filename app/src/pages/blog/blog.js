
import React from 'react';
import BlogPosts from '../../components/BlogPosts/blogPosts';

import './_blog.scss';

export default class Blog extends React.Component {
   render() {
    return (      
      <section className="contentBox">        
        <BlogPosts/>        
      </section>
    );
  }
}
