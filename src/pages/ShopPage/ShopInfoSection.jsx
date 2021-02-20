import React from 'react'
import shopImg1 from '../../assets/images/shop1.png'
import shopImg2 from '../../assets/images/shop2.png'
import shopImg3 from '../../assets/images/shop3.png'

const ShopInfoSection = (props) => {
    const { shopInfos } = props
    return (
        <section className="pb-25 pb-sm-10">
            <header className="banner mb-15">
                <div className="container container--introduce mb-12 pattern-right">
                    <div className="introduce">
                        <div className="introduce__pic po-re">
                            <div className="introduce__pic__img introduce__pic__img--shop"></div>
                        </div>
                        <div>
                            <h2 className="h4 mb-9 mb-lg-5">{shopInfos.title}</h2>
                            <ul className="h5">
                                <li className="mb-5">
                                    聯絡電話：<span className="ml-3">{shopInfos.phone}</span>
                                </li>
                                <li className="mb-5">
                                    店鋪地址：<span className="ml-3">{shopInfos.address}</span>
                                </li>
                                <li className="mb-5 d-flex">
                                    營業時間：
                                    <span className="ml-3">
                                        週二 - 週五 8 : 00 ~ 18 : 00
                                        <br />
                                        週六 - 週日 8 : 00 ~ 15 : 00
                                    </span>
                                </li>
                                <li className="mb-5">
                                    出爐時間：<span className="ml-3">週一 / 每月第一週的星期五</span>
                                </li>
                                <li>
                                    出爐時間：<span className="ml-3">早上 8 點 / 下午 2 點 （週末出爐時間不定）</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <ul className="container d-flex justify-content-between align-items-center flex-sm-column  mb-15">
                <li className="mb-sm-2">
                    {' '}
                    <img src={shopImg1} alt="shop3-1" />
                </li>
                <li className="mb-sm-2">
                    {' '}
                    <img src={shopImg2} alt="shop3-2" />
                </li>
                <li>
                    {' '}
                    <img src={shopImg3} alt="shop3-1" />
                </li>
            </ul>

            <section className="container">
                <h2 className="section__title">地圖</h2>
                <iframe
                    src={shopInfos.mapURL}
                    title="azukibao"
                    height="400"
                    frameBorder="0"
                    style={{ border: 0 }}
                    aria-hidden="false"
                    tabIndex="0"
                    className="w-100"
                ></iframe>
            </section>
        </section>
    )
}

export default ShopInfoSection
