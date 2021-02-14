import React from "react";

const PopularHalfItem = (props) => {
    const { halfInfo } = props;
    return (
        <li className="half__item">
            <img src={halfInfo.imgURL} alt="half-details" className="half__item__img mr-8" />
            <div data-aos="fade-left">
                <h3 className="h4 font-sm-h5">{halfInfo.title}</h3>
                <p className="h6">{halfInfo.details}</p>
            </div>
        </li>
    );
};

export default PopularHalfItem;
