import React from 'react';
import Slider from 'react-slick';
import '../../_assets/css/slick.css';
import '../../_assets/css/slick-theme.css';

class About extends React.Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: 'linear'
    };
    return (
      <section className="contentBox">
        <div className="aboutBox">
          <div className="top">
            <h1>FRONT END DEVELOPER</h1>
          </div>
          <div className="center">
            Hello! My name is Ibrahim AGAY and I am a Front End Developer, I
            work with Lemonly building awesome interactive infographics, cool
            ways to visualize data, and lightning fast NodeJS web apps and
            WordPress themes, and with clients all over the world making their
            vision a reality.<br></br>
            <br></br>
            <span>Some of the things I do every day:</span>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>Front-end MVC frameworks like Backbone and React</li>
              <li>NodeJS</li>
              <li>PhoneGap/Cordova/Ionic Framework</li>
            </ul>
          </div>
          <div className="bottom">
            <Slider {...settings}>
              <div>
                <img src="https://www.webtasarimavcilar.com/dosyalar/2019/07/html5.png"></img>
              </div>
              <div>
                <img src="https://www.webtasarimavcilar.com/dosyalar/2019/07/html5.png"></img>
              </div>
              <div>
                <img src="https://www.webtasarimavcilar.com/dosyalar/2019/07/html5.png"></img>
              </div>
              <div>
                <img src="https://www.webtasarimavcilar.com/dosyalar/2019/07/html5.png"></img>
              </div>
              <div>
                <img src="https://www.webtasarimavcilar.com/dosyalar/2019/07/html5.png"></img>
              </div>
              <div>
                <img src="https://www.webtasarimavcilar.com/dosyalar/2019/07/html5.png"></img>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default About;