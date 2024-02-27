import { Container, styled } from "@mui/system"
import { Card, CardHeader } from "material-ui"
import StickyCard from "./StickyCard"

const MainContainer = styled('div')((props) => ({
    marginTop: '70px'
}))

const Title = styled('h1')((props) => ({
    textAlign: 'center',
}))

const ServiceInfoContainer = styled('div')({

})

const ServiceInfo = () => {
    return (
        <MainContainer >
            <Title>What we do</Title>
            <ServiceInfoContainer>

            </ServiceInfoContainer>
            <div style={{ height: '100vh' }}>asd</div>
        </MainContainer>

    )
}

export default ServiceInfo