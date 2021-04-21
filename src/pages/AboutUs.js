import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Hero from "components/hero/TwoColumnWithVideo.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import Features2 from "components/features/ThreeColWithSideImage.js";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const imageCss = tw`rounded-4xl`;
export default () => {
  return (
    <AnimationRevealPage>
      {/* <Hero
        heading={
          <>
            We know the
            <HighlightedText>Transport Industry</HighlightedText>
          </>
        }
        description="We know that your vehicles showcase your business everywhere they go. We will make you stand out!"
        imageSrc="https://images.unsplash.com/photo-1586206670130-4c6d8e646c9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Book Now"
      /> */}
      <Hero
        heading={
          <>
            <HighlightedText>Mobile Wash</HighlightedText> Service.
          </>
        }
        description="Our main focus is on delivering a quality wash every time. We realized soon enough that the best truck wash is hand-wash. We will leave your vehicle as clean as it can gets!"
        imageSrc="https://images.unsplash.com/photo-1586206670130-4c6d8e646c9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Book Now"
      />
      <MainFeature1
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-0 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        imageCss={imageCss}
        subheading="Why ShinyTruck ?"
        heading={
          <>
            We have been in the{" "}
            <span tw="text-primary-500">Transport Industry</span> since 2016.
          </>
        }
        description="We know that your vehicles showcase your business everywhere they go. We will make you stand out!"
        buttonRounded={false}
        primaryButtonText="Learn More"
        primaryButtonUrl="https://timerse.com"
        imageSrc="https://www.offroadtrucks.com.au/wp-content/uploads/2019/08/Tatra-Offroad-Trucks-Australia-homepage.jpg"
        textOnLeft={false}
      />

      <MainFeature1
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`right-0 md:w-32 md:h-32 opacity-25`}
        imageCss={imageCss}
        subheading={<Subheading>How does it work?</Subheading>}
        heading="We come to You!"
        description="This will cut down on vehicle downtime. When the vehicle is not on the road, we will wash it so its ready for your next adventure."
        buttonRounded={false}
        primaryButtonText="See Our Work"
        imageSrc="https://images.squarespace-cdn.com/content/v1/51297e5de4b01fa6748bc904/1509742958386-OQW56DGP20381J9QLG1K/ke17ZwdGBToddI8pDm48kA47qaxzGU3oa60Mv3IrElh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hGaawTDWlunVGEFKwsEdnE_ZbuhWuTjDl9Hn0Vaidb23CyzgPgNZ_l0zINYXrCLdg/2017-Toyota-LC-Single-Cab-LT-Boat-Tow-7.jpg?format=1500w"
      />
      <MainFeature1
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-0 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        imageCss={imageCss}
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
        description="We create a clean enviroment so you can focus on driving and nothing else."
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
