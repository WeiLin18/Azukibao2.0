import React, { useState, useEffect } from "react";
import NavImg0 from "../../assets/images/product-nav-1.svg";
import NavImg1 from "../../assets/images/product-nav-2.svg";
import NavImg2 from "../../assets/images/product-nav-3.svg";
import NavImg3 from "../../assets/images/product-nav-4.svg";
import NavImg4 from "../../assets/images/product-nav-5.svg";
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

const ProductNav = () => {
    const [targetNav, setTargetNav] = useState(1);
    useEffect(() => {
        handleOnClick
    },[targetNav])
    const handleOnClick = (e) => {
        setTargetNav(e.target.getAttribute('data-category'));
    }
    return (
        <nav className="pt-4">
            <ul className="subnav mb-5">
                {productNavList.map(navItem => {
                    return (
                        <li className="subnav__item" key={navItem.category}>
                            <span className={targetNav === navItem.category ? 'subnav__link subnav__link--active' : 'subnav__link'} onClick={handleOnClick} data-category={navItem.category}>
                                <img src={navItem.img} alt="nav-img" className="mr-3" />{navItem.name}
                            </span>
                        </li>
                    )
                })}

            </ul>
        </nav>
    );
};
export default ProductNav;
