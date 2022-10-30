import SEO from "../components/SEO";
import Hero from "../components/Hero";
import HomeTabs from "../components/HomeTabs";

const Home = () => {
  return (
    <>
      <SEO title="Facundo Lavagnino - Blog" />
      <main>
        <Hero />
        <HomeTabs />
      </main>
    </>
  );
};

export default Home;
