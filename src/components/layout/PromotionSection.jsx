import React from "react";
import materialSvg from "../../assets/images/illust-material.svg";
import shopBodySvg from "../../assets/images/illust-shop-body.svg";
import shopPlateSvg from "../../assets/images/illust-shop-plate.svg";
import productSvg from "../../assets/images/illust-products.svg";
import productHoverSvg from "../../assets/images/illust-products-hover.svg";

// const promotionsInfo = [
//   {
//     img: IGImg3,
//     title: '嚴選食材',
//     details: '了解小豆包子<br />堅持選用的頂級食材'
    
//   },
// ];

const PromotionSection = (props) => {
const {promotionLayout } = props;
  return (
    <section class="bg-light-gray pt-25 pt-2l-10 pt-xs-0">
    <div class="container">
      <ul class="promotions__list" >
      {promotionLayout && promotionLayout === 'material'?
        (<li class="promotion__item">
        <a href="products.index" class="promotion__item__link">
          <img src={materialSvg} alt="products" class="promotion__item__pic" />
          <div>
            <h3 class="promotion__item__title">嚴選食材</h3>
            <p class="promotion__item__details">了解小豆包子<br />堅持選用的頂級食材</p>
          </div>
        </a>
      </li>):
      (<li class="promotion__item">
      <a href="products.html" class="promotion__item__link">
        <div class="promotion__item__pic">
          <img src={productSvg} alt="products" class="promotion__item__pic__img" />
          <img src={productHoverSvg} alt="products"
            class="promotion__item__pic__img--products" />

        </div>
        <div>
          <h3 class="promotion__item__title">商品一覽</h3>
          <p class="promotion__item__details">看更多不同口味<br />超好吃的包子和饅頭</p>
        </div>
      </a>
    </li>)
      }
        
        
        <li class="promotion__item">
          <a href="shop.html" class="promotion__item__link">
            <div class="promotion__item__pic mr-5 mt-10 mt-2l-0">
              <img src={shopBodySvg} alt="shop" class="promotion__item__pic__img " />
              <img src={shopPlateSvg} alt="shop" class=" promotion__item__pic__img--shop" />
            </div>
            <div>
              <h3 class="promotion__item__title">店鋪情報</h3>
              <p class="promotion__item__details">了解小豆包子<br />實體門市的相關資訊</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
  );
};

export default PromotionSection;
