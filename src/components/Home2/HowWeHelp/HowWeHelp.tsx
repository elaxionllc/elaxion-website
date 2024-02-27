import { Paper, Typography, } from "@mui/material"
import { Container, styled } from "@mui/system"
import './HowWeHelp.css'
import { Description } from "@mui/icons-material"

const MainContainer = styled(Container)((props) => ({
    marginTop: '70px',
    alignItems: "center",
    display: "flex",
    flexDirection: 'column',
    gap: '20px',

}))


// const Title = styled('h1')((props) => ({
//     textAlign: 'center',
//     position: 'sticky',
//     top: '0px',
//     backgroundColor: 'white',
// }))

// const HelpInfoSection = styled(Paper)((props) => ({
//     // textAlign: 'center',
//     // // position: 'sticky',
//     // // top: '47px',
//     // zIndex: '-1',
//     // backgroundColor: 'white',

// }))

// const HelpInfoSectionTitle = styled('h2')((props) => ({

// }))

// const HelpInfoSectionDescription = styled('div')((props) => ({
//     textAlign: 'left',
//     padding: '20px',
// }))

// const Section1 = styled(HelpInfoSection)((props) => ({

// }))

// const Section2 = styled(HelpInfoSection)((props) => ({

// }))

// const Section3 = styled(HelpInfoSection)((props) => ({

// }))


const HelpItem = ({ title, description }: { title: string, description: string }) => {

    // const Container2 = styled('div')(() => ({
    //     '&:nth-of-type(odd)': {
    //         flexDirection: 'row',
    //       },
    //       '&:nth-of-type(even)': {
    //         flexDirection: 'row-reverse',
    //       },
    //   }))

    //     const Container2 = styled('div')`
    //         display: 'flex',
    //         flexDirection: 'row',

    //         /* Style for buttons 1, 3, and 4 */
    //         &:nth-child(odd) {
    //             flexDirection: 'row',
    //         }

    //         /* Style for buttons 2, 4, and 6 */
    //         &:nth-child(even) {
    //             flexDirection: 'row-reverse',
    //         }
    // `;

    const Container = styled('div')(props => ({
        display: 'flex',
        flexDirection: 'row',

        [props.theme.breakpoints.down('sm')]: {
            flexDirection: 'column!important'
        }
    }))

    const ImageContainer = styled('div')(props => ({
        flex: '1',

    }))

    const DescriptionContainer = styled('div')(props => ({
        display: 'flex',
        flexDirection: 'column',
        flex: '1',

        [props.theme.breakpoints.down('sm')]: {

        }
    }))

    const HelpItemTitle = styled('h1')(props => ({
        fontSize: '50px',
        lineHeight: '45px',
    }))

    const HelpItemDesc = styled('p')(props => ({
        color: '#6e6e6e',
        marginTop: '-17px',
        fontSize: '24px',
    }))


    return (
        <Container className="help-item">
            <ImageContainer>
            

            </ImageContainer>
            <DescriptionContainer>
                <HelpItemTitle>{title}</HelpItemTitle>
                <HelpItemDesc>
                    {description}
                </HelpItemDesc>
            </DescriptionContainer>
        </Container>
    )
}


const HowWeHelp = () => {
    return (
        <MainContainer maxWidth={'lg'}>
            {/* <Title>
                How We Help
            </Title> */}
            <HelpItem
                title={"Deliver Faster"}
                description={"We're all about turbocharging software delivery by mixing the best of DevOps, Agile, and streamlined development. With DevOps, we merge development and operations seamlessly, so updates flow out smoothly and without a hitch. It's like having a well-oiled machine that cranks out new features at the drop of a hat."} />

            <HelpItem
                title={"Extend your team"}
                description={"We're all about turbocharging software delivery by mixing the best of DevOps, Agile, and streamlined development. With DevOps, we merge development and operations seamlessly, so updates flow out smoothly and without a hitch. It's like having a well-oiled machine that cranks out new features at the drop of a hat."} />

            <HelpItem
                title={"To the cloud and beyond"}
                description={"We're all about turbocharging software delivery by mixing the best of DevOps, Agile, and streamlined development. With DevOps, we merge development and operations seamlessly, so updates flow out smoothly and without a hitch. It's like having a well-oiled machine that cranks out new features at the drop of a hat."} />

            {/* <Section1 elevation={3}>
                <HelpInfoSectionTitle>Deliver Faster</HelpInfoSectionTitle>
                <HelpInfoSectionDescription>
                    We're all about turbocharging software delivery by mixing the best of DevOps, Agile, and streamlined development. With DevOps, we merge development and operations seamlessly, so updates flow out smoothly and without a hitch. It's like having a well-oiled machine that cranks out new features at the drop of a hat.
                </HelpInfoSectionDescription>
                <HelpInfoSectionDescription>
                    On the Agile side, we're all about flexibility and responsiveness. We break down projects into bite-sized chunks, delivering value with each iteration. This means you get to see results fast and can tweak things along the way. Plus, our streamlined development process means we cut out any unnecessary steps, so there's no time wasted on things that don't matter. It's all about getting your software out there quickly, efficiently, and with a touch of finesse.
                </HelpInfoSectionDescription>
            </Section1>
            <Section2>
                <HelpInfoSectionTitle>Grow your team, not your spending</HelpInfoSectionTitle>
                <HelpInfoSectionDescription>
                    We're all about turbocharging software delivery by mixing the best of DevOps, Agile, and streamlined development. With DevOps, we merge development and operations seamlessly, so updates flow out smoothly and without a hitch. It's like having a well-oiled machine that cranks out new features at the drop of a hat.
                </HelpInfoSectionDescription>

                <HelpInfoSectionDescription>
                    On the Agile side, we're all about flexibility and responsiveness. We break down projects into bite-sized chunks, delivering value with each iteration. This means you get to see results fast and can tweak things along the way. Plus, our streamlined development process means we cut out any unnecessary steps, so there's no time wasted on things that don't matter. It's all about getting your software out there quickly, efficiently, and with a touch of finesse.
                </HelpInfoSectionDescription>
            </Section2>
            <Section3>
                <HelpInfoSectionTitle>Cloud Adoption, Cost-Effectively</HelpInfoSectionTitle>
                <HelpInfoSectionDescription>
                    We're all about turbocharging software delivery by mixing the best of DevOps, Agile, and streamlined development. With DevOps, we merge development and operations seamlessly, so updates flow out smoothly and without a hitch. It's like having a well-oiled machine that cranks out new features at the drop of a hat.
                </HelpInfoSectionDescription>

                <HelpInfoSectionDescription>
                    On the Agile side, we're all about flexibility and responsiveness. We break down projects into bite-sized chunks, delivering value with each iteration. This means you get to see results fast and can tweak things along the way. Plus, our streamlined development process means we cut out any unnecessary steps, so there's no time wasted on things that don't matter. It's all about getting your software out there quickly, efficiently, and with a touch of finesse.
                </HelpInfoSectionDescription>
            </Section3> */}
        </MainContainer>
    )
}

export default HowWeHelp