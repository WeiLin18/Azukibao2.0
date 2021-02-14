import React from "react";
// import { Link } from "react-router-dom";
import BrandHeroHeader from "./BrandHeroHeader";
import ConceptList from "../../components/ConceptList";
import PromotionSection from "../../components/layout/PromotionSection";
import BrandStorySection from "./BrandStorySection";
import InstagramFooter from "../../components/layout/InstagramFooter";

const BrandPage = () => {

  return (
    <main>
      <BrandHeroHeader />
      <section className="pb-15 pb-2l-10">
        <h2 className="section__title">品牌特色</h2>
        <div className="container bg-light-gray py-16 py-2l-10">
          <ConceptList />
        </div>
      </section>
      <BrandStorySection />
      <PromotionSection />
      <InstagramFooter />
    </main>
  );
};

export default BrandPage;
