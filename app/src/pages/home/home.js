import React from 'react';
import { Helmet } from 'react-helmet';
import './_home.scss';
import AboutComponent from '../../components/About/about';

export default class Home extends React.Component {
  render() {
    return (
      <section className="contentBox">
        <Helmet>
          <title>HOME - İBRAHİM AGAY</title>
        </Helmet>
        <AboutComponent />
      </section>
    );
  }
}
