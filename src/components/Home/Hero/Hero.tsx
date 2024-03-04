import { Container, styled } from '@mui/system';
import { Button, Modal } from '@mui/material';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// @ts-ignore
import SplitTextJS from 'split-text-js';
import Contact from '../../Contact/Contact';
import { useState } from 'react';
import * as i from './colorful-lock.png'

const HeroSection = styled(Container)({
  display: 'flex',
  justifyContent: 'center',

  height: "calc(100vh - 63.99px)",

});

const HeroSectionWrapper = styled(Container)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  // backgroundImage: `url(${i.default})`,
  backgroundImage: `radial-gradient(ellipse at center, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 70%,rgba(255,255,255,1) 100%),url('${i.default}')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center top',
  border: 'none',
});

const Title = styled('h1')((props) => ({
  position: 'relative',
  letterSpacing: "4px",
  marginBottom: "30px",
  fontSize: "108px",
  fontWeight: "900",
  lineHeight: "75px",
  transform: "skew(0deg)",
  textAlign: 'center',

  [props.theme.breakpoints.down('md')]: {
    fontSize: "50px",
    lineHeight: "36px",
  },

  [props.theme.breakpoints.down('sm')]: {
    fontSize: "32px",
    lineHeight: "25px",
  },

}))

const Subtitle = styled('h2')({
  textAlign: 'center',
})

const ButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
})

const StyledButton = styled(Button)({
  backgroundColor: "#dfa734",
  width: '187px',
  height: '61px',
  borderRadius: '35px',
  fontFamily: 'Playfair, sans-serif',
  fontSize: '20px',
  fontWeight: '600',
  letterSpacing: '2px',
  lineHeight: '21px',
  top: 'inherit',
  left: 'inherit',
  bottom: 'inherit',
  right: 'inherit',
  overflow: 'hidden',
})

// const ServiceAnimation = styled('div')({
//   position: 'relative',
//   height: '100%',
//   fontSize: "2rem",
// })

const StyledModal = styled(Modal)({
  height: 'auto',
  display: 'flex',
  // alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
  bottom: 'inherit',

})



const HeroComponent = () => {
  // useGSAP(() => {

  //   const randomNumber = (min: number, max: number) =>{
  //     return Math.floor(Math.random() * (max - min + 1) + min)
  //   }
  //   const animatedElements: Array<HTMLElement> = gsap.utils.shuffle(gsap.utils.toArray('.service-animation *'))

  //   const pWidth = animatedElements[0].parentElement?.clientWidth ?? 0
  //   const pHeight = animatedElements[0].parentElement?.clientHeight ?? 0

  //   const timeline = gsap.timeline(
  //     {
  //       repeat: -1
  //     });

  //   animatedElements.forEach(e => {
  //     const split = new SplitTextJS(e)
  //     const rotateX_val = 90;
  //     const y_val = randomNumber(80, 360)
  //     //const y_val = 80;
  //     const stagger_val = .02

  //     const eWidth = e.clientWidth;
  //     const eHeight = e.clientHeight
  //     const timeline_position = .8

  //     var randomTop = Math.floor(Math.random() * (pHeight - eHeight));
  //     var randomLeft = Math.floor(Math.random() * (pWidth - e.clientWidth));

  //     if (randomLeft + eWidth > pWidth) {
  //       randomLeft -= eWidth
  //     }

  //     if (randomTop + eHeight > pHeight) {
  //       randomTop -= eHeight
  //     }


  //     e.style.top = `${randomTop}px`;
  //     e.style.left = `${randomLeft}px`;

  //     timeline
  //       .from(split.chars, {
  //         opacity: 0,
  //         y: y_val,
  //         x: randomNumber(-90, 90),
  //         rotateX: -rotateX_val,
  //         stagger: stagger_val,
  //         duration: 2,
  //       }, `<${timeline_position}`)
  //       .to(split.chars, {
  //         opacity: 0,
  //         y: -y_val,
  //         x: randomNumber(-90, 90),
  //         rotateX: rotateX_val,
  //         stagger: stagger_val,
  //         duration: 2,
  //       }, `<${timeline_position}`)
  //   });

  //   // 👍 we remove the event listener in the cleanup function below. 
  //   return () => { // <-- cleanup

  //   };

  // });

  useGSAP(() => {

    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline(
      {

      });

    const titleAnimation: Array<HTMLElement> = gsap.utils.toArray('.title')
    timeline
      .from(titleAnimation, {
        opacity: 0,
        top: "-100px",
        rotateX: 80,
        duration: 1,
        stagger: .2,
      })


    const subTitleAnimation: Array<HTMLElement> = gsap.utils.toArray('.subTitle')
    subTitleAnimation.forEach(e => {
      const split = new SplitTextJS(e)
      const rotateX_val = 90;
      const y_val = 80
      const stagger_val = .02
      const timeline_position = 1

      timeline
        .from(split.chars, {
          opacity: 0,
          y: y_val,
          rotateX: -rotateX_val,
          stagger: stagger_val,
          duration: .5,
        }, `<${timeline_position}`)
    });


    const buttomAimation: Array<HTMLElement> = gsap.utils.toArray('.letsTalk')
    timeline
      .from(buttomAimation, {
        opacity: 0,
        width: 0,
        minWidth: 0,
        height: 0,
        minHeight: 0,
        left: 100,
        duration: 2,
        stagger: .2,
      }, '<.2')

    // gsap.to(buttomAimation, {
    //   scrollTrigger: {
    //     trigger: buttomAimation,
    //     start: "50% top",
    //     scrub: true,
    //     toggleActions: "play none none reset",
    //     markers: true,
    //     onEnter: (e) => {
    //       // Optional callback when the element enters the viewport
    //       console.log("Element entered the viewport");
    //     },
    //   },
    //   repeat: -1,
    //   x: 0, // Relative X position (from the current position)
    //   y: 0, // Relative Y position (from the current position)
    //   position: "absolute", // Set the position to absolute
    //   bottom: 'calc(-70vh)', // Absolute bottom position
    //   right: "0px", // Absolute right position
    // });

    const buttonText: Array<HTMLElement> = gsap.utils.toArray('.buttonText')
    timeline
      .from(buttonText, {
        opacity: 0,
        duration: 1,
        stagger: .2,
      }, '<.4')

    // Cleanup
    return () => {

    };

  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <StyledModal
        className='my-modal'
        open={open}
        onClose={handleClose}
        aria-labelledby="Let's talk!"
        aria-describedby="Let's talk!"
      >
        <>
          <Contact closeClicked={handleClose} />
        </>
      </StyledModal>
      <HeroSection maxWidth={'xl'}>
        <HeroSectionWrapper maxWidth={'lg'}>
          <Title className='title'>Unlock Your Potential</Title>
          <Subtitle className="subTitle">Empowering Your Business With Innovation</Subtitle>
          <ButtonContainer>
            <StyledButton className='letsTalk' variant="contained" onClick={handleOpen}>
              <span style={{ minWidth: '180px' }} className='buttonText'>Let's Talk!</span>
            </StyledButton>
          </ButtonContainer>
          {/* <ServiceAnimation className="service-animation">
          <SAItem>Software Development</SAItem>
          <SAItem>Cloud Integration</SAItem>
          <SAItem>DevOps</SAItem>
          <SAItem>Automation</SAItem>
          <SAItem>Web Development</SAItem>
          <SAItem>Security & Identity</SAItem>
          <SAItem>Enterprise Software Integration</SAItem>
          <SAItem>Data Lake</SAItem>
          <SAItem>Data Warehousing</SAItem>
          <SAItem>Big Data</SAItem>
          <SAItem>ETL</SAItem>
          <SAItem>Analytics & Reporting</SAItem>
          <SAItem>Network Design & Architecture</SAItem>
          <SAItem>Hybrid Cloud Implemention</SAItem>
          <SAItem>Cloud Migration</SAItem>
          <SAItem>Multi-Cloud Architecture</SAItem>
          <SAItem>Cloud Storage</SAItem>
          <SAItem>Disaster Recoverty</SAItem>
        </ServiceAnimation> */}
        </HeroSectionWrapper>
      </HeroSection>
    </>
  );
};

export default HeroComponent;
