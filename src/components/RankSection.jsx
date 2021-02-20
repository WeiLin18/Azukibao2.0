import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Autoplay } from 'swiper'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/effect-fade/effect-fade.scss'
import 'swiper/swiper.scss'
// import '../assets/style/plugin/swiper-bundle.scss';
import popImg1 from '../assets/images/popular-1.png'
import popImg2 from '../assets/images/popular-2.png'
import popImg3 from '../assets/images/popular-3.png'
import popImg4 from '../assets/images/popular-4.png'
import popImg5 from '../assets/images/popular-5.png'

const rankProducts = [
    {
        title: '經典豆沙包',
        price: 35,
        details: '入口綿密的豆沙，搭配彈牙的手桿老麵外皮，點心界經典中的經典，長年小豆包子的銷售排行榜冠軍。',
        imgURL: popImg1,
    },
    {
        title: '黑糖芝麻包',
        price: 35,
        details: '濃郁爆醬的黑芝麻餡，讓你一口成為老饕，選用台糖5號的天然黑糖，微甜不膩，襯托出黑芝麻的香味。',
        imgURL: popImg2,
    },
    {
        title: '牛奶芋泥包',
        price: 35,
        details: '香氣四溢的芋頭味，大人小孩的最愛，芋頭餡綿密不死甜，芋頭控不能錯過的點心。',
        imgURL: popImg4,
    },
    {
        title: '芝麻花生包',
        price: 35,
        details: '選用國產的上等落花生做成的天然花生醬，小豆包子的獨家口味，長年小豆包子的銷售排行榜亞軍。',
        imgURL: popImg3,
    },
    {
        title: '胚芽起司包',
        price: 35,
        details: '爆醬起司配上胚芽的香氣，外表看似單調，內涵卻很豐富，適合當健身族的早餐或點心。',
        imgURL: popImg5,
    },
]
SwiperCore.use([Navigation, Autoplay])

const RankSection = () => {
    return (
        <section className="bg-light-gray pt-10 pb-23">
            <div className="container po-re">
                <h2 className="section__title mb-16">注目商品</h2>
                <Swiper
                    spaceBetween={30}
                    speed={800}
                    loop
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 50,
                        },
                        577: {
                            slidesPerView: 2,
                            spaceBetween: 12,
                        },

                        992: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        993: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    slidesPerView={3}
                    className="swiper-container swiper-container-popular "
                >
                    <ul className="swiper-wrapper cards__list">
                        {rankProducts.map((rankProduct, index) => {
                            return (
                                <SwiperSlide className="swiper-slide card" key={index}>
                                    <img src={rankProduct.imgURL} alt="popular3" className="card__pic" />
                                    <li className="pt-55">
                                        <div className="card__title">
                                            <h2 className="card__title__name">{rankProduct.title}</h2>
                                            <h3 className="card__title__price">
                                                <span className="dollor">NT</span>
                                                {rankProduct.price}元
                                            </h3>
                                        </div>
                                        <p className="card__details">{rankProduct.details}</p>
                                        <Link to={`/emptyPage`} className="card__link link link-s">
                                            了解更多
                                        </Link>
                                    </li>
                                </SwiperSlide>
                            )
                        })}
                    </ul>
                </Swiper>
                <div className="swiper-button-prev swiper-button-prev-popular"></div>
                <div className="swiper-button-next swiper-button-next-popular"></div>
            </div>
        </section>
    )
}
export default RankSection
