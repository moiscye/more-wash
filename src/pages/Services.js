import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Services from "components/cards/PortfolioThreeCardsWithImage.js";

export default () => (
  <AnimationRevealPage>
    <Services />
  </AnimationRevealPage>
);
