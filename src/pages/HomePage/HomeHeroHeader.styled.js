import styled from "styled-components";
import bgImg from "../../assets/images/banner-bg.png";
import "../../assets/style/all.scss";
export const StyledBrandHeroHeader = styled.header`

.container {
  background-image: url(${bgImg});
} 

.banner__bao {
  position: absolute;
  top: 26px;
  width: 632px;
  right: 35%;

  @include pad {
      top: 34px;
      right: 30%;
  }

  @include mobile-lg {
      right: 20%;
  }

  @include mobile-sm {
      top: 14px;
      right: 12%;
      width: 560px;
  }

  @include mobile-xs {
      width: 450px;
  }

}

.banner__hand {
  position: absolute;
  top: 40px;
  right: 38%;
  width: 945px;
  // animation: slideout 2s 1s 1 ease-out forwards;

  @include pad {
      top: 50px;
      right: 33%;
  }

  @include mobile-lg {
      right: 25%;
  }

  @include mobile-sm {
      top: 32px;
      right: 17%;
      width: 840px;
  }

  @include mobile-xs {
      width: 680px;
  }
}

@include pad {
  .banner__card--right {
      right: 20px;
      bottom: 20px;
  }
}


@media screen and (min-width: 1560px) {
  .banner__bao {
      right: 40%;
  }

  .banner__hand {
      right: 42%;
      // animation: slideout2 2.5s 3s 1 ease-out forwards;
  }
}

.bao__steam {
  position: absolute;
  pointer-events: none;
  top: -20px;
  bottom: -20px;
  left: -20px;
  right: -20px;
  opacity: 0;

  // animation: steam-all 3s 1s ease-in-out forwards;
  &__item {
      width: 100%;
      height: 100%;
      // animation: steam-item 3s 1s ease-in-out forwards;

  }
}


@keyframes slideout2 {
  0% {
      transform: scale(1);
  }

  20% {
      transform: scale(1.08);
  }

  25% {
      right: 42%;
      top: 20px;
      transform: scale(1.08);

  }

  100% {
      right: 90vw;
      top: 250px;
      transform: scale(1.08);
  }
}

@keyframes slideout {
  0% {
      transform: scale(1);
  }

  20% {
      transform: scale(1.08);
  }

  25% {
      right: 37%;
      top: 20px;
      transform: scale(1.08);

  }

  100% {
      right: 85vw;
      top: 120px;
      transform: scale(1.08);
  }
}

@keyframes steam-all {
  0% {
      transform: scale(.5);
      opacity: 0;
  }

  100% {
      transform: scale(2);
      filter: brightness(100%);
      opacity: 1;
  }
}

@keyframes steam-item {
  0% {
      opacity: 0;
      top: 0;
  }

  50% {
      opacity: 1;
  }

  100% {
      opacity: 0;
      top: -28%;
  }
}

@keyframes steam-all-up {
  0% {
      transform: scale(.5);
      opacity: 0;
      bottom: -200px;
  }

  100% {
      transform: scaleY(2);
      transform: scaleX(2);
      filter: brightness(100%);
      opacity: 1;
      bottom: 600px;

  }
}

@keyframes steam-item-up {
  0% {
      opacity: 0;
      // bottom: 0;
  }

  50% {
      opacity: 1;
  }

  100% {
      opacity: 0;
      // bottom: 1000px;
  }
}
`