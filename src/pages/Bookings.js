import React, { useState } from "react";
import tw from "twin.macro";
import ContactUsSimple from "components/forms/SimpleSelectsForm";
import StepWizardSimple from "components/steps/SingleWizardWithRoundSteps";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import { Container } from "components/misc/Layouts";
import StepWizard from "react-step-wizard";
import Nav from "components/misc/Nav";
import { ButtonContainer, SubmitButton } from "components/misc/Buttons";
import { Column, PriceContainer } from "components/misc/Layouts";
import { PriceTag } from "components/misc/Headings";
import { ErrorMessage } from "components/misc/Errors";
const Steps = tw(StepWizard)`flex flex-col`;
export const ContentWithPaddingLg = tw.div`max-w-screen-lg mx-auto py-10 lg:py-12 `;
//step wizard payment position
const PAYMENT_STEP = 4;
export default ({ history }) => {
  const [wizardInstance, setWizardInstance] = useState(null);
  const [error, setError] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewOrder = () => {};

  const validateFields = () => {};
  const handleNextStep = async () => {
    wizardInstance.nextStep();
  };

  const successMessage = () => {
    scrollToTop();
  };

  const handleStepChange = () => {
    scrollToTop();
  };

  const formSection = () => (
    <StepWizardSimple heading="Bookings" subheading="Steps">
      <Steps
        onStepChange={handleStepChange}
        nav={<Nav />}
        isHashEnabled={true}
        isLazyMount={true}
        instance={(SW) => setWizardInstance(SW)}
      ></Steps>
    </StepWizardSimple>
  );
  const errorMessage = () => {
    return <ErrorMessage>{error}</ErrorMessage>;
  };

  const buttonSection = () => {
    return (
      <Column>
        <ButtonContainer>
          <SubmitButton
            disabled={wizardInstance?.state?.activeStep === 0 ? true : false}
            type="button"
            onClick={wizardInstance?.previousStep}
          >
            Atras
          </SubmitButton>
          <SubmitButton type="button" onClick={handleNextStep}>
            Siguiente
          </SubmitButton>
        </ButtonContainer>
      </Column>
    );
  };

  const calculateTotal = () => {};

  const totalSection = () => {
    return (
      <PriceContainer>
        <PriceTag></PriceTag>
      </PriceContainer>
    );
  };

  return (
    <AnimationRevealPage>
      <Container>
        <ContentWithPaddingLg>{formSection()}</ContentWithPaddingLg>
      </Container>
    </AnimationRevealPage>
  );
};
