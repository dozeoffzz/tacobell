import React from "react";
import Banner from "../components/Banner";
import DesignText from "../components/DesignText";
import WhatIsTacoPage from "./WhatIsTacoPage";
import MenuPage from "./MenuPage";
import EventPage from "./EventPage";
import StorePage from "./StorePage";

export default function MainPage() {
  return (
    <>
      <Banner />
      <DesignText />
      <WhatIsTacoPage />
      <MenuPage />
      <EventPage />
      <StorePage />
    </>
  );
}
