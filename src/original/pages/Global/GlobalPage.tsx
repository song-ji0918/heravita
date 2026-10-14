import { useEffect } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Section1 from "./GlobalS1";

const GLOBAL_HEADER_BG = "#F3EEE7";

/** Global 菜单页：Header + 主体 + Footer */
const GlobalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#F3EEE7] text-[#2F2F2F]">
      <Header overlay alwaysVisible />
      <main className="flex-1">
        <Section1 />
      </main>
      <Footer />
    </div>
  );
};

export default GlobalPage;
