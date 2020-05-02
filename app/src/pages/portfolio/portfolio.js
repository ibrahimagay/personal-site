import React from 'react';
import { Helmet } from 'react-helmet';
import Portfolio from '../../components/Portfolio/portfolio';

import './_portfolio.scss';

export default class portfolio extends React.Component {
  render() {
    return (
      <section className="contentBox">
        <Helmet>
          <title>PORTFOLIO - İBRAHİM AGAY</title>
        </Helmet>
        <Portfolio />
      </section>
    );
  }
}
