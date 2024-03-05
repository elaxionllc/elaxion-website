import { Container, styled } from "@mui/system"
import { Link } from "react-router-dom";
import { ReactNode } from "react";


export const Paragraph = styled('p')({
    fontSize: "20px",
    fontWeight: 300,
    lineHeight: "25px",

})

export const SectionTitle = styled('h4')({
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '24px',
    marginTop: '10px',
    marginBottom: '10px',
})

export const SectionSubTitle = styled('h5')({
    // marginTop: "1.25rem",
    // marginBottom: "1rem",
    color: "#676770",
    letterSpacing: "4px",
    textTransform: "uppercase",
    marginTop: '10px',
    marginBottom: "0px",
    fontSize: "15px",
    fontWeight: "500",
    lineHeight: "20px",
})

export const SectionListItem = styled('li')({
    fontSize: "14px",
    fontWeight: 300,
    lineHeight: "25px",
})
const ServiceArticle = (
    { title, subtitle, headerImage, children }:
        { title: string, subtitle: string, headerImage: string, children: ReactNode }
) => {
    const ArticleContainer = styled('div')({
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '100px'
    })

    const ArticleHeader = styled('div')({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '375px',
        backgroundImage: `linear-gradient(rgba(16, 24, 40, .4), rgba(16, 24, 40, .4)), url(${headerImage})`,
        backgroundPosition: "0 0, 50% 0",
        backgroundSize: "auto, cover",
        marginBottom: '50px',
        color: '#fff'
    })

    const Title = styled('h1')({
        fontSize: '20px',
        textAlign: 'center',
        lineHeight: '40px',
        marginBottom: '30px',
    })

    const Subtitle = styled('h2')({
        fontSize: '40px',
        textAlign: 'center',
        lineHeight: '40px',
        marginTop: "-2px",
        maxWidth: '786px'
    })

    const ArticleBody = styled(Container)({
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Oxygen, Fira Sans, Droid Sans, sans-serif",
        color: 'rgb(71, 84, 103)',
    })

    const BreadCrumbs = styled(Container)({
        display: 'flex',
        alignItems: 'center',
        marginBottom: '25px',
    })

    const Crumb = styled('div')({
        color: "#475467",
        fontWeight: 500,
        paddingRight: "10px",
        paddingLeft: '10px',
    })

    const HomeLink = styled(Link)({
        color: "#475467",
        paddingRight: "10px",
        paddingLeft: '10px',
        
        ':hover': {
            textDecoration: 'none',
        }

    })

    return (
        <ArticleContainer >
            <ArticleHeader className="header">
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </ArticleHeader>
            <BreadCrumbs maxWidth={'md'}>
                <HomeLink to="/home" state={{ scrollTo: 'services' }}>Home</HomeLink>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1.5"></path>
                </svg>
                <Crumb>Services</Crumb>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1.5"></path>
                </svg>
                <Crumb>{title}</Crumb>
            </BreadCrumbs>
            <ArticleBody maxWidth={'md'}>
                {children}
            </ArticleBody>
        </ArticleContainer>
    )
}

export default ServiceArticle