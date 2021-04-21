import React from "react";

import Hero from "components/hero/FullWidthWithImage.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
    </AnimationRevealPage>
  );
};
