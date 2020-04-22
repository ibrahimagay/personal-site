import React from 'react';
import './_home.scss';
import AboutComponent from '../../components/About/about';

export default class Home extends React.Component { 
  render() {
    return (
      <section className="contentBox">
        <AboutComponent/>
      </section>
    );
  }
}
