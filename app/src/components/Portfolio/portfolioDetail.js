import React from 'react';
class PortfolioDetail extends React.Component {
  render() {
    return (
      <div className="portfolioDetail">
        <h1>- TİKTAK -</h1>
        <div className="portfolioDetailBox">
          <div className="container">
            <div className="top">
              Türkiye’nin önde gelen saat şirketi Essa Grup´un yeni markası olan
              tiktak için öncelikle kapsamlı bir deneyim araştırması yaptık.
              Aldığımız verileri doğru bir şekilde analiz ederek, kullanıcı
              dostu bir arayüz hazırladık. Hazırlık ve araştırma aşamasından
              başlayarak responsive düşündük. İşlevsel bir tasarım ile siteyi
              masaüstü, laptop, tablet, ve mobil için %100 uyumlu bir şekilde
              yayına aldık.
              <br></br>
              <br></br>
            </div>
            <div className="center">
              <img src="/images/tiktak1.jpg"></img>
              <img src="/images/tiktak2.jpg"></img>
              <img src="/images/tiktak3.jpg"></img>
              <img src="/images/tiktak4.jpg"></img>
            </div>
            <div className="bottom">
              <a href="https://www.tiktak.com.tr/" target="_blank" class="btn">
                <span class="text">Projeye git</span>
                <span class="web">www.tiktak.com.tr</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioDetail;
