import { Container, styled } from "@mui/system"
import * as dt from '../Service2/assets/reporting-bi.png'
import { Typography } from "@mui/material"



const Section = styled('div')({
    position: 'sticky',
    height: '100vh',
    top: "0",
})

const Wrapper = styled('div')({
    position: 'relative',
    height: '100%',
    width: '100%',
})

const BgImage = styled('div')({
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${dt.default})`,
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
})

const InfoContainer = styled('div')({
    position: 'absolute',
    top: '0px',
    left: '0px',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgb(252 229 227 / 55%)',
    backgroundImage: 'linear-gradient(rgb(252 229 227/ 65%), rgb(174 248 254 / 34%) 39%, rgba(20, 20, 20, 0))'
})

const Title = styled(Typography)({

})

const Subtitle = styled(Typography)({

})

const Description = styled(Typography)({

})
const Service3 = () => {
    return (
        <Section>
            <Wrapper>
                <BgImage />
                <InfoContainer>
                    <Container maxWidth={'lg'}>
                        <Title variant="h1">Driving Efficiency</Title>
                        <Subtitle variant="h2">Software automation solutions for streamlined operations</Subtitle>
                        <Description variant="h2">Cut down on manual tasks and expenses by automating critical business processes. Harness the capabilities of AI, robotic process automation, and other cutting-edge automation solutions to streamline operations</Description>
                    </Container>
                </InfoContainer>
            </Wrapper>
        </Section>
    )
}

export default Service3