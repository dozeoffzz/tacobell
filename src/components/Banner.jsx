import styled from "@emotion/styled";
import React from "react";
import bannerImg from "../assets/banners/banner1.webp";

const BannerContainer = styled.div`
  position: relative;
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
  left: 100px;
  right: 100px;
  bottom: 45px;
  display: flex;
  height: 5px;
  border-radius: 15px;
  background-color: #d9d9d9;
  z-index: 10;

  @media (max-width: 1024px) {
    left: 50px;
    right: 50px;
  }
  @media (max-width: 375px) {
    left: 20px;
    right: 20px;
  }
`;

const CurrentIndicator = styled.div`
  display: flex;
  align-self: center;
  width: 500px;
  height: 10px;
  border-radius: 15px;
  background-color: #9b00ff;

  @media (max-width: 1024px) {
    width: 300px;
    height: 7px;
  }
  @media (max-width: 375px) {
    width: 100px;
    height: 7px;
  }
`;

export default function Banner() {
  return (
    <BannerContainer>
      <BannerImg src={bannerImg} />
      <Indicator>
        <CurrentIndicator />
      </Indicator>
    </BannerContainer>
  );
}
