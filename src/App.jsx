import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LayOut from "./components/LayOut";
import StoryPage from "./pages/StoryPage";
import ScrollTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route element={<LayOut />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/story" element={<StoryPage />} />
        </Route>
      </Routes>
    </>
  );
}
