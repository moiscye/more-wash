import React from "react";
import ReactGA from "react-ga";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container as ContainerBase } from "components/misc/Layouts.js";
import logo from "../../images/logo.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { Link as RouterLink } from "react-router-dom";

const Container = tw(ContainerBase)`bg-gray-200`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const Row = tw.div`flex items-center justify-center flex-col px-8`;
const LogoContainer = tw(
  RouterLink
)`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;
const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw(
  RouterLink
)`border-b-2 border-transparent hocus:text-primary-300 hocus:border-primary-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const AddressText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
const CopyrightText = tw(AddressText)``;
const AboutCompanyContainer = tw.div`max-w-lg`;
const AboutCompany = tw.h2`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
export default ({ id = "" }) => {
  return (
    <Container id={id}>
      <Content>
        <Row>
          <LogoContainer to="/">
            <LogoImg src={logo} />
            <LogoText>ShinyTruck</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/bookings">Bookings</Link>
          </LinksContainer>

          <AddressText
            as="a"
            href="tel:0451541852"
            onClick={() =>
              ReactGA.event({
                category: "Phone Click",
                action: "Footer",
              })
            }
          >
            Tel: 0451-541-852
          </AddressText>
          <AddressText
            target="_blank"
            as="a"
            href="mailto:info@truckwash.com.au"
            onClick={() =>
              ReactGA.event({
                category: "Email click",
                action: "Footer",
              })
            }
          >
            info@truckwash.com.au
          </AddressText>
          <AboutCompanyContainer>
            <AboutCompany>
              ShinyTruck provides professional mobile truckwash in Melbourne.
              Our mobile truckwash service operates 24/7 so you can enjoy a
              Shiny Truck and therefore enhancing your business brand.
            </AboutCompany>
          </AboutCompanyContainer>
          <SocialLinksContainer>
            <SocialLink
              target="_blank"
              href="https://facebook.com/shinytruck"
              onClick={() =>
                ReactGA.event({
                  category: "facebook click",
                  action: "Footer",
                })
              }
            >
              <FacebookIcon />
            </SocialLink>
            <SocialLink
              target="_blank"
              href="https://twitter.com/shinytruck"
              onClick={() =>
                ReactGA.event({
                  category: "twitter click",
                  action: "Footer",
                })
              }
            >
              <TwitterIcon />
            </SocialLink>
          </SocialLinksContainer>

          <CopyrightText>
            Copyright ShinyTruck {new Date().getFullYear()}. &copy; All rights
            reserved
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
