import React, { useState } from 'react'
import styled from 'styled-components'
import steam0Img from '../../assets/images/steam-0.png'
import steam1Img from '../../assets/images/steam-1.png'
import handImg from '../../assets/images/hand-gradient.png'
import baoImg from '../../assets/images/banner-bao2.png'
import bgImg from '../../assets/images/banner-bg.png'
// import useLoadedImage from "../../hooks/useLoadedImage";

const StyledDiv = styled.div`
    position: relative;
    background-image: url(${bgImg});
`

const HomeHeroHeader = ({ onReadyShow }) => {
    const [isAllImgLoaded, setIsAllImgLoaded] = useState(false)
    let loadedImgCount = 0
    const handleImgLoaded = (e) => {
        loadedImgCount += 1
        if (loadedImgCount >= 3) {
            onReadyShow && onReadyShow()
            setTimeout(() => {
                setIsAllImgLoaded(true)
            }, 800)
        }
    }

    const getAnimationByScreen = () => {
        if (window.innerWidth >= 1560) {
            return 'slideout2  3s .5s ease-out forwards'
        } else {
            return 'slideout  2.5s .5s ease-out forwards'
        }
    }

    return (
        <header className="banner banner--index bg-gradient po-re">
            <StyledDiv className="container">
                <div className="banner__card banner__card--right">
                    <h2 className="h1">元氣滿分</h2>
                    <p className="h6 mb-21">
                        包子饅頭，你我的日常
                        <br />
                        可以是早餐，也可以是點心
                        <br />
                        咬一口，獲得一天滿滿的元氣
                    </p>
                </div>
            </StyledDiv>
            <div className="banner__bao">
                <img src={baoImg} alt="bao" onLoad={handleImgLoaded} />
                <ul
                    className="banner__bao__steam bao__steam"
                    style={isAllImgLoaded ? { animation: 'steam-all 3s .7s 1 ease-in-out forwards' } : {}}
                >
                    <img
                        src={steam0Img}
                        alt="steam"
                        onLoad={handleImgLoaded}
                        className="banner__bao__steam__item bao__steam__item"
                        style={isAllImgLoaded ? { animation: 'steam-item 3s .7s 1 ease-in-out forwards' } : {}}
                    />
                    <img
                        src={steam1Img}
                        alt="steam"
                        onLoad={handleImgLoaded}
                        className="banner__bao__steam__item bao__steam__item"
                        style={isAllImgLoaded ? { animation: 'steam-item 3s .7s 1 ease-in-out forwards' } : {}}
                    />
                </ul>
            </div>
            <div className="banner__hand" style={isAllImgLoaded ? { animation: getAnimationByScreen() } : {}}>
                <img src={handImg} alt="hand" onLoad={handleImgLoaded} />
            </div>
        </header>
    )
}
export default HomeHeroHeader
