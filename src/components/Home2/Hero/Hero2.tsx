import { Button, Typography } from "@mui/material"
import { Container, styled } from "@mui/system"

const ContainerWrapper = styled(Container)((props) => ({
    display: 'flex',
    flexDirection: 'column',
    marginTop: "10em",
    height: 'calc(100vh - 64px)',

    [props.theme.breakpoints.down("sm")]: {
        marginTop: "3em",
    },
    [props.theme.breakpoints.up("md")]: {

    },
    [props.theme.breakpoints.up("lg")]: {

    },
}))

const TextWrapper = styled('div')((props) => ({
    display: 'flex',
    flexDirection: 'row',

    [props.theme.breakpoints.down("sm")]: {
        flexDirection: 'column',
        fontSize: '.7em',
    },
    [props.theme.breakpoints.up("md")]: {

    },
    [props.theme.breakpoints.up("lg")]: {

    },
}))

const LeftContainer = styled('div')((props) => ({

    display: 'flex',
    flexDirection: 'column',
    flexBasis: "80%",

    [props.theme.breakpoints.up('sm')]: {
        textAlign: 'right',
        paddingRight: "57px",
    },
    [props.theme.breakpoints.down('sm')]: {
        paddingBottom: "20px",
    }
}))

const RightContainer = styled('div')((props) => ({

    flexBasis: '100%',

    [props.theme.breakpoints.down("xs")]: {

    },
    [props.theme.breakpoints.down("sm")]: {
        marginBottom: "220px",
    },
    [props.theme.breakpoints.up("md")]: {

    },
    [props.theme.breakpoints.up("lg")]: {

    },
}))

const HeroText = styled(Typography)({
    fontWeight: "bold",
    fontSize: "3.5em"
})

const EnterpriseGradeText = styled(HeroText)({
    color: "#2c4f84",
})

const TechnologyText = styled(HeroText)({

})

const BusinessesText = styled(HeroText)({

})

const AtAnyScaleText = styled(HeroText)({

})

const BoostText = styled(Typography)((props) => ({
    fontSize: "2em",

    [props.theme.breakpoints.up('sm')]: {
        borderLeft: "#f2ae00",
        borderLeftStyle: "solid",
        borderLeftWidth: "4px",
        paddingLeft: "57px",
        lineHeight: "42px",
    },
    [props.theme.breakpoints.down('sm')]: {
        fontSize: '1.8em',
        borderTop: "#f2ae00",
        borderTopStyle: "solid",
        borderTopWidth: "4px",
        paddingTop: "20px",
        lineHeight: "32px",
    }
}))

const Home2 = () => {

    return (

        <ContainerWrapper maxWidth={"lg"} className="wrapper">
            <TextWrapper>
                <LeftContainer className="left container">
                    <EnterpriseGradeText variant="h1">Enterprise-grade</EnterpriseGradeText>
                    <TechnologyText variant="h1">technology for</TechnologyText>
                    <BusinessesText variant="h1">businesses</BusinessesText>
                    <AtAnyScaleText variant="h1">at any scale</AtAnyScaleText>
                </LeftContainer>
                <RightContainer className="right container">
                    <BoostText>
                        Boost your business with high-quality enterprise solutions, maximizing ROI and staying within budget. Drive growth and innovation tailored to your company's needs, creating fair opportunities for success
                    </BoostText>
                </RightContainer>
            </TextWrapper>

            <div style={{
                paddingLeft: "10px"
            }}>
                
                <Button variant="outlined">Learn more</Button>

            </div>

        </ContainerWrapper>
    )
}

export default Home2