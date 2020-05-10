import React from 'react';
class PortfolioDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioDetail: [{
        imgPath: [],
      }],
    };
  }

  componentWillMount() {
    fetch(`json/portfolio.json`)
      .then((response) => {
        return response.json();
      })
      .then((portfolioDetail) => {
        debugger;
        this.setState({
          portfolioDetail: portfolioDetail,
        });
      });
  }


  render() {
    return (
      <div className="portfolioDetail">        
        {this.state.portfolioDetail.slice(0,1).map((item) => (
          <h1>{item.title}</h1>
        ))}
        <div className="portfolioDetailBox">
          <div className="container">
            <div className="top">
              {this.state.portfolioDetail.slice(0,1).map((item) => (
                <p>{item.content}</p>
              ))}
              <br></br>
              <br></br>
            </div>
            {this.state.portfolioDetail.slice(0,1).map((porfolioImg) => (
              <div className="center">
                {porfolioImg.imgPath.map((item) => (
                  <React.Fragment>
                    <img src={`images/portfolio/${item}`} alt="..."></img>
                  </React.Fragment>
                ))}
              </div>
            ))}
            <div className="bottom">
            {this.state.portfolioDetail.slice(0,1).map((item) =>  (
              <a href={item.projectLink} target="_blank" class="btn">
                <span class="text">Projeye git</span>
                <span class="web">{item.projectLink}</span>
              </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioDetail;
