import { Button, Typography } from "@mui/material"
import { Container, styled } from "@mui/system"
import * as x from './wave.svg'

const MainContainer = styled(Container)((props)=>({
    height: '620px',

    [props.theme.breakpoints.down('sm')]: {
        height: '608px',
    }
}))

const ContainerWrapper = styled(Container)((props) =>
({
    backgroundImage:`url(${x.default})`,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    marginTop: '145px',
    fontFamily:"Playfair Display,serif",
}))

const HeadingContainer = styled('div')((props) =>
({
}))

const DescriptionContainer = styled('div')((props) =>
({

}))

const ButtonContainer = styled('div')((props) =>
({

}))

const Heading = styled('h1')((props) =>
({
    fontSize: '80px',
    fontWeight: '700',
    lineHeight: '1',
    letterSpacing: '-1px',
    margin: '0 auto',
    fontFamily:"Playfair Display,serif",

    [props.theme.breakpoints.down('sm')]: {
        fontSize: '55px',
    }
}))

const Description = styled('p')((props) =>
({
    fontSize: '18px',
    fontWeight: 'bold',
    margin: "30px auto 0",

    [props.theme.breakpoints.down('sm')]: {
        fontSize: '16px',
        margin: "15px auto 0",
    }
}))

const ButtonWrapper = styled(Button)((props) => ({
    borderRadius: "25px",
    width: "190px",
    marginTop: "25px",
    height: "50px",
    fontFamily: "Montserrat,sans-serif",

    backgroundColor:'#f1a600',
}))



const Hero3 = () => {
    return (
        <MainContainer maxWidth={false} className="container">
            <ContainerWrapper maxWidth={'lg'} className="container wrapper">
                <HeadingContainer className="heading container">
                    <Heading>Technology Unleashed</Heading>
                    <Description>We provide modernized technological solutions for start-ups to enterprises...</Description>
                    <Description>and everyone in between</Description>
                </HeadingContainer>
                <ButtonContainer className="button container">
                    <ButtonWrapper variant="contained">Let's talk!</ButtonWrapper>
                </ButtonContainer>
            </ContainerWrapper>
        </MainContainer>
    )
}

export default Hero3