import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import truckDriverImage from "images/truckDriver.jpg";
import washingTruckImage from "images/washingTruck.jpg";
import interiorDetailingImage from "images/interiorDetailing.jpg";
import trailerWashoutImage from "images/trailerWashout.jpg";
import executiveSeatsImage from "images/executiveSeats.jpg";
export default () => (
  <AnimationRevealPage>
    <Hero
      heading="Truck Washing and Detailing"
      description="."
      imageSrc={truckDriverImage}
      imageDecoratorBlob={true}
      primaryButtonUrl="/bookings"
      primaryButtonText="Inquiry Now"
      buttonRounded={true}
      features={[
        "We come to you",
        "24/7 Service",
        "Eco-Friendly",
        "Customer Satisfaction",
      ]}
      testimonial={{
        quote:
          "Call us today and we will have your vehicle cleaned before dawn!",
        customerName: "Guaranteed!",
      }}
    />
    <Features
      heading="Services"
      description=""
      cards={[
        {
          imageSrc: washingTruckImage,

          title: "Exterior Wash",
          description: (
            <>
              The detail wash includes a thorough rinsing of the vehicle, a hand
              brush wash using biodegradable soap, scrubbing the wheels and
              tires, spraying the frame rails to remove dirt & grease, a final
              rinse to ensure that all soap is removed, tire shine application
              and a hand dry to ensure a spot free shine.
              <br />
              <br />
              Our detail service is unparalleled in quality, this service is one
              of a kind!
            </>
          ),

          url: "/bookings",
          urlText: "Book Now",
        },

        {
          imageSrc: interiorDetailingImage,

          title: "Interior Wash",
          description: (
            <>
              Our interior detailings entails a complete cleaning of the inside
              of your vehicles including removing all the trash, vacuuming,
              wiping down dashboard and instrument panels, using restorative
              leather products on seats or shampooing the upholstery and
              carpets.
              <br />
              <br />
              We will also wash the insides of all windows.
            </>
          ),
          url: "/bookings",
          urlText: "Book Now",
        },
        {
          imageSrc: trailerWashoutImage,

          title: "Trailer Wash",
          description: (
            <>
              A trailer washout will help eliminate any germs or residue that
              might be left behind by old materials. It will also ensure you
              don’t contaminate the new cargo.
              <br />
              <br />
              First, we rinse the area out and remove any lingering debris,
              spray down the entire trailer with soap and let it soak for
              several minutes. Finally, we will high pressure the soap residue
              off and rinse.
              <br />
              <br />
              We will use a blower so it can be completely dry before you add
              the next trip of cargo.
            </>
          ),
          url: "/bookings",
          urlText: "Book Now",
        },
        {
          imageSrc: executiveSeatsImage,

          title: "Sanitize",
          description: (
            <>
              Our team will ensure your passenger vehicles are spotless and
              hygienically sound ready for your next tour. Soiled seats,
              carpets, and mats will be extraction cleaned, Leather, Vinyl, and
              Plastics treated and windows left clean and clear.
              <br />
              <br />
              Restrooms will be cleaned and deodorized.
            </>
          ),
          url: "/bookings",
          urlText: "Book Now",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1597088657840-37d3f5d1e1bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",

          title: "Degreasing",
          description: (
            <>
              High-pressure washing of earthmoving vehicles, plant equipment,
              and heavy machinery is a speciality of Shiny Trucks. We can get
              your equipment ready for a sale, a show, a new operator, or just a
              regular tune-up.
            </>
          ),
          url: "/bookings",
          urlText: "Book Now",
        },
      ]}
    />
  </AnimationRevealPage>
);
