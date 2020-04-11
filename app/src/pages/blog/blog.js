import React from 'react';
import MainLayout from '../../layouts/MainLayout/mainLayout';
import './_blog.scss';

export default class Blog extends React.Component {
  render() {
    return (
      <MainLayout>
        <section className="contentBox">
          <div className="blogBox">
            <h1>- BLOG LIST -</h1>              
          </div>
        </section>
      </MainLayout>
    );
  }
}
