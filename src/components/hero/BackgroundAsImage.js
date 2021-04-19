import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const Container = styled.div`
  ${tw`relative -mx-8 mt-8 h-screen min-h-144 bg-center bg-cover`}
  background-image: url("https://images.unsplash.com/photo-1513646981453-ffb069114476?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80");
  /* margin-top: 45px; */
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black  opacity-75`;
const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto `;
const TwoColumn = tw.div`pt-16 md:pt-40 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default () => {
  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <TwoColumn>
          <LeftColumn>
            <Notification>We come to you!</Notification>
            <Heading>
              <span>Professional Mobile</span>
              <br />
              <SlantedBackground>Truck washing</SlantedBackground>
            </Heading>
            <PrimaryAction>Book a wash</PrimaryAction>
          </LeftColumn>
          <RightColumn>
            <StyledResponsiveVideoEmbed
              url="//player.vimeo.com/video/374265101?title=0&portrait=0&byline=0&autoplay=0&responsive=1"
              background="transparent"
            />
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
