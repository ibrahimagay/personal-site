import React from 'react';
import { Helmet } from 'react-helmet';
import BlogPostsDetail from '../../components/BlogPosts/blogPostsDetail';
import './_blog.scss';

export default class BlogDetail extends React.Component {
  render() {
    return (
      <section className="contentBox">
        <Helmet>
          <title>BLOG DETAIL - İBRAHİM AGAY</title>
        </Helmet>
        <BlogPostsDetail />
      </section>
    );
  }
}
