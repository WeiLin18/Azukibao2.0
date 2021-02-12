import React from "react";
import {materialInfos} from "./MaterialInfos";
import MaterialSliderDiv from "./MaterialSliderDiv";
import MaterialListLi from "./MaterialListLi";
import PromotionSection from "../layout/PromotionSection";
import InstagramFooter from "../layout/InstagramFooter";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/swiper.scss';
import '../../assets/style/plugin/swiper-bundle.scss';

SwiperCore.use([Navigation, Pagination, EffectFade]);
console.log(materialInfos);
const MaterialSection = () => {
  return (
    <main className="bg-light-gray">
      <header class="banner bg-light-gray pb-25">
        <Swiper
          spaceBetween={30}
          speed={800}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          effect="fade"
          className="swiper-container swiper-container-material container container--fluid bg-white bg-shoadow "
        >
          <SwiperSlide className="swiper-slide container-s">
            <div className="material__details">
              <h2 className="h1 mb-12">我們選用的食材</h2>
              <p className="h5 d-lg-none">創立於1987年的包子本鋪<br />藏身於中山區巷弄中<br />最初，是一對老夫妻騎著腳踏車沿路叫賣<br />不需要任何廣告或顯眼的招牌<br />腳踏車上插著妻子手染的紅色旗子<br />那塊隨風飄揚的朱紅便是包子本鋪最顯眼的招牌</p>
            </div>
            <ul>
            {materialInfos.map((materialInfo, index) => <MaterialListLi material={materialInfo} key={index}/>)}
            </ul>
          </SwiperSlide>
          {materialInfos.map((materialInfo, index) => {
          return(
            <SwiperSlide className={`swiper-slide  banner--material banner--material--${materialInfo.className}`} key={index}>
              <MaterialSliderDiv materiaItem={materialInfo} key={index}/>
            </SwiperSlide>
              )})}          
          
          <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-pagination"></div>
        </Swiper>
      </header>
    </main>
  );
};
export default MaterialSection;

