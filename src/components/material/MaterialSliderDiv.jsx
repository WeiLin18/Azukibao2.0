import React from "react";

const MaterialSliderDiv = (material) => {
  return (
    <div className={`swiper-slide  banner--material banner--material--${material.className}`}>
    <div className="banner__card banner__card--material">
      <h2 className="h1 mb-9">{material.title}</h2>
      <p className="h5 font-xs-h6">
      {material.details}
      </p>
    </div>
  </div>
  );
};

export default MaterialSliderDiv;
