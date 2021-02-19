import React from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";
import brandImg1 from "../../assets/images/brand-pic1.png";
import brandImg2 from "../../assets/images/brand-pic2.png";
import "../../assets/style/plugin/aos.css"; 


// const StyledBrandHeroHeader = styled.header`

// .container {
//   background-image: url('${HeroImg}');
// }

// `;

const HomeBrandSection = () => {
  return (
    <section className="py-16">
    <div className="container container-l container-r container-r-xl-none d-flex justify-content-between align-items-center flex-sm-column">
      <div data-aos={"fade-up"}  className="mt-25 mt-sm-10">
        <h2 className="h1 mb-12 mb-sm-5">最初單純的好味道</h2>
        <p className="h5 font-xs-h6 mb-15 mr-xl-5 mb-sm-10 mr-sm-0">
          創立於1987年的小豆包子<br />
          藏身於中山區巷弄中<br />
          最初，是一對老夫妻騎著腳踏車沿路叫賣<br />
          不需要任何廣告或顯眼的招牌<br />
          腳踏車上插著妻子手染的紅色旗子<br />
          那塊隨風飄揚的朱紅便是包子本鋪最顯眼的招牌</p>
          <Link to="/brand" className="link">了解更多</Link>
      </div>
      <ul className="order-sm-1">
        <li className="mb-2"><img src={brandImg1} alt="brand-pic1" className="slide align-right slide-in" />
        </li>
        <li><img src={brandImg2} alt="brand-pic2" className="slide align-right slide-in" /></li>
      </ul>
    </div>
  </section>
  );
};
export default HomeBrandSection;
