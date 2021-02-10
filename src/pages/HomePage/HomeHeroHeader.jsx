import React from "react";
// import styled from "styled-components";
import steam0Img from "../../assets/images/steam-0.png";
import steam1Img from "../../assets/images/steam-1.png";
import handImg from "../../assets/images/hand-gradient.png";
import baoImg from "../../assets/images/banner-bao2.png";


// const StyledBrandHeroHeader = styled.header`

// .container {
//   background-image: url('${HeroImg}');
// }

// `;

const HomeHeroHeader = () => {
  return (
<header class="banner banner--index bg-gradient po-re">
    <div class="container po-re">
      <div class="banner__card banner__card--right">
        <h2 class="h1">元氣滿分</h2>
        <p class="h6 mb-21">包子饅頭，你我的日常<br />可以是早餐，也可以是點心<br />咬一口，獲得一天滿滿的元氣</p>
      </div>
    </div>
    <div class="banner__bao">
      <img src={baoImg} alt="bao" />
      <ul class="banner__bao__steam bao__steam">
        <img src={steam0Img} alt="steam" class="banner__bao__steam__item bao__steam__item" />
        <img src={steam1Img} alt="steam" class="banner__bao__steam__item bao__steam__item" />
      </ul>
    </div>
    <div class="banner__hand"><img src={handImg} alt="hand" /></div>
  </header>
  );
};
export default HomeHeroHeader;
