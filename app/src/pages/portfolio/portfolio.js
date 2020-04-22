
import React from 'react';
import Portfolio from '../../components/Portfolio/portfolio';

import './_portfolio.scss';

export default class portfolio extends React.Component {
   render() {
    return (      
      <section className="contentBox">        
        <Portfolio/>        
      </section>
    );
  }
}
