import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

function About() {
  const [aboutData, setAboutData] = useState({title:'', description:'', featureTitle:'', feature: [], imgPath: []});
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
  useEffect(() => {
    fetch(`json/about.json`)
      .then((response) => {
        return response.json();
      })
      .then(aboutData => {
        setAboutData(aboutData);
      });
  });

  return (
    <div className="aboutBox">
      <div className="top">
        <h1>{aboutData.title}</h1>
      </div>

      <div className="center">
        {aboutData.description}
        <br></br>
        <br></br>
        <span>{aboutData.featureTitle}</span>
        <ul>
          {aboutData.feature.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>

      <div className="bottom">
        <Slider {...settings}>
          {aboutData.imgPath.map((item) => (
            <div>
              <img src={`images/about/${item}`} alt="..."></img>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default About;