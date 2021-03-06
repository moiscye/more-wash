import React from "react";
import ReactGA from "react-ga";
import { motion } from "framer-motion";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import logo from "../../images/logo.svg";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as SvgPhone } from "images/phone.svg";

const PhoneIcon = tw(SvgPhone)`w-6 h-6 inline-block mr-2 `;
const Container = tw.div`top-0 fixed bg-white shadow-md  z-50 w-full py-1 lg:py-4  px-8 mb-2 `;
const Header = tw.header` 
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw(Link)`
  text-lg my-2 lg:text-sm  xl:text-base lg:mx-2 xl:mx-4 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const SecondaryLink = tw(
  NavLink
)`lg:mx-0  lg:px-0 py-3 text-primary-100  text-lg lg:text-base  xl:text-lg font-bold`;

export const CenterPhoneLink = tw(
  SecondaryLink
)`hidden md:inline lg:hidden mr-10`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion.custom(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export default ({
  id = "",
  roundedHeaderButton = false,
  logoLink,
  links,
  className,
  collapseBreakpointClass = "lg",
}) => {
  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
      <NavLink to="/bookings" tw="lg:mr-12!">
        Bookings
      </NavLink>
      <SecondaryLink
        as="a"
        href="tel:0451541852"
        tw="lg:ml-12!"
        onClick={() =>
          ReactGA.event({
            category: "Phone click",
            action: "Top Menu",
          })
        }
      >
        <PhoneIcon />
        0451-541-852
      </SecondaryLink>
    </NavLinks>,
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink to="/">
      <img src={logo} alt="logo" />
      ShinyTruck
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Container>
      <Header id={id} className={className || "header-light"}>
        <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
          {logoLink}
          {links}
        </DesktopNavLinks>

        <MobileNavLinksContainer
          css={collapseBreakpointCss.mobileNavLinksContainer}
        >
          {logoLink}
          <CenterPhoneLink
            as="a"
            href="tel:0451541852"
            onClick={() =>
              ReactGA.event({
                category: "Phone click",
                action: "Top Menu Tablet",
              })
            }
          >
            <PhoneIcon />
            0451-541-852
          </CenterPhoneLink>
          <MobileNavLinks
            initial={{ x: "150%", display: "none" }}
            animate={animation}
            css={collapseBreakpointCss.mobileNavLinks}
            onClick={() => toggleNavbar(false)}
          >
            {links}
          </MobileNavLinks>
          <NavToggle className={showNavLinks ? "open" : "closed"}>
            {showNavLinks ? (
              <CloseIcon onClick={() => toggleNavbar(false)} tw="w-6 h-6" />
            ) : (
              <MenuIcon onClick={() => toggleNavbar(true)} tw="w-6 h-6" />
            )}
          </NavToggle>
        </MobileNavLinksContainer>
      </Header>
    </Container>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};
