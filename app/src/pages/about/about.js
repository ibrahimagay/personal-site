import React from 'react';
import MainLayout from '../../layouts/MainLayout/mainLayout';
import './_about.scss';

export default class About extends React.Component {
  render() {
    return (
      <MainLayout>
        <section className="contentBox">
          <div className="aboutBox">
            <h1>- ABOUT -</h1>              
          </div>
        </section>
      </MainLayout>
    );
  }
}
