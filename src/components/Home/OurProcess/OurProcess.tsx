import React from 'react';
import { styled } from '@mui/system';
import { Container } from '@mui/material';

const Section = styled('section')({
  // Your section styles here
});

const MainContainer = styled(Container)({
  // Your main container styles here
});

const CenterHeading = styled('div')({
  // Your center heading styles here
  opacity: 1,
  transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
  transformStyle: 'preserve-3d',
});

const TextProcessFourNumber = styled('div')({
  // Your text process four number styles here
});

const WrapCirclesProcess = styled('div')({
  // Your wrap circles process styles here
});

const CircleProcessFourths = styled('div')({
  // Your circle process fourths styles here
});

const LineCirclesProcessFourths = styled('div')({
  // Your line circles process fourths styles here
});

const BottomProcessFourths = styled('div')({
  // Your bottom process fourths styles here
});

const AbstractSectionTopLeft = styled('div')({
  // Your abstract section top left styles here
});

const Image = styled('img')({
  // Your image styles here
  willChange: 'filter, transform',
  filter: 'blur(0.0005px)',
  transform: 'translate3d(0px, 59.94px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
  transformStyle: 'preserve-3d',
});

const OurProcess = () => {
  return (
    <Section className="section relative padding-top-180">
      <MainContainer className="w-layout-blockcontainer main-container w-container">
        <CenterHeading className="center-heading mg-bottom-100">
          <h2 className="no-margins">
            Our <span className="text-fade-out">bulletproof</span> process
          </h2>
        </CenterHeading>
        <div className="w-layout-grid grid-process-fourths" style={{ opacity: 1 }}>
          <TextProcessFourNumber className="text-process-four-number">01</TextProcessFourNumber>
          <TextProcessFourNumber className="text-process-four-number">02</TextProcessFourNumber>
          <TextProcessFourNumber className="text-process-four-number">03</TextProcessFourNumber>
          <TextProcessFourNumber className="text-process-four-number">04</TextProcessFourNumber>
          <WrapCirclesProcess className="wrap-circles-process">
            <CircleProcessFourths className="circle-process-fourths"></CircleProcessFourths>
            <CircleProcessFourths className="circle-process-fourths"></CircleProcessFourths>
            <CircleProcessFourths className="circle-process-fourths"></CircleProcessFourths>
            <CircleProcessFourths className="circle-process-fourths"></CircleProcessFourths>
            <LineCirclesProcessFourths className="line-circles-process-fourths"></LineCirclesProcessFourths>
          </WrapCirclesProcess>
          <BottomProcessFourths className="bottom-process-fourths">
            <h3 className="no-margins">Research</h3>
            <div className="paragraph-small">
              Donec sodales sagittis magna. Cras dapibus. Praesent ut ligula non mi varius sagittis.
            </div>
          </BottomProcessFourths>
          <BottomProcessFourths className="bottom-process-fourths">
            <h3 className="no-margins">Design</h3>
            <div className="paragraph-small">
              Donec sodales sagittis magna. Cras dapibus. Praesent ut ligula non mi varius sagittis.
            </div>
          </BottomProcessFourths>
          <BottomProcessFourths className="bottom-process-fourths">
            <h3 className="no-margins">Develop</h3>
            <div className="paragraph-small">
              Donec sodales sagittis magna. Cras dapibus. Praesent ut ligula non mi varius sagittis.
            </div>
          </BottomProcessFourths>
          <BottomProcessFourths className="bottom-process-fourths">
            <h3 className="no-margins">Maintain</h3>
            <div className="paragraph-small">
              Donec sodales sagittis magna. Cras dapibus. Praesent ut ligula non mi varius sagittis.
            </div>
          </BottomProcessFourths>
        </div>
      </MainContainer>
      <AbstractSectionTopLeft className="wrap-abstract-section-top-left small">
        <Image src="./Home A _ Futur Studio - Webflow Ecommerce website template_files/65a8d001ff230bd1f7938a4f_Abstract Home 3.webp" loading="lazy" alt="" className="abstract-hero-home-a" />
      </AbstractSectionTopLeft>
    </Section>
  );
};

export default OurProcess;
