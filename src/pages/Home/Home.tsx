import HeroComponent from "../../components/Hero/HeroComponent";
import Footer from "./Footer/footer";
import Hero from "./Hero/Hero";
import ServicePreview from "./ServicePreview/ServicePreview";

const Home = () => {
  return (
    <>
      <Hero />
      <ServicePreview />
      <Footer />
    </>
  );
};

export default Home;
