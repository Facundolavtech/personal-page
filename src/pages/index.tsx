import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

const Home = () => {
  return (
    <>
      <SEO title="Facundo Lavagnino - Personal Page" />
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
      </main>
    </>
  );
};

export default Home;
