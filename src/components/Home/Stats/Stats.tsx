import React from 'react';
import { styled } from '@mui/system';
import { black } from 'material-ui/styles/colors';

const Section = styled('div')({
    height: "200px",
    backgroundColor: "black",
    marginTop:"62px",
    paddingTop: '0px'
});

const MainContainer = styled('div')({
  // Your main container styles here
});

const CenterHeading = styled('div')({
  // Your center heading styles here
  opacity: 1,
  transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
  transformStyle: 'preserve-3d',
});

const WrapNumber = styled('div')({
  // Your wrap number styles here
  opacity: 1,
  transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
  transformStyle: 'preserve-3d',
});

const TextBigNumber = styled('div')({
  // Your text big number styles here
});

const TextSubNumber = styled('div')({
  // Your text sub number styles here
});

const Stats = () => {
  return (
    <Section className="">

    </Section>
  );
};

export default Stats;
