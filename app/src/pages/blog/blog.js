import React from 'react';
import { Helmet } from 'react-helmet';
import BlogPosts from '../../components/BlogPosts/blogPosts';
import './_blog.scss';

export default class Blog extends React.Component {
  render() {
    return (
      <section className="contentBox">
        <div>
          <Helmet>
            <title>BLOG - İBRAHİM AGAY</title>
          </Helmet>
        </div>
        <BlogPosts />
      </section>
    );
  }
}
