import React from "react";
// import styled from "styled-components";
import DisplaySection from "../../components/DisplaySection";
import PopularHalfSection from "./PopularHalfSection";
import ConceptList from "../../components/ConceptList";
import RankSection from "../../components/RankSection";
import PromotionSection from "../../components/layout/PromotionSection";
import InstagramFooter from "../../components/layout/InstagramFooter";


const PopularPage = () => {
    return (
        <main className="bg-light-gray">
            <DisplaySection
                className=""
                labelText="人氣NＯ.1"
                title="經典豆沙包"
                price={35}
                details="小火慢熬的紅豆，手工揉製的麵團"
            />
            <section class="bg-light-gray py-16">
                <div class="container">
                    <ConceptList />
                </div>
            </section>
            <PopularHalfSection />
            <RankSection />
            <PromotionSection />
            <InstagramFooter />
        </main>

    );
};
export default PopularPage;
