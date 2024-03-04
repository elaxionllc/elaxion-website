import { ReactNode } from 'react';
import { Container, styled } from '@mui/system';
import * as cb from './assets/circuit-board.jpg'
import * as ip from './assets/iphone-building.png'
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from "gsap/ScrollTrigger";

enum FlexDirection {
    Row = 'row',
    RowReverse = 'row-reverse',
    Column = 'column',
    ColumnReverse = 'column-reverse'
}


const Content = (
    { title, image, children, reversed }:
        { title: string, image: string, children: ReactNode, reversed?: boolean }) => {

            const ContentContainer = styled('div')((props) => ({
                fontFamily: "Montserrat, sans-serif",
                display: 'flex',
                flexDirection: `${((reversed ? FlexDirection.RowReverse : FlexDirection.Row))}`,
                gap: '20px',
                paddingBottom: '100px',
        
                [props.theme.breakpoints.down('md')]: {
                    flexDirection: 'column-reverse',
                }
            }));

            const ContentInnerContainer = styled(Container)((props) => ({
                fontFamily: "Montserrat, sans-serif",
                display: 'flex',
                flexDirection: `${((reversed ? FlexDirection.RowReverse : FlexDirection.Row))}`,
                gap: '20px',
                paddingBottom: '100px',
        
                [props.theme.breakpoints.down('lg')]: {
                    flexDirection: 'column-reverse',
                }
            }));

    const ContentInfo = styled('div')(() => ({
        display: 'flex',
        flexDirection: 'column',

    }));


    const ContentImageContainer = styled('div')((props) => ({
        verticalAlign: "middle",
        display: 'flex',
        marginLeft: `${(reversed ? "0px" : "auto")}`,
        marginRight: `${(reversed ? "auto" : "0px")}`,

        [props.theme.breakpoints.down('lg')]: {
            marginLeft: "0px",
            //marginRight: "inherit",
        }
    }));

    const ContentInfoTitle = styled('h2')(() => ({
        top: 'inherit',
        color: "#000",
        marginBottom: "10px",
        fontSize: "26px",
        fontWeight: 700,
        lineHeight: "120%",
        textAlign: 'left',
    }));

    const ContentInfoDesc = styled('p')(() => ({
        marginBottom: "10px",
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: "156%",
    }));


    const ContentImage = styled('img')((props) => ({
        position: 'relative',
        objectFit: "contain",
        borderRadius: "16px",
        maxWidth: "500px",
        verticalAlign: "middle",
        alignSelf: "center",

        [props.theme.breakpoints.down('md')]: {
            maxWidth: '100%',
        }
    }));

    // const container = useRef<HTMLDivElement | null>(null);
    // const timeline = useRef<gsap.core.Timeline>();

    // useGSAP(() => {

    //     gsap.registerPlugin(ScrollTrigger)
    //     timeline.current = gsap.timeline({})

    //     const title: Array<HTMLHeadingElement> = gsap.utils.toArray('.title')
    //     const text: Array<HTMLElement> = gsap.utils.toArray('.desc')
    //     const image: Array<HTMLElement> = gsap.utils.toArray('.image')

    //     timeline.current
    //         .from(title, {
    //             scrollTrigger: {
    //                 trigger: title,
    //                 start: 'top center',

    //             },
    //             duration: 1,
    //             opacity: 0
    //         });



    //     return () => {

    //     }
    // }, { scope: container })

    return (
        <ContentContainer className="content-container">
            <ContentInnerContainer maxWidth={'lg'}>
                <ContentInfo>
                    <ContentInfoTitle className='title'>
                        {title}
                    </ContentInfoTitle>
                    <ContentInfoDesc className='desc'>
                        {children}
                    </ContentInfoDesc>
                </ContentInfo>
                <ContentImageContainer>
                    <ContentImage src={image} className='image' />
                </ContentImageContainer>
            </ContentInnerContainer>
        </ContentContainer>

    )
}



const PaveYourPath = () => {

    const PaveYourPathContainer = styled(Container)({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(237 239 242)',
        paddingTop: '32px',
        paddingBottom: '32px',

    });

    const Header = styled('h2')((props) => ({
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

    const ContentContainer = styled('div')(() => ({
        display: 'flex',
        flexDirection: 'column'
    }));


    return (
        <PaveYourPathContainer maxWidth={false} className='test'>
            <Header>PAVE YOUR PATH TO ENDURING ACHIEVEMENT!</Header>
            <ContentContainer>
                <Content title="Empower Productivity" image={cb.default}>
                    Embracing the latest tech tools isn't just about staying trendy; it's about supercharging your operations! With automation, AI, and cloud platforms in your corner, your workflows become smoother, collaboration skyrockets, and flexibility reaches new heights. Plus, when you sprinkle in some data analytics magic, making decisions becomes a breeze, fueling innovation along the way. It's not just about being efficient anymore; it's about leading the pack in this digital era!
                </Content>
                <Content title="Built To Last" image={ip.default} reversed={true}>
                    Our software solutions are meticulously crafted with a commitment to longevity, ensuring they stand the test of time. Built upon robust architecture and utilizing best-in-class development practices, our solutions are engineered to endure evolving technological landscapes and changing business needs. With a focus on scalability, flexibility, and maintainability, our products are designed to adapt seamlessly to future challenges, providing enduring value to our clients.
                </Content>
            </ContentContainer>
        </PaveYourPathContainer>)
}

export default PaveYourPath;
