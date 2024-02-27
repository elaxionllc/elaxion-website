import { Container, styled } from "@mui/system"
import * as dt from './assets/reporting-bi.png'
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
    backgroundColor: 'rgb(163 220 171 / 55%)',
    backgroundImage: 'linear-gradient(rgb(163 220 171/ 65%), rgb(174 248 254 / 34%) 39%, rgba(20, 20, 20, 0))'
})


const Title = styled(Typography)({

})

const Subtitle = styled(Typography)({

})

const Description = styled(Typography)({

})

const Service2 = () => {
    return (
        <Section>
            <Wrapper>
                <BgImage />
                <InfoContainer>
                    <Container maxWidth={'lg'}>
                        <Title variant="h1">Reporting and BI</Title>
                        <Subtitle variant="h2">Driving growth through tailored insights and precision analytics</Subtitle>
                        <Description variant="h2">Unlock growth potential with data-driven decisions tailored to your needs. We focus on building and customizing tools like business intelligence dashboards, detailed reporting systems, and reliable data warehousing solutions. This way, you get precisely what your business requires to gain valuable insights and drive growth.</Description>
                    </Container>
                </InfoContainer>
            </Wrapper>
        </Section>
    )
}

export default Service2