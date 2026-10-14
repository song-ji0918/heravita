import { useEffect } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Section1 from "./MedicalS1";
import Section10 from "./MedicalS10";
import Section2 from "./MedicalS2";
import Section3 from "./MedicalS3";
import Section5 from "./MedicalS5";
import Section6 from "./MedicalS6";
import Section7 from "./MedicalS7";
import Section8 from "./MedicalS8";
import Section9 from "./MedicalS9";

const MEDICAL_HEADER_BG = "#F3EEE7";

/** Medical 菜单页：Header + 主体 sections + Footer */
const MedicalPage = () => {
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
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
      </main>
      <Footer />
    </div>
  );
};

export default MedicalPage;
