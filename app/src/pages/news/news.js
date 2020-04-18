
import React from 'react';
import NewsPosts from '../../components/NewsPosts/newsPosts';

import './_news.scss';

export default class news extends React.Component {
   render() {
    return (      
      <section className="contentBox">        
        <NewsPosts/>        
      </section>
    );
  }
}
