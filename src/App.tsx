import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { PlatformPage } from "./pages/PlatformPage";
import { SignupPage } from "./pages/SignupPage";
import { MainLayout } from "./components/layout/MainLayout";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/platform" element={<PlatformPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
