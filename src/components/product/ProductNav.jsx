import React, { useState } from "react";
import NavImg0 from "../../assets/images/product-nav-1.svg";
import NavImg1 from "../../assets/images/product-nav-2.svg";
import NavImg2 from "../../assets/images/product-nav-3.svg";
import NavImg3 from "../../assets/images/product-nav-4.svg";
import NavImg4 from "../../assets/images/product-nav-5.svg";
import ProductNavItem from "./ProductNavItem";
const productNavList = [
    {
        category: 0,
        name: '全部商品',
        img: NavImg0
    },
    {
        category: 1,
        name: '爆醬包子',
        img: NavImg1
    },
    {
        category: 2,
        name: '鹹味包子',
        img: NavImg2
    },
    {
        category: 3,
        name: '養生饅頭',
        img: NavImg3
    },
    {
        category: 4,
        name: '風味饅頭',
        img: NavImg4
    },
];

const ProductNav = (props) => {
    const { defaultCategory } = props;
    const [targetCategory, setTargetCategory] = useState(defaultCategory);


    const HandleChoose = (category) => {
        setTargetCategory(category);
    }
    return (
        <nav className="pt-4">
            <ul className="subnav mb-5">
                {productNavList.map(theNavItem => {
                    return (
                        <ProductNavItem navItem={theNavItem} isActive={theNavItem.category === targetCategory} onChoose={HandleChoose} key={theNavItem.category} />
                    )
                })}

            </ul>
        </nav>
    );
};
export default ProductNav;
