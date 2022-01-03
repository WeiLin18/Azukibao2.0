import React from "react";
import EmptySection from "../components/EmptySection";
import PromotionSection from "../components/layout/PromotionSection";


const EmptyPage = () => {
    return (
        <main className="bg-light-gray">
            <EmptySection  />
            <PromotionSection  />
        </main>

    );
};
export default EmptyPage;
