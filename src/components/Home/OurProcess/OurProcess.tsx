import { Container, styled } from "@mui/system"
import * as g from './assets/growth.png'


const InfoItem = (
    { number, title, children }:
        { number: string, title: string, children: string }) => {

    const InfoContainer = styled('div')((props)=>({
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "Montserrat, sans-serif",
        minHeight: '240px',

        borderTopWidth: "2.5px",
        borderTopStyle: "solid",
        borderColor: "#e6e0f1",
        paddingTop: "23px",
        paddingBottom: "30px",

        [props.theme.breakpoints.down('sm')]: {
            minHeight: 'inherit',
        }
    }))

    const TopContainer = styled('div')({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: "16px",
    })

    const TitleContainer = styled('h5')({
        color: "#000",
        marginTop: 0,
        marginBottom: 0,
        fontSize: "14px",
        fontWeight: 700,
        lineHeight: "140%",
        letterSpacing: "4px",
        textTransform: "uppercase",
    })

    const NumberContainer = styled('div')({
        WebkitTextFillColor: "transparent",
        backgroundImage: "linear-gradient(84deg, #aebfe3, #eda69d 54%, #efc08a)",
        backgroundClip: "text",
        marginRight: "16px",
        fontSize: "48px",
        fontWeight: 700,
        lineHeight: "56px",
    })

    const BottomContainer = styled('div')({
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "140%",
    })


    return (
        <InfoContainer>
            <TopContainer>
                <NumberContainer>{number}</NumberContainer>
                <TitleContainer>{title}</TitleContainer>
            </TopContainer>
            <BottomContainer>
                {children}
            </BottomContainer>
        </InfoContainer>
    )
}

const OurProcess = () => {
    const ProcessContainer = styled(Container)({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(237 239 242)',
        paddingTop: '32px',
        paddingBottom: '32px',
        // marginBottom: '100px',
    })

    const Title = styled('h2')((props) => ({
        textTransform: "uppercase",
        marginTop: 0,
        marginBottom: "16px",
        fontSize: "30px",
        textAlign: 'center',
        fontFamily: 'playfair, sans-serif',
        fontWeight: 300,
        paddingBottom: '50px',
        lineHeight: '35px',

        [props.theme.breakpoints.down('sm')]: {
            letterSpacing: ' -1px'
        }

    }));

    const SectionContainer = styled(Container)((props)=>({
        display: 'flex',
        flexDirection: 'row',
        gap: "30px",
        paddingLeft: "10px",
        paddingRight: '10px',

        [props.theme.breakpoints.down('lg')]:{
            gap: "60px",
        },

        [props.theme.breakpoints.down('sm')]:{
            flexDirection: 'column',
        },
    }))

    const LeftContainer = styled('div')({
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
    })

    const RightContainer = styled('div')({
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
    })

    const MiddleContainer = styled('div')((props)=>({
        display: 'flex',
        flex: '1',

        [props.theme.breakpoints.down('lg')]:{
            display: 'none',
        }
    }))


    const MiddleImage = styled('img')({
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "50% 50%",
        borderRadius: "18px",

    })

    return (
        <ProcessContainer maxWidth={false}>
            <Title>Our Bullet-proof process</Title>
            <SectionContainer maxWidth={'lg'}>
                <LeftContainer>
                    <InfoItem number={"01"} title={'Discover'}>
                        We start by chatting with you and diving deep into what makes your business tick. We want to understand your challenges, goals, and dreams. Think of it as our detective phase – we're on a mission to uncover insights that will shape our game plan.
                    </InfoItem>
                    <InfoItem number={"02"} title={'Define'}>
                        Once we've got the lowdown from you, it's time to put our thinking caps on. We'll sketch out a tailor-made solution that fits your needs like a glove. Our aim? To create something sleek, user-friendly, and totally customized just for you.
                    </InfoItem>
                </LeftContainer>
                <MiddleContainer>
                    <MiddleImage src={g.default} />
                </MiddleContainer>
                <RightContainer>
                    <InfoItem number={"03"} title={'Develop'}>
                        Now it's time to roll up our sleeves and get to work. Our team of tech wizards will bring your vision to life, piece by piece. We'll use the latest tools and techniques to build, test, and refine until everything is just right.
                    </InfoItem>
                    <InfoItem number={"04"} title={'Deliver'}>
                        Last but not least, we'll hand over the keys to your shiny new solution. But our job doesn't stop there. We'll stick around to make sure everything runs smoothly and offer support whenever you need it. Consider us your trusty sidekicks on your journey to success.
                    </InfoItem>
                </RightContainer>
            </SectionContainer>

        </ProcessContainer>
    )
}

export default OurProcess