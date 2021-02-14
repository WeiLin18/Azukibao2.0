import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
white-space: pre-wrap;
`;

const MaterialSliderDiv = (props) => {
  const {materiaItem} = props;
  return (
    <div className="banner__card banner__card--material">
      <h2 className="h1 mb-9">{materiaItem.title}</h2>
      <StyledP className="h5 font-xs-h6">
      {materiaItem.details}
      </StyledP>
    </div>
  );
};

export default MaterialSliderDiv;
