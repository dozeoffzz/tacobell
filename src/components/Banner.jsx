import styled from "@emotion/styled";
import React from "react";
import bannerImg from "../assets/imgs/banner1.webp";

const BannerContainer = styled.div`
  position: relative;
  /* height: 900px; */
`;

const BannerImg = styled.img`
  position: relative;
  width: 100%;
  /* height: 100%; */
  display: block;
`;

const Indicator = styled.div`
  padding: 0 5px;
  position: absolute;
  left: 100px;
  right: 100px;
  bottom: 20px;
  display: flex;
  height: 5px;
  border-radius: 15px;
  background-color: #d9d9d9;
  z-index: 10;

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
