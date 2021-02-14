import React from "react";
// import styled from "styled-components";
// import HeroImg from "../../assets/images/brand-banner.png";


// const StyledBrandHeroHeader = styled.header`

// .container {
//   background-image: url('${HeroImg}');
// }

// `;

const BrandHeroHeader = () => {
  return (
    <header className="banner banner--brand bg-gradient po-re pb-15 pb-2l-10">
       <div className="container">
    <div className="banner__card banner__card--right sm-fluid">
      <h2 className="h1">匠心柔製</h2>
      <p className="h6 mb-21 mb-sm-12">包子饅頭，你我的日常<br />可以是早餐，也可以是點心<br />咬一口，獲得一天滿滿的元氣</p>
    </div>
  </div>
    </header>
  );
};
export default BrandHeroHeader;
