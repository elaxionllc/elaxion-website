import { styled } from '@mui/system';
import { Container } from '@mui/material';


export type ServiceItemProp = {
    Id: number,
    BackgroundImage: string;
    OverlayBackgroundColor: string;
    OverlayBackgroundImage: string;
    Url: string;
    Title: string;
    SubTitle: string;
    Body: string;
}
const ListItem = styled('div')({
    // Your list item styles here
});

const Link = styled('a')({
    // Your link styles here
    display: 'block',
    backgroundSize: 'cover',
    textDecoration: 'none',
});


const MainContainer = styled(Container)({

    // Your main container styles here
});

const Text = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    // Your text styles here
    color: 'white', // Example text color
});

const Body = styled('h3')((props) => ({
    paddingTop: '50px',
    color: 'white',
    fontSize: '32px',
    fontweight: '300',
    lineHeight: '125%',
    
    [props.theme.breakpoints.up("xs")]: {
        fontSize: '20px',
    },
    [props.theme.breakpoints.up("sm")]: {
        fontSize: '22px',
    },
    [props.theme.breakpoints.up("md")]: {
        fontSize: '32px',
    },
    [props.theme.breakpoints.up("lg")]: {
        fontSize: '32px',
    },
}))

const ServiceItem = (props: ServiceItemProp) => {
    const Overlay = styled('div')({
        // Your overlay styles here
        backgroundColor: `${props.OverlayBackgroundColor}`, // Example overlay color
        backgroundImage: `${props.OverlayBackgroundImage}`
    });

    return (
        <ListItem role="listitem" className="item-scroll-over-project w-dyn-item">
            <Link
                style={{
                    backgroundImage: `url('${props.BackgroundImage}')`,
                }}
                href={`${props.Url}`}
                className="link-scroll-over-project w-inline-block"
            >
                <Overlay className="overlay-scroll-project">
                    <MainContainer className="w-layout-blockcontainer main-container w-container">
                        <div className="flex-big-top-project" style={{
                            display: "flex",
                            flexDirection: "column",
                        }}>
                            <Text className="text-scroll-project-name">{props.Title}</Text>
                            <div className="right-big-scroll-project" style={{
                                paddingTop: "10px"
                            }}>
                                <Text className="text-description-scroll-project">{props.SubTitle}</Text>
                            </div>
                        </div>
                    </MainContainer>
                    <MainContainer>
                        <Body >
                            {props.Body}
                        </Body>

                    </MainContainer>
                </Overlay>
            </Link>
        </ListItem>
    );
};

export default ServiceItem;
