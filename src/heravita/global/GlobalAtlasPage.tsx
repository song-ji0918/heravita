import { useEffect } from "react";
import Footer from "@/original/components/Footer/Footer";
import Header from "@/original/components/Header/Header";
import GlobalAtlas from "./GlobalAtlas";

export default function GlobalAtlasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hv-atlas-page flex min-h-screen flex-col bg-[#F7F4EC] text-[#252A25]">
      <Header overlay alwaysVisible />
      <main className="flex-1">
        <GlobalAtlas />
      </main>
      <Footer />
    </div>
  );
}
