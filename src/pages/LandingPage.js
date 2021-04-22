import React from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage.js";
//import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Testimonial2 from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import SliderCard from "components/cards/ThreeColSlider.js";
import truckExterior from "images/truckExterior.jpg";
import interiorDetailingImage from "images/interiorDetailing.jpg";
import trailerWashoutImage from "images/trailerWashout.jpg";
import executiveSeatsImage from "images/executiveSeats.jpg";
const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
const HighlightedText = tw.span`text-primary-500`;
export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <MainFeature
        subheading={<Subheading>Quality Work</Subheading>}
        heading={
          <>
            Truck <HighlightedText>Washing and Detailing </HighlightedText>{" "}
            Services
          </>
        }
        description="As a truck owner, you want to save money on maintenance, give your drivers a good experience, and protect your investment. Our truck washing and truck detailing services can help you achieve those goals."
        imageBorder={true}
        imageDecoratorBlob={true}
        imageSrc="https://s29755.pcdn.co/wp-content/uploads/2018/12/shutterstock_224285314-1.jpg"
      />
      <SliderCard
        heading="Services"
        buttonText="Book now"
        buttonUrl="/bookings"
        cards={[
          {
            imageSrc: truckExterior,
            title: "Exterior Cleaning",
            description: `The detail wash includes a thorough rinsing of the vehicle, a hand brush wash using biodegradable soap, scrubbing the wheels and tires, spraying the frame rails to remove dirt & grease, a final rinse to ensure that all soap is removed...`,
            rating: "4.8",
          },
          {
            imageSrc: interiorDetailingImage,
            title: "Interior Cleaning",
            description:
              "Our interior detailings entails a complete cleaning of the inside of your vehicles including removing all the trash, vacuuming, wiping down dashboard and instrument panels, using restorative leather products on seats or shampooing the upholstery and carpets.",
            rating: "5.0",
          },

          {
            imageSrc: trailerWashoutImage,
            title: "Trailer Wash",
            description:
              "First, we rinse the area out and remove any lingering debris, spray down the entire trailer with soap and let it soak for several minutes. Finally, we will high pressure the soap residue off and rinse.",
            rating: "4.6",
          },
          {
            imageSrc: executiveSeatsImage,
            title: "Sanitize",
            description:
              "Our team will ensure your passenger vehicles are spotless and hygienically sound ready for your next tour. Soiled seats, carpets, and mats will be extraction cleaned, Leather, Vinyl, and Plastics treated and windows left clean and clear.",
            rating: "5.0",
          },
          {
            imageSrc:
              "https://images.unsplash.com/photo-1597088657840-37d3f5d1e1bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
            title: "Degreasing",
            description:
              "High-pressure washing of earthmoving vehicles, plant equipment, and heavy machinery is a speciality of Shiny Trucks. We can get your equipment ready for a sale, a show, a new operator, or just a regular tune-up.",
            rating: "4.5",
          },
        ]}
      />

      <Testimonial2
        imageRounded={true}
        imageBorder={false}
        imageShadow={false}
        subheading="Testimonials"
        heading={
          <>
            Our Clients <span tw="text-primary-500">Love Us.</span>
          </>
        }
        description="Our team is passionate about cleaning and detailing comercial vehicles. Customer satisfaction is very important to us so that we are commit to offer exceptional customer service and 100% satisfaction guarantee."
        testimonials={[
          {
            stars: 5,
            imageSrc:
              "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=981&q=80",
            profileImageSrc:
              "https://images.unsplash.com/photo-1551678632-01b31bb3b4d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
            quote:
              "Amazing job on my truck! I definitely recommend!!! Moises was super fast and super friendly, if u want your truck cleaned at a reasonable price and in your own time, I would absolutely recommend these guys! Also, they respond very quick to the online inquiries. I cannot recommend these guys enough, please please use them if your in need of a truck detail!",
            customerName: "Mack",
            customerTitle: "All transport Melb",
          },
          {
            stars: 5,
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
            stars: 5,
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
        description={
          <>
            Here are some frequently asked questions about our washing services
            from our loving customers. Should you have any other questions, feel
            free to reach out via the{" "}
            <Link tw="font-bold text-primary-600 underline" to="/contact">
              Contact Us
            </Link>
          </>
        }
        faqs={[
          {
            question: "Do you wash fleet of trucks ?",
            answer:
              "Yes we do. Just get in touch with us in our about section or Booking section and we will get back to you with a quick date to fulfill you wash needs. ",
          },
          {
            question: "What type of vehicles do you wash ?",
            answer: `Rigid, Prime Movers, Trailers, B Double Trailers, Buses among other vehicles. We have a "Yes, we can" attitute so please send us a detailed inquiry of your vehicle and we will find a solution for your wash needs  . `,
          },

          {
            question: "Do you wash passenger buses ?",
            answer:
              "Yes we do. Our team will ensure your passenger vehicles are spotless and hygienically sound ready for your next tour. Soiled seats, carpets and mats will be extraction cleaned, Leather, Vinyl and Plastics treated and windows left clean and clear. Restrooms cleaned and deodorised. ",
          },
          {
            question: "Do you have overnight service ?",
            answer:
              "Yes we do. Our mobile truck washing is able to service clients 24/7 with equipment of unrivaled quality. Our top quality equipment will provide you results that can't be match by any other truck wash. ",
          },
          {
            question: "Do you have weekends service ?",
            answer:
              "Yes we do. We work on weekends when majority of the trucks are off the road. ",
          },
          {
            question: "Do you provide service outside Melbourne ?",
            answer:
              "We only service in Melbourne Metropolitan Area. However, you can request a quote of the desired address and we will get back to you with a suitable solution for you wash needs.",
          },
          {
            question: "Where can I reach you for support ?",
            answer:
              "To hear more about our services, do not hesitate to contact us today. We would be more than happy to answer any questions you may have. ",
          },
        ]}
      />
    </AnimationRevealPage>
  );
};
