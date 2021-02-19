import React from "react";
import { shopsInfos as shops } from '../../components/shop/ShopInfo'
import PromotionSection from "../../components/layout/PromotionSection";
import ShopInfoSection from "./ShopInfoSection";


const ShopPage = () => {
    return (
        <main className="bg-light-gray">
            {shops.map((shop, index) => <ShopInfoSection shopInfos= {shop} key={index}/>)}
            <PromotionSection  />
        </main>

    );
};
export default ShopPage;
