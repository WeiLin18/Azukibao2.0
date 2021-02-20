import React from 'react'
import styled from 'styled-components'
import { ReactComponent as BaoSvg } from '../assets/images/illust-loading.svg'
import { ReactComponent as ClockSvg } from '../assets/images/illust-loading-clock.svg'
const StyledSection = styled.section`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3000;
    transition: all 0.5s;
    display: flex;
    background-color: #fff;
    .modal-container {
        margin: auto;
        text-align: center;
        position: relative;
    }

    .modal-text {
        color: #7a031f;
    }
    .img-loading {
        display: none;
    }
    .img-clock {
        position: absolute;
        top: 0px;
        right: 0px;
    }
`
const LoadingSection = () => {
    return (
        <StyledSection>
            <div className="modal-container">
                <BaoSvg className="img-bao" />
                <ClockSvg className="img-clock" />
                <h2 className="modal-text">loading...</h2>
            </div>
        </StyledSection>
    )
}
export default LoadingSection
