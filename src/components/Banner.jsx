import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import bannerImg from "../assets/banners/banner1.webp";
import { AllBanner } from "../apis/banner";

const BannerContainer = styled.div`
  position: relative;
  margin: 0 5px;
  border-radius: 15px;
  overflow: hidden;
`;

const BannerImg = styled.img`
  position: relative;
  width: 100%;
  display: block;

  /* height: 800px; */
  @media (max-width: 1024px) {
    height: 600px;
  }
  @media (max-width: 375px) {
    height: 450px;
  }
`;

const Indicator = styled.div`
  padding: 0 5px;
  position: absolute;
  right: 100px;
  width: 50%;
  bottom: 45px;
  display: flex;
  height: 5px;
  border-radius: 15px;
  background-color: #d9d9d9;
  z-index: 10;

  @media (max-width: 1024px) {
    right: 50px;
  }
  @media (max-width: 375px) {
    right: 20px;
  }
`;

const CurrentIndicator = styled.div`
  display: flex;
  align-self: center;
  width: ${({ count }) => 100 / count}%;
  height: 10px;
  border-radius: 15px;
  background-color: #9b00ff;
  transform: translateX(${({ current }) => current * 100}%);

  transition: transform 0.5s ease;

  @media (max-width: 1024px) {
    /* width: 300px; */
    height: 7px;
  }
  @media (max-width: 375px) {
    /* width: 100px; */
    height: 7px;
  }
`;

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % AllBanner.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  const currentBanner = AllBanner[current];

  const bannerImages = width <= 375 ? currentBanner.mobile : width <= 1024 ? currentBanner.tablet : currentBanner.img;
  return (
    <BannerContainer>
      <BannerImg src={bannerImages} />
      <Indicator>
        <CurrentIndicator current={current} count={AllBanner.length} />
      </Indicator>
    </BannerContainer>
  );
}
