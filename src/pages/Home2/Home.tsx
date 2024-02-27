import { Container, styled } from '@mui/system';
import Hero from '../../components/Home2/Hero/Hero';
import Stats from '../../components/Home2/Stats/Stats';
import Services from '../../components/Home2/Services/Services';
import Services2 from '../../components/Home2/Services/Services2';
import Hero2 from '../../components/Home2/Hero/Hero2';
import Hero3 from '../../components/Home2/Hero/Hero3';
import ServiceInfo from '../../components/Home2/ServiceInfo/ServiceInfo';
import HowWeHelp from '../../components/Home2/HowWeHelp/HowWeHelp';

const Wrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column'
})


const Home = () => {
    return (
        <Wrapper className='home wrapper'>
            <Hero3 />

            <Services2 />
            <HowWeHelp />
            <ServiceInfo />
            {/* <Hero />
            <Hero />
            <Hero /> */}
        </Wrapper>
    )
}

export default Home;