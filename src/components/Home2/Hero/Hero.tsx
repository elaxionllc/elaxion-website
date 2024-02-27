import { Container, styled } from "@mui/system";
import * as wave from '../assests/wave2.png'
import { Typography } from "@mui/material";
import BouncingArrow from "../BouncingArrows/bouncing";


const Section = styled('section')({
    minHeight: "calc(100vh - 64px)",
})

const HeroContainer = styled(Container)((props) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: '320px',

    [props.theme.breakpoints.up("xs")]: {
        paddingTop: '56px',
    },
    [props.theme.breakpoints.up("sm")]: {
        paddingTop: '156px',
    },
    [props.theme.breakpoints.up("md")]: {
        paddingTop: '320px',
    },
}))

const Title = styled(Typography)({

})

const Subtitle = styled(Typography)({

})

const Description = styled(Typography)((props) => ({
    position: "relative",
    [props.theme.breakpoints.up("xs")]: {

        bottom: "-70px",
    },
    [props.theme.breakpoints.up("sm")]: {
        bottom: "-30px",
    },
    [props.theme.breakpoints.up("md")]: {
        bottom: "-125px",
    },
}))

const HeroBackgroundContainer = styled('div')({
    backgroundImage: `url(${wave.default})`,
    width: '100%',
    height: "calc(100vh - 64px)",
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    opacity: '.2'
});

const Hero = () => {

    return (
        <>
            <Section>
                <HeroBackgroundContainer />
                <HeroContainer maxWidth={"lg"}>
                    <Title variant="h1">Leveling the playing field</Title>
                    <Subtitle variant="h2">Enterprise-grade technology for businesses at any scale</Subtitle>
                    <Description variant="h3">Boost your business with high-quality enterprise solutions, maximizing ROI and staying within budget. Drive growth and innovation tailored to your company's needs, creating fair opportunities for success</Description>
                </HeroContainer>
                <BouncingArrow />
            </Section>
        </>
    )
}

export default Hero