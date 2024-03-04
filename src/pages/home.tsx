import Hero from '../components/Home/Hero/Hero'
import PaveYourPath from '../components/Home/PaveYourPath/PaveYourPath'
import OurSolutions from '../components/Home/OurSolutions/OurSolutions'
import OurProcess from '../components/Home/OurProcess/OurProcess'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {

    const location = useLocation();
    const pageSource = location.state?.scrollTo;

    useEffect(() => {
        if (pageSource) {
            const element = document.getElementById(pageSource);
            element?.scrollIntoView({
                behavior: 'instant'
            });
            location.state = null
        }
    }, [])

    return (
        <>
            <Hero />
            <PaveYourPath />
            <OurSolutions id="services" />
            <OurProcess />
        </>
    )
}

export default Home