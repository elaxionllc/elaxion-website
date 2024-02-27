import { Container, styled } from "@mui/system"
import * as dt from './assets/digital-transformation2.png'
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
    backgroundColor: 'rgb(38 54 74 / 68%)',
    backgroundImage: 'linear-gradient(rgb(39 59 87 / 65%), rgb(174 248 254 / 34%) 39%, rgba(20, 20, 20, 0))'
})

const InfoData = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
})

const Title = styled(Typography)({

})

const Subtitle = styled(Typography)({

})

const Description = styled(Typography)({

})

const Service1 = () => {
    return (
        <Section>
            <Wrapper>
                <BgImage />
                <InfoContainer>
                    <InfoData maxWidth={'lg'}>
                        <Title variant="h1">Future-proof your applications</Title>
                        <Subtitle variant="h2">Modernization and transformation in software solutions</Subtitle>
                        <Description variant="h2">We specializes in crafting modern, scalable solutions designed to meet the unique needs of businesses of any size. As a trusted partner, we consistently deliver high-performance, secure software systems. Whether you're a startup or an established corporation, we're committed to providing excellence and helping you reach your objectives</Description>
                    </InfoData>
                </InfoContainer>
            </Wrapper>
        </Section>
    )
}

export default Service1