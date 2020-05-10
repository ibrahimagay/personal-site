import React from 'react';
import { Helmet } from 'react-helmet';
import PortfolioDetail from '../../components/Portfolio/portfolioDetail';
import './_portfolio.scss';

export default class portfolio extends React.Component {
  render() {
    return (
      <section className="contentBox">
        <Helmet>
          <title>PORTFOLIO DETAIL - İBRAHİM AGAY</title>
        </Helmet>
        <PortfolioDetail />
      </section>
    );
  }
}
