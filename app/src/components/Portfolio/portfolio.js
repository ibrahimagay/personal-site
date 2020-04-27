import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactScrollablePagination from 'react-scrollable-pagination';
const Scroller = withRouter(ReactScrollablePagination);

class Portfolio extends React.Component {
  render() {
    return (
      <div className="newsBox">
        <h1>- PORTFOLIO -</h1>
        <Scroller
          className="newsApiBox"
          pageParam="page"
          fetchData={async (page) => {
            let jsonFetch = await fetch(
              `json/portfolio.json`
            );
            return jsonFetch.json();
          }}
          dataSelector={(res) => {
            return res;
          }}
          metaSelector={(res) => {
            return { totalPages: 1 };
          }}
          loader={
            <div className="loader">
              <div />
              <div />
            </div>
          }
          beforeInitialLoad={() => console.log('Initi')}
          afterInitialLoad={() => console.log('Done')}
        >
          {(data) => (
            <ul className="newsUl">
              {data.map((item) => (
                <li key={item.title}>
                  <Link to={`/portfolioDetail`}>
                    <div className="box">
                      <div className="top">
                        <div
                          className="bgImage"
                          style={{
                            backgroundImage:
                              'url(' + `images/portfolio/${item.bannerImg}` + ')',
                          }}
                        ></div>
                      </div>
                      <div className="bottom">
                        <div className="title">{item.title}</div>
                        <div className="desc">{item.description}</div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Scroller>
      </div>
    );
  }
}

export default withRouter(Portfolio);
