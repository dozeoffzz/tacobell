import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LayOut from "./components/LayOut";

export default function App() {
  return (
    <Routes>
      <Route element={<LayOut />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
}
