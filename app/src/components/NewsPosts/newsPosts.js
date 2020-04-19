import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactScrollablePagination from 'react-scrollable-pagination';
const Scroller = withRouter(ReactScrollablePagination);


class NewsPosts extends React.Component {
  render() {    
    return (
      <div className="newsBox">
        <h1>- NEWS -</h1>
        <Scroller
          className="newsApiBox"
          pageParam="page"
          fetchData={async (page) => {
            let jsonFetch = await fetch(
              `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
            );
            return jsonFetch.json();
          }}
          dataSelector={(res) => {
            //debugger;
            return res;
          }}
          metaSelector={(res) => {
            //debugger;
            return { totalPages: 10 };
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
                <li key={item.id}>
                  <Link to={`/item/${item}`}>
                    <div className="box">
                      <div className="top">
                        <div
                          className="bgImage"
                          style={{
                            backgroundImage:
                              'url(' +
                              'https://www.codewall.co.uk/wp-content/uploads/2019/02/interesting-vs-code-extensions-february-2019.jpg' +
                              ')',
                          }}
                        ></div>
                      </div>
                      <div className="bottom">
                        <div className="title">{item.title}</div>
                        <div className="desc">{item.body}</div>
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

export default withRouter(NewsPosts);
