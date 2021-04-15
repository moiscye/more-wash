import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";

import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import DownloadApp from "components/cta/DownloadApp.js";
export default () => {
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  return (
    <AnimationRevealPage>
      <Hero />
      <MainFeature />

      <Portfolio />
      {/* <Portfolio2 /> */}
      <Testimonial
        subheading="Testimonials"
        heading={
          <>
            Our Clients <span tw="text-primary-500">Love Us.</span>
          </>
        }
        description="Here are what some of our amazing customers are saying about our washing services. Our team is passionate about cleaning and detailing comertial vehicles. Customer satisfaction is very important to us so that we are commit to offer exceptional customer service and 100% satisfaction guarantee "
        testimonials={[
          {
            imageSrc:
              "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=981&q=80",
            profileImageSrc:
              "https://images.unsplash.com/photo-1551678632-01b31bb3b4d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
            quote:
              "Amazing job on my truck! I definitely recommend!!! Moises was super fast and super friendly, if u want your truck cleaned at a reasonable price and in your own time, I would absolutely recommend these guys! Also, Its very easy to book the service on their website. I cannot recommend these guys enough, please please use them if your in need of a truck detail!",
            customerName: "Mack",
            customerTitle: "All transport Melb",
          },
          {
            imageSrc:
              "https://images.unsplash.com/photo-1612934563202-523b120e84d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            profileImageSrc:
              "https://images.unsplash.com/photo-1542487869-354540de9982?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            quote:
              "Big thanks to ShinyTrucks for being punctual and doing a great job detailing the interior of my truck. Before trying them, I sent 3 online enquiries to other detailers and they didn't even respond. Shinytruck responded straight away and we booked my truck for next day. That's how business and services should be done!",
            customerName: "Daniel Cuppy",
            customerTitle: "",
          },
          {
            imageSrc:
              "https://images.unsplash.com/photo-1538821431786-d21f8361fd6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            profileImageSrc:
              "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80",
            quote:
              "Shinitruck takes a lot of pride in his work and you can see this in the result. Definitely the best ute detailing I’ve seen and will be using this service again. Highly recommend!",
            customerName: "Mal",
            customerTitle: "",
          },
        ]}
        textOnLeft={true}
      />
      <FAQ
        imageSrc={customerSupportIllustrationSrc}
        imageContain={true}
        imageShadow={false}
        subheading="FAQs"
        heading={
          <>
            Do you have <span tw="text-primary-500">Questions ?</span>
          </>
        }
      />
      {/* <Blog /> */}
      {/* <ContactUsForm /> */}
      <DownloadApp
        text={
          <>
            People around you are booking their truck wash using our{" "}
            <HighlightedTextInverse>Truckwash App.</HighlightedTextInverse>
          </>
        }
      />
    </AnimationRevealPage>
  );
};
