import React from "react";
import materialInfos from "./MaterialInfos";
import MaterialSliderDiv from "./MaterialSliderDiv";
import MaterialListLi from "./MaterialListLi";
import PromotionSection from "../layout/PromotionSection";
import InstagramFooter from "../layout/InstagramFooter";

const MaterialSection = () => {
  return (
    <main class="bg-light-gray">
    <header class="banner bg-light-gray pb-25" id="page" data-index="5">
      <div class="swiper-container swiper-container-material container container--fluid bg-white bg-shoadow ">
        <div class="swiper-wrapper">
          <div class="swiper-slide container-s">
            <div class="material__details">
              <h2 class="h1 mb-12">我們選用的食材</h2>
              <p class="h5 d-lg-none">
                創立於1987年的包子本鋪<br />
                藏身於中山區巷弄中<br />
                最初，是一對老夫妻騎著腳踏車沿路叫賣<br />
                不需要任何廣告或顯眼的招牌<br />
                腳踏車上插著妻子手染的紅色旗子<br />
                那塊隨風飄揚的朱紅便是包子本鋪最顯眼的招牌
              </p>
            </div>
            <ul>
            {materialInfos.map((materialInfo, index) => <MaterialListLi material={materialInfo} key={index}/>)}
            </ul>
          </div>
          {materialInfos.map((materialInfo, index) => <MaterialSliderDiv material={materialInfo} key={index}/>)}          
        </div>
        
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        
        <div class="swiper-pagination"></div>
      </div>
    </header>
    <PromotionSection />
    <InstagramFooter />
    </main>
  );
};
export default MaterialSection;

