/// <reference types="vite-plugin-svgr/client" />

import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import './Hero.css'
import HeroBg from './assets/HeroBg.png';
import WorldDdotted from "./assets/world.svg?react";
import BouncingArrow from './bouncing';

import * as wave from './assets/wave.jpg'

const Section = styled('section')((_) => ({
    // Your section styles here
    height: "calc(100vh - 64px)",
}));

const MainContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const TitleWrap = styled('div')({
    // Your title wrap styles here
});

const H1AnimationOne = styled('h1')({
    // Your H1 Animation One styles here
});

const H1AnimationTwo = styled('h2')({
    // Your H1 Animation Two styles here
});

const LimitSubtitle = styled('div')({
    // Your limit subtitle styles here
});

const WrapMapText = styled('div')({
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
});

const HeroBgContainer = styled('div')({
    backgroundImage: `url(${wave.default})`,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    opacity: '.2'
});

const WorldDdottedSvg = styled(WorldDdotted)({
    marginTop: 'auto', height: 'inherit'
})

const Hero = () => {

    return (
        <>
            <HeroBgContainer />
            <Section className="section hero-home-a">

                <MainContainer className="main-container ">
                    <TitleWrap className="title-wrap-home-a">
                        <div>
                            <H1AnimationOne style={{ opacity: 1 }}>Leveling the playing field.</H1AnimationOne>
                            <H1AnimationTwo className="h1-animation-two">Enterprise-grade technology for businesses at any scale.</H1AnimationTwo>
                        </div>
                        <LimitSubtitle className="limit-subtitle-home-a">
                            <div className="subtitle">
                                Boost your business with high-quality enterprise solutions, maximizing ROI and staying within budget. Drive growth and innovation tailored to your company's needs, creating fair opportunities for success
                            </div>
                        </LimitSubtitle>
                    </TitleWrap>
                </MainContainer>

                <WrapMapText className="wrap-map-text">

                    <WorldDdottedSvg></WorldDdottedSvg>
                </WrapMapText>
                <BouncingArrow />
            </Section>
        </>

    )
}

export default Hero;