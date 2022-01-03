import React from 'react';
import PopularHalfItem from './PopularHalfItem';
import halfImg1 from 'assets/images/popular-half-3-1.png';
import halfImg2 from 'assets/images/popular-half-3-2.png';
import halfImg3 from 'assets/images/popular-half-3-3.png';

const halfFeatures = [
  {
    title: '老麵的香氣與彈牙的外皮',
    details:
      '使用古法發酵技術發酵的天然老麵，讓包子外皮帶有天然的香氣與彈牙的口感',
    imgURL: halfImg1,
  },
  {
    title: '小火慢煮的紅豆沙',
    details:
      '4小時的小火拌煮，讓粒粒紅豆軟化到透心，再經過3道雜質濾淨，萃取出精華的紅豆沙',
    imgURL: halfImg2,
  },
  {
    title: '外皮與餡料的黃金比例',
    details:
      '充份摺疊的揉麵技術，外皮與餡料的完美比例，打造有層次的味覺與嗅覺饗宴',
    imgURL: halfImg3,
  },
];

const PopularHalfSection = () => {
  return (
    <section className="bg-light-gray mb-8">
      <div className="container container-s bg-white bg-shoadow po-re pt-15 pb-30">
        <h2 className="section__title">好吃大解剖</h2>
        <div className="introduce">
          <div className="introduce__pic introduce__pic--half">
            <div className="introduce__pic__img introduce__pic__img--half1"></div>
          </div>
          <ul>
            {halfFeatures.map((halfFeature, index) => {
              return <PopularHalfItem halfInfo={halfFeature} key={index} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default PopularHalfSection;
