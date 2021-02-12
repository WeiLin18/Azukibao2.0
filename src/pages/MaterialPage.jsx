import React from "react";
// import styled from "styled-components";
import MaterialSection from "../components/material/MaterialSection";
import PromotionSection from "../components/layout/PromotionSection";
import InstagramFooter from "../components/layout/InstagramFooter";


const MaterialPage = () => {
    return (
        <main className="bg-light-gray">
            <MaterialSection  />
            <PromotionSection  />
            <InstagramFooter />
        </main>

    );
};
export default MaterialPage;
