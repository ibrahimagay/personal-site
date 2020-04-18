import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactScrollablePagination from 'react-scrollable-pagination';
import api from './api';

const Scroller = withRouter(ReactScrollablePagination);

const Fixed = () => (
  <div className="newsBox">
    <h1>- NEWS -</h1>
    <Scroller
      className=""
      pageParam="page"
      fetchData={api(15)}
      dataSelector={(res) => res}
      metaSelector={(res) => ({ totalPages: 10 })}
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
            <li key={item}>
              <Link to={`/item/${item}`}>
                <div className="box">
                  <div className="top">
                    <div
                      className="bgImage"                      
                      style={{
                        backgroundImage: "url(" + "https://loremipsum.io/assets/images/lorem-ipsum-15th-century-typesetter.jpg" + ")",
                      }}
                    ></div>
                  </div>
                  <div className="bottom">
                    <div className="title">Origins and Discovery</div>
                    <div className="desc">
                      Lorem ipsum began as scrambled, nonsensical Latin derived
                      from Cicero's 1st-century BC text De Finibus Bonorum et
                      Malorum.
                    </div>
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

export default Fixed;
