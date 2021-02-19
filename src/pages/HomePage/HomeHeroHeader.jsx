import React from "react";
import styled from "styled-components";
import steam0Img from "../../assets/images/steam-0.png";
import steam1Img from "../../assets/images/steam-1.png";
import handImg from "../../assets/images/hand-gradient.png";
import baoImg from "../../assets/images/banner-bao2.png";
import bgImg from "../../assets/images/banner-bg.png";
// import useLoadedImage from "../../hooks/useLoadedImage";

const StyledDiv = styled.div`
  position: relative;
  background-image: url(${bgImg});
`;

const HomeHeroHeader = () => {
  let loadedImgCount = 0;
  const handleImgLoaded = (e) => {
    loadedImgCount += 1;
    if (loadedImgCount === 4) {
      const hand = document.querySelector('.banner__hand');
      const steamList = document.querySelector('.banner__bao__steam');
      const steamItemArr = document.querySelectorAll('.banner__bao__steam__item');
      if(window.innerWidth >= 1560){
        hand.style.animation = 'slideout2  3s .5s ease-out forwards';
      }else{
        hand.style.animation = 'slideout  2.5s .5s ease-out forwards';
      }
      steamList.style.animation = 'steam-all 3s .7s 1 ease-in-out forwards';
      steamItemArr[0].style.animation = 'steam-item 3s .7s 1 ease-in-out forwards';
      steamItemArr[1].style.animation = 'steam-item 3s .7s 1 ease-in-out forwards';
    }
  }
  return (
    <header className="banner banner--index bg-gradient po-re">
      <StyledDiv className="container">
        <div className="banner__card banner__card--right">
          <h2 className="h1">元氣滿分</h2>
          <p className="h6 mb-21">包子饅頭，你我的日常<br />可以是早餐，也可以是點心<br />咬一口，獲得一天滿滿的元氣</p>
        </div>
      </StyledDiv>
      <div className="banner__bao">
        <img src={baoImg} onLoad={handleImgLoaded} alt="bao" data-image="hero" />
        <ul className="banner__bao__steam bao__steam">
          <img src={steam0Img} onLoad={handleImgLoaded} data-image="hero" alt="steam" className="banner__bao__steam__item bao__steam__item" />
          <img src={steam1Img} onLoad={handleImgLoaded} data-image="hero" alt="steam" className="banner__bao__steam__item bao__steam__item" />
        </ul>
      </div>
      <div className="banner__hand"><img src={handImg} onLoad={handleImgLoaded} data-image="hero" alt="hand" /></div>
    </header>
  );
};
export default HomeHeroHeader;
