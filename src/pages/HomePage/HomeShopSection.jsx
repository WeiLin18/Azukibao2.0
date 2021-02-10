import React from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";

const shops = [
    {
        title: '南京復興總店',
        phone: '02-2222-2222',
        address: '台北市中山區南京東路三段219號'
    },
    {
        title: '板橋新埔2號店',
        phone: '02-2222-8888',
        address: '台北市中山區南京東路三段219號'
    }
];



// const StyledBrandHeroHeader = styled.header`

// .container {
//   background-image: url('${HeroImg}');
// }

// `;

const HomeShopSection = () => {
    return (
        <section className="pt-10 pb-16">
            <h2 className="h2 text-center bottom-line mb-12">店鋪情報</h2>
            <div className="container container-l">
                <div className="d-flex justify-content-between align-items-center flex-lg-column align-items-lg-stretch">
                    <div className="address__list">
                        {shops.map((shop,index) => {
                            return (
                                <Link to={`/shop/${shop.title}`} key={index}>
                                    <h2 className="h4 font-xs-h5">{shop.title}</h2>
                                    <ul className="h5 font-xs-h6 mb-9">
                                        <li>聯絡電話：<span className="ml-3">{shop.phone}</span></li>
                                        <li>店鋪地址：<span className="ml-3">{shop.address}</span></li>
                                        <li className="d-flex ">營業時間：<span className="ml-3">週二 - 週五 8 : 00 ~ 18 : 00<br />週六 - 週日 8 : 00 ~ 15 : 00</span></li>
                                    </ul>
                                </Link>
                            )
                        })}
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.46768704534!2d121.54106421462323!3d25.0521328437191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abddfb12794f%3A0x71c40951a2fc40fe!2zMTA0OTHlj7DljJfluILkuK3lsbHljYDljZfkuqzmnbHot6_kuInmrrUyMTnomZ8!5e0!3m2!1szh-TW!2stw!4v1605541047089!5m2!1szh-TW!2stw"
                        width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"
                        className="map"></iframe>
                </div>
            </div>
        </section>
    );
};
export default HomeShopSection;
