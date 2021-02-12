import React from "react";
import steam0Img from "../../assets/images/steam-0.png";
import steam1Img from "../../assets/images/steam-1.png";
import handImg from "../../assets/images/hand-gradient.png";
import baoImg from "../../assets/images/banner-bao2.png";
import {StyledBrandHeroHeader} from './HomeHeroHeader.styled';


const HomeHeroHeader = () => {
  return (
<StyledBrandHeroHeader className="banner bg-gradient po-re">
    <div className="container po-re">
      <div className="banner__card banner__card--right">
        <h2 className="h1">元氣滿分</h2>
        <p className="h6 mb-21">包子饅頭，你我的日常<br />可以是早餐，也可以是點心<br />咬一口，獲得一天滿滿的元氣</p>
      </div>
    </div>
    <div className="banner__bao">
      <img src={baoImg} alt="bao" />
      <ul className="banner__bao__steam bao__steam">
        <img src={steam0Img} alt="steam" className="banner__bao__steam__item bao__steam__item" />
        <img src={steam1Img} alt="steam" className="banner__bao__steam__item bao__steam__item" />
      </ul>
    </div>
    <div className="banner__hand"><img src={handImg} alt="hand" /></div>
  </StyledBrandHeroHeader>
  );
};
export default HomeHeroHeader;
