import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line

import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
import Features2 from "components/features/ThreeColWithSideImage.js";
// import Features from "components/features/ThreeColWithSideImage.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <MainFeature
        subheading="Why ShinyTruck ?"
        heading={
          <>
            We have been in the transport industry <br /> since{" "}
            <span tw="text-primary-500">2016.</span>
          </>
        }
        description="We know that your vehicles showcase your business everywhere they go. Create positive emotions on your loyal customers or potential new customers. We will make you stand out!"
        primaryButtonText="Learn More"
        primaryButtonUrl="https://timerse.com"
        imageSrc="https://images.unsplash.com/photo-1586191552066-d52dd1e3af86?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=968&q=80"
        imageCss={null}
        imageContainerCss={null}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-full left-auto `}
        imageInsideDiv={true}
        statistics={null}
        textOnLeft={false}
      />

      <MainFeature1
        subheading={<Subheading>About ShinyTruck</Subheading>}
        heading="We are a mobile truck wash service."
        description="Our main focus is on delivering a quality wash every time. We realized soon enough that the best truck wash is hand wash. We will leave your vehicle as clean as it can gets! "
        buttonRounded={false}
        primaryButtonText="See Our Work"
        imageSrc="https://images.unsplash.com/photo-1594611372993-761f31b97dae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to lead the truck washing industry."
        description="We strive to be the best!We aim to provide the best possible experience for our customers in an ethical, sustainable way. "
        buttonRounded={false}
        primaryButtonText="See Our Services"
        imageSrc="https://images.unsplash.com/photo-1583559121633-63421224a8e1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1015&q=80"
        textOnLeft={false}
      />
      <Features2
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="We create a clean enviroment for drivers so they can focus on driving and nothing else."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Service",
            description:
              "Our mobile truck washing is able to service clients 24/7 with equipment of unrivaled quality.",
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description:
              "We can guarantee you that every wash will be of highest standard possible.",
          },
          {
            imageSrc: ShieldIconImage,
            title: "Eco-Friendly",
            description:
              "We use a biodegradable and pH-neutral wash and wax soap giving you a superior finish.",
          },
        ]}
        linkText=""
      />
    </AnimationRevealPage>
  );
};
