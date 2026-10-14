import { useEffect } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Section1 from "./LifeS1";
import Section2 from "./LifeS2";
import Section3 from "./LifeS3";
import Section4 from "./LifeS4";
import Section5 from "./LifeS5";
import Section6 from "./LifeS6";
import Section7 from "./LifeS7";
import Section8 from "./LifeS8";


/** Life 菜单页：Header + 主体 sections + Footer */
const LifePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#F3EEE7] text-[#2F2F2F]">
      <Header overlay alwaysVisible />
      <main className="flex-1">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </main>
      <Footer />
    </div>
  );
};

export default LifePage;
