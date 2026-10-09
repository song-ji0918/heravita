import { useEffect } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Section1 from "./OriginS1";
import Section2 from "./OriginS2";
import Section3 from "./OriginS3";
import Section4 from "./OriginS4";
import Section5 from "./OriginS5";
import Section6 from "./OriginS6";

const ORIGIN_HEADER_BG = "#F3EEE7";

/** Origin 菜单页：Header + 主体 sections + Footer */
const OriginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#F3EEE7] text-[#2F2F2F]">
      <Header backgroundColor={ORIGIN_HEADER_BG} />
      <main className="flex-1">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </main>
      <Footer />
    </div>
  );
};

export default OriginPage;
