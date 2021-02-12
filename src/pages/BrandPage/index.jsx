import React  from "react";
// import { Link } from "react-router-dom";
import BrandHeroHeader from "./BrandHeroHeader";
import ConceptSection from "../../components/ConceptSection";
import PromotionSection from "../../components/layout/PromotionSection";
import BrandStorySection from "./BrandStorySection";
import InstagramFooter from "../../components/layout/InstagramFooter";

const BrandPage = () => {

  return (
    <>
      <BrandHeroHeader />
       <ConceptSection />
      <BrandStorySection />
      <PromotionSection />
      <InstagramFooter />
    </>
  );
};

export default BrandPage;
