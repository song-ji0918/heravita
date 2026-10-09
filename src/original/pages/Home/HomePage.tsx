import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Banner from "../../components/Banner/Banner";
import HomeNarrative from "../../components/HomeNarrative/HomeNarrative";
import Section7 from "../../components/Sections/Section7/Section7";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

/** 首页 */
const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [location.hash, location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <Header overlay />
      <main className="flex-1">
        <Banner />
        <HomeNarrative />
        <Section7 />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
