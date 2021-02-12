import React from "react";
import timeSvg from "../assets/images/illust-time.svg";
import handSvg from "../assets/images/illust-hand.svg";
import materialSvg from "../assets/images/illust-material.svg";
const concepts = [
  {
    title: '天然老麵低溫發酵',
    details: '以天然乳酸菌發酵的老麵，經過長時間低溫發酵，減緩包子外皮老化的速度，吃起來溼潤不口乾',
    img: timeSvg
  },
  {
    title: '二段式的揉麵技術',
    details: '小豆包子採用傳統手工包餡與二段式揉製技術，讓外皮緊緊鎖住麵團與內餡的香氣，呈現豐富的層次感',
    img: handSvg
  },
  {
    title: '在地的新鮮食材',
    details: '選用台灣在地新鮮的農作物，取代破壞味蕾的人工香料，不但讓美味不減分，也吃得出最天然的味道',
    img: materialSvg
  },
];

const ConceptSection = () => {
  return (
    <section className="pb-15 pb-2l-10">
      <h2 className="section__title">品牌特色</h2>
      <div className="container bg-light-gray py-16 py-2l-10">
        <ul className="concepts__list">
          {concepts.map((concept, index) => {
            return (
              <li className="concept" key={index}>
                <div className="concept__pic">
                  <img src={concept.img} alt="illust-time" />
                </div>
                  <div>
                    <h3 className="concept__title">{concept.title}</h3>
                    <p className="concept__details">{concept.details}</p>
                  </div>
              </li>
              )
            })}     
        </ul>
      </div>
  </section>
  );
};
export default ConceptSection;
