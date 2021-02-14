import React from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";
import { shopsInfos as shops } from '../../components/shop/ShopInfo'
import PromotionSection from "../../components/layout/PromotionSection";
import InstagramFooter from "../../components/layout/InstagramFooter";
import ShopInfoSection from "./ShopInfoSection";


const ShopPage = () => {
    return (
        <main className="bg-light-gray">
            {shops.map((shop, index) => <ShopInfoSection shopInfos= {shop} key={index}/>)}
            <PromotionSection  />
            <InstagramFooter />
        </main>

    );
};
export default ShopPage;
