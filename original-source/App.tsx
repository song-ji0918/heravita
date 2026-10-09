import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import FounderPage from "./pages/Founder/FounderPage";
import DiscoverPage from "./pages/Discover/DiscoverPage";
import HomePage from "./pages/Home/HomePage";
import JourneyPage from "./pages/Journey/JourneyPage.tsx";
import LifePage from "./pages/Life/LifePage";
import ContactPage from "./pages/Contact/ContactPage";
import GlobalPage from "./pages/Global/GlobalPage";
import MedicalPage from "./pages/Medical/MedicalPage";
import OriginPage from "./pages/Origin/OriginPage";
import StoryPage from "./pages/Story/StoryPage";
import MethodPage from "./pages/Method/MethodPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/method" element={<MethodPage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/founder" element={<FounderPage />} />
        <Route path="/life" element={<LifePage />} />
        <Route path="/medical" element={<MedicalPage />} />
        <Route path="/origin" element={<OriginPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/global" element={<GlobalPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
