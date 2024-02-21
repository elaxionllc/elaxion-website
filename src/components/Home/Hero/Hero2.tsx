import { Container, styled } from '@mui/system';

import { Typography } from '@mui/material';


const Hero = styled("div")({
    height: "calc(100vh - 64px)",
});

const HeroHeadings = styled('div')(({ theme }) => ({
    paddingTop: "120px",
    display: 'flex',
    alignContent: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',

    [theme.breakpoints.up("xs")]: {
        paddingTop: "120px",
    },

    [theme.breakpoints.up("md")]: {
        paddingTop: "120px",
    }
}));

const Heading1 = styled(Typography)(({ theme }) => ({
    fontSize: "94px",

    [theme.breakpoints.up("xs")]: {
        fontSize: "43px",
    },
}));


const Heading2 = styled(Typography)(({ theme }) => ({
    fontSize: "94px",

    [theme.breakpoints.up("xs")]: {
        fontSize: "43px",
    },
}));

const HeroSubtitle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignContent: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',

    [theme.breakpoints.up("xs")]: {
      
    },

    [theme.breakpoints.up("md")]: {
       
    }
}));

const Subtitle = styled(Typography)(({ theme }) => ({
    fontSize: "32px",

    [theme.breakpoints.up("xs")]: {
        fontSize: "24px",
    },
}));


const Hero2 = () => {
    return (
        <Container maxWidth={"lg"} component={"section"}>
            <Hero className='hero'>
                <HeroHeadings>
                    <Heading1 className='heading1' variant='h1'>Futuristic.</Heading1>
                    <Heading2 className='heading2' variant='h1'>Design agency.</Heading2>
                </HeroHeadings>
                <HeroSubtitle>
                    <Subtitle variant='h4'>Futur Studio is a Webflow agency of the future with 50+ successful projects in their portfolio</Subtitle>
                </HeroSubtitle>
            </Hero>
        </Container>

    )
}

export default Hero2