import { useEffect } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Section1 from "./ContactS1";

const CONTACT_HEADER_BG = "#F3EEE7";

/** Contact 菜单页：Header + 主体 + Footer */
const ContactPage = () => {
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

export default ContactPage;
