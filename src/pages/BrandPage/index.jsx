import React  from "react";
// import { Link } from "react-router-dom";
import BrandHeroHeader from "./BrandHeroHeader";
import ConceptSection from "../../components/ConceptSection";
import BrandStorySection from "./BrandStorySection";

const BrandPage = () => {

  return (
    <>
      <BrandHeroHeader />
       <ConceptSection />
      <BrandStorySection />
    </>
  );
};

export default BrandPage;
