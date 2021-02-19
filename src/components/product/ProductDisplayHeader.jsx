import React, { useContext } from "react";
import ProductContext from './ProductContext';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import ProductNavInfos from "./ProductNavInfos";

const ProductDisplayHeader = () => {
    const { targetProduct,targetCategoryNum } = useContext(ProductContext);
    const bgURL = `https://raw.githubusercontent.com/WeiLin18/akazukibao2.0/dev/public/images/product-large-${targetProduct.image}.png`
    const StyledDiv = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color:rgb(0, 0, 0 ,.2);
    z-index: 2000;
    top: 0px;
    transition: .5s;
  
    .shadow{
        display: flex;
        width: 100%;
        height:100%;
    }
    .container{
        margin: auto;
        padding: 100px 20px;
        width: 100%;
    }
    @media screen and (max-width; 1200px){
        .container{
            width:95%;
        }
    }
    .close-btn{
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }
    .bg__img{
        padding-top: 84.7%;
        background-size: cover;
        background-image: url("${bgURL}");
        background-repeat: no-repeat;
        padding-top: 76%;
    }
`;
    const history = useHistory();
    const handleCloseModal = (e) => {
        const closeBtn = document.querySelector('.close-btn');
        if (e.currentTarget === e.target || e.currentTarget === closeBtn) {
            const modal = document.getElementById('modal');
            modal.style.opacity = 0;
            modal.style.transition = '.5s';
            setTimeout(() => { history.push(`/products`) }, 100);
        }
    }
    const getCategoryName = () => {
        const targetNav = ProductNavInfos.find(navInfo=> navInfo.category === targetCategoryNum);
        return targetNav.name;
    }
    const getIngradient = () => {
        if (!targetProduct.ingradient) { return }
        let ingradient = '';
        targetProduct.ingradient.forEach(e => {
            ingradient += `、${e}`;
        });

        return ingradient
    }



    return (
        <StyledDiv id="modal">
            <div className="shadow" onClick={handleCloseModal}>
                <div className="container container--introduce">
                    <div className="breadcumb h6 po-ab">商品一覽 / <span>{`${getCategoryName()} / ${targetProduct.name}`}</span></div>
                    <svg role="button" aria-label="close" width="40" height="40"
                                    viewBox="0 0 50 50" className="close-btn" onClick={handleCloseModal}>
                                    <circle cx="25" cy="25" r="23" fill="#fff" stroke="#7a031f" strokeWidth="3" />
                    <line x1="15" y1="15" x2="35" y2="35" stroke="#7a031f" strokeWidth="3"
                        strokeLinecap="round" />
                    <line x1="15" y1="35" x2="35" y2="15" stroke="#7a031f" strokeWidth="3"
                        strokeLinecap="round" />
                                </svg>
                <div className="introduce">
                    <div className="introduce__pic">
                        <div className="bg__img"></div>
                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-between">
                            <h2 className="h1">{targetProduct.name}</h2>
                            <h3 className="h4"><span className="dollor">NT</span>{targetProduct.price}元</h3>
                        </div>

                        <h3 className="h4 font-xl-h5 mb-4">{targetProduct.slogan}</h3>
                        <ul className="h6">
                            <li>成分：麵粉、老麵{targetProduct && getIngradient()}、沙拉油、水、糖、鹽</li>
                            <li>過敏原：本產品含麩質之穀物、芝麻及其製品</li>
                            <li>保存方式：須冷凍於-18℃以下</li>
                            <li>最佳賞味期：一個月，開封後請儘速食用以確保品質</li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
    </StyledDiv >
);
};

export default ProductDisplayHeader;
