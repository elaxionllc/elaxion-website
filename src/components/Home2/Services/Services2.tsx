import { styled, Container } from "@mui/system"

const MainContainer = styled(Container)((props) => ({

}))

const Title = styled('h1')((props) => ({
    textAlign: 'center',
}))

const ServiceContainer = styled('div')((props) => ({
    display: 'flex',
    flexWrap: 'wrap',
}))

const ServiceBox = styled('div')((props) => ({
    flex: '0 0 33.333%',
    // borderWidth: '1px',
    // borderColor: 'black',
    // borderStyle: 'solid',


    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    textAlign: 'center',


    [props.theme.breakpoints.down('sm')]: {
        flex: '0 0 50%',
    }
}))

const ServiceItem = styled('div')({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center",
    gap: '10px',
    padding: '10px',
})

const ServiceTitle = styled('div')((props) => ({
    fontWeight: "700",
    letterSpacing: "2px",

    [props.theme.breakpoints.down('sm')]: {
        fontWeight: "200",
    }
}))

const ServiceDescription = styled('div')((props) => ({
    letterSpacing: "2px",
    width: "80%",
    color: 'rgb(22, 30, 46)',

    [props.theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}))


type ServiceItemComponentProps = {
    Title: string
    Description: string,
    Background: string
}

const ServiceItemComponent = (props: ServiceItemComponentProps) => {

    const Shape = styled('div')({
        width: '75px',
        height: '75px',
        background: `${props.Background}`,
        borderRadius: '100px',
    })

    return (
        <ServiceBox>
            <ServiceItem>
                <Shape />
            </ServiceItem>
            <ServiceItem>
                <ServiceTitle>{props.Title}</ServiceTitle>
                <ServiceDescription className="service description">{props.Description}</ServiceDescription>
            </ServiceItem>
        </ServiceBox>
    )
}


const Services2 = () => {
    return (
        <MainContainer maxWidth={'lg'}>
            <Title>Our Services</Title>
            <ServiceContainer>
                <ServiceItemComponent
                    Title="Application Engineering"
                    Description="Customized software solutions to meet your unique business needs. Enhance workflow, quality, and team productivity effectively"
                    Background="linear-gradient(130deg, rgba(133,173,188,1) 0%, rgba(133,173,188,1) 0%, rgba(83,125,142,1) 0%, rgba(156,179,255,1) 0%, rgba(165,213,245,1) 72%, rgba(176,255,233,1) 100%)" />

                <ServiceItemComponent
                    Title="Data Analytics"
                    Description="Leverage data-driven insights for business growth. Use advanced BI dashboards, reporting tools, & data warehousing for informed decisions driving success"
                    Background="linear-gradient(130deg, rgba(133,173,188,1) 0%, rgba(133,173,188,1) 0%, rgba(83,125,142,1) 0%, rgba(156,179,255,1) 0%, rgba(131,131,239,1) 0%, rgba(175,165,246,1) 51%, rgba(231,209,255,1) 100%)" />

                <ServiceItemComponent
                    Title="Cloud Solutions"
                    Description="Our team offers targeted support for enterprise cloud adoption, including specialized guidance across various solutions, technologies, and industries"
                    Background="linear-gradient(130deg, rgba(133,173,188,1) 0%, rgba(133,173,188,1) 0%, rgba(83,125,142,1) 0%, rgba(156,179,255,1) 0%, rgba(0,0,0,1) 0%, rgba(255,137,137,1) 0%, rgba(255,221,197,1) 100%)" />

                <ServiceItemComponent
                    Title="Application Modernization"
                    Description="Our team facilitates business competitiveness by strategically modernizing legacy applications, ensuring relevance, and implementing future-proofing measures with a focus on professionalism and excellence"
                    Background="linear-gradient(130deg, rgba(133,173,188,1) 0%, rgba(133,173,188,1) 0%, rgba(83,125,142,1) 0%, rgba(156,179,255,1) 0%, rgba(0,0,0,1) 0%, rgba(255,137,137,1) 0%, rgba(255,230,230,1) 100%)" />

                <ServiceItemComponent
                    Title="Consulting & Advisory"
                    Description="With our expertise, we seamlessly align your business goals with the right technologies, offering valuable insights for optimal integration"
                    Background="linear-gradient(130deg, rgba(133,173,188,1) 0%, rgba(133,173,188,1) 0%, rgba(83,125,142,1) 0%, rgba(156,179,255,1) 0%, rgba(0,0,0,1) 0%, rgba(255,175,115,1) 0%, rgba(255,254,204,1) 100%)" />

                <ServiceItemComponent
                    Title="Strategic Partnership"
                    Description="We integrate closely with your team, operating as an extension of your organization. This strategic partnership enables us to prioritize your needs with agility and responsiveness, ensuring mutual success"
                    Background="linear-gradient(130deg, rgba(133,173,188,1) 0%, rgba(133,173,188,1) 0%, rgba(83,125,142,1) 0%, rgba(156,179,255,1) 0%, rgba(0,0,0,1) 0%, rgba(89,219,176,1) 0%, rgba(254,255,181,1) 100%)" />

            </ServiceContainer>
        </MainContainer>
    )
}

export default Services2