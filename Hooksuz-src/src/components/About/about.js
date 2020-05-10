import React from 'react';
import Slider from 'react-slick';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutData: {
        feature: [],
        imgPath: [],
      },
    };
  }

  componentWillMount() {
    fetch(`json/about.json`)
      .then((response) => {
        return response.json();
      })
      .then((aboutData) => {
        this.setState({
          aboutData: aboutData,
        });
      });
  }

  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: false,
      cssEase: 'linear',
    };

    return (
      <div className="aboutBox">
        <div className="top">
          <h1>{this.state.aboutData.title}</h1>
        </div>

        <div className="center">
          {this.state.aboutData.description}
          <br></br>
          <br></br>
          <span>{this.state.aboutData.featureTitle}</span>
          <ul>
            {this.state.aboutData.feature.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bottom">
          <Slider {...settings}>
            {this.state.aboutData.imgPath.map((item) => (
              <div>
                <img src={`images/about/${item}`} alt="..."></img>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default About;