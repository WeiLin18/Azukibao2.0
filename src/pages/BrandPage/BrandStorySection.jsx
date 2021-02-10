import React from "react";
import storyFirstImg from "../../assets/images/brand-pic3-1.png";
import storySecondImg from "../../assets/images/brand-pic3-2.png";
import storyThirdImg from "../../assets/images/brand-pic3-3.png";

const BrandStorySection = () => {
  return (
    <article>
    <div class="container">
      <section class="d-flex align-items-center justify-content-between flex-sm-column mb-md-5">
        <h2 class="h5 font-lg-h6 w-50 w-md-60 w-sm-100 d-flex justify-content-center align-items-center p-2" data-aos="fade-up"  data-aos-duration="1000">
          創立於1987年的小豆包子<br />
          藏身於中山區巷弄中<br />
          最初，是一對老夫妻騎著腳踏車沿路叫賣<br />
          不需要任何廣告或顯眼的招牌<br />
          腳踏車上插著妻子手染的紅色旗子<br />
          那塊隨風飄揚的朱紅便是包子本鋪最顯眼的招牌
        </h2>
        <img src={storyFirstImg} alt="brand-pic" class="w-50 w-md-40 w-sm-100 order-md-1" />
      </section>
      <section class="d-flex align-items-center justify-content-between flex-sm-column mb-25 mb-2l-10 mb-md-5">
        <img src={storySecondImg} alt="brand-pic" class="w-50 w-md-40 w-sm-100" />
        <h2 class="h5 font-lg-h6 w-50 w-md-60 w-sm-100 d-flex justify-content-center align-items-center p-2" data-aos="fade-up"  data-aos-duration="1000">
          創立於1987年的小豆包子<br />
          藏身於中山區巷弄中<br />
          最初，是一對老夫妻騎著腳踏車沿路叫賣<br />
          不需要任何廣告或顯眼的招牌<br />
          腳踏車上插著妻子手染的紅色旗子<br />
          那塊隨風飄揚的朱紅便是包子本鋪最顯眼的招牌
        </h2>
      </section>
      <img src={storyThirdImg} alt="brand-pic" class="mb-25 mb-2l-10 mb-xs-5" />
    </div>
  </article>
  );
};
export default BrandStorySection;
