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
    backgroundColor: 'rgb(251 227 162 / 55%)',
    backgroundImage: 'linear-gradient(rgb(251 227 162 / 65%), rgb(174 248 254 / 34%) 39%, rgba(20, 20, 20, 0))'
})

const Title = styled(Typography)({

})

const Subtitle = styled(Typography)({

})

const Description = styled(Typography)({

})
const Service4 = () => {
    return (
        <Section>
            <Wrapper>
                <BgImage />
                <InfoContainer>
                    <Container maxWidth={'lg'}>
                        <Title variant="h1">Strategic Partnership</Title>
                        <Subtitle variant="h2">Maximizing operational effectiveness through collaboration</Subtitle>
                        <Description variant="h2">Our service seamlessly integrates with your team, functioning as a trusted extension of your workforce. We adapt to your changing needs, provide skilled professionals, and shoulder some workload so your team can focus on critical tasks. Together, we leverage collective knowledge and resources, driving progress and ensuring measurable returns on your investment</Description>
                    </Container>
                </InfoContainer>
            </Wrapper>
        </Section>
    )
}

export default Service4