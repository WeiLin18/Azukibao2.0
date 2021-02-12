import React, { useState } from "react";
import { Link } from "react-router-dom";
import steamImg1 from "../assets/images/steam-1.png";


const DisplaySection = (props) => {
    const { className, imgURL, labelText, title, price, details } = props;
    const [baoOpen, setbaoOpen] = useState(false);

    return (
        <section className={`banner ${className}`}>
            <div className="container container--introduce">
                <div className="introduce">
                    <div className="introduce__pic po-re">
                        <Link to={`/popular/${title}`}>
                            <div className={`introduce__pic__img introduce__pic__img--1 ${baoOpen?'bao-open':''}`} onMouseEnter={()=>{setbaoOpen(true)}} onMouseLeave={()=>{setbaoOpen(false)}}></div>
                        </Link>
                        <ul className="bao__steam bao__steam--first">
                            <img src={steamImg1} alt="steam" className="bao__steam__item" />
                        </ul>
                        <ul className="bao__steam bao__steam--second">
                            <img src={steamImg1} alt="steam" className="bao__steam__item" />
                        </ul>
                        <ul className="bao__steam bao__steam--last">
                            <img src={steamImg1} alt="steam" className="bao__steam__item" />
                        </ul>
                        <div className="label introduce__pic__label">{labelText}</div>
                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-between">
                            <h2 className="h1">{title}</h2>
                            <h3 className="h4"><span className="dollor">NT</span>{price}元</h3>
                        </div>
                        <h3 className="h4 font-xl-h5 mb-4">{details}</h3>
                        <ul className="h6">
                            <li>成分：麵粉、老麵、紅豆、芝麻、沙拉油、水、糖、鹽</li>
                            <li>過敏原：本產品含麩質之穀物、芝麻及其製品</li>
                            <li>保存方式：須冷凍於-18℃以下</li>
                            <li>最佳賞味期：一個月，開封後請儘速食用以確保品質</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default DisplaySection;
