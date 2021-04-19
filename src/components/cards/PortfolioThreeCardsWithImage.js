import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import truckExterior from "images/truckExterior.jpg";
import truckInterior from "images/truckInterior.jpg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingTitle = tw(SectionHeading)`mt-4 xl:text-left leading-tight`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`,
]);

const CardText = tw.div`mt-4`;
const CardHeader = tw.div`flex justify-between items-center`;
const CardCompany = tw.div`text-primary-500 font-bold text-lg`;
const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap  sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;

export default ({
  subheading = "Our Services",
  heading = (
    <>
      Professional <span tw="text-primary-500">Mobile Washing</span>
    </>
  ),
  cardLinkText = "Book Now",
}) => {
  const cards = [
    {
      imageSrc: truckExterior,
      company: "Exterior Cleaning",
      type: "Melbourne",
      title: "Your vehicle will be presented in pristine condition",
      durationText: "Save your valuable time",
    },
    {
      imageSrc: truckInterior,
      company: "Interior Cleaning",
      type: "Melbourne",
      title: "Spotless and with the highest hygiene standards",
      durationText: "Save your valuable time",
    },
    {
      imageSrc: truckExterior,
      company: "Degreasing",
      type: "Melbourne",
      title: "Your vehicle will be presented in pristine condition",
      durationText: "Save your valuable time",
    },
    {
      imageSrc: truckInterior,
      company: "Polishing",
      type: "Melbourne",
      title: "Spotless and with the highest hygiene standards",
      durationText: "Save your valuable time",
    },
    {
      imageSrc: truckExterior,
      company: "Sanitize",
      type: "Melbourne",
      title: "Your vehicle will be presented in pristine condition",
      durationText: "Save your valuable time",
    },
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <HeadingTitle>{heading}</HeadingTitle>
        </HeadingInfoContainer>
        <ThreeColumn>
          {cards.map((card, index) => (
            <Column key={index}>
              <Card>
                <CardImage imageSrc={card.imageSrc} />
                <CardText>
                  <CardHeader>
                    <CardCompany>{card.company}</CardCompany>
                  </CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardMeta>
                    <CardMetaFeature>
                      <TimeIcon /> {card.durationText}
                    </CardMetaFeature>
                  </CardMeta>
                  <CardAction>{cardLinkText}</CardAction>
                </CardText>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};
