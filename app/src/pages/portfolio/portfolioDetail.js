
import React from 'react';
import PortfolioDetail from '../../components/Portfolio/portfolioDetail';
import './_portfolio.scss';

export default class portfolio extends React.Component {
   render() {
    return (      
      <section className="contentBox">        
        <PortfolioDetail/>        
      </section>
    );
  }
}
