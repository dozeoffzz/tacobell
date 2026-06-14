import styled from "@emotion/styled";
import React from "react";
import bannerImg from "../assets/imgs/banner1.webp";

const BannerContainer = styled.div`
  position: relative;
  height: 900px;
`;

const Indicator = styled.div`
  padding: 0 5px;
  position: absolute;
  left: 100px;
  right: 100px;
  bottom: 45px;
  display: flex;

  width: 1720px;
  height: 5px;
  border-radius: 15px;
  background-color: #d9d9d9;
`;

const CurrentIndicator = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  width: 500px;
  height: 10px;
  border-radius: 15px;
  background-color: #9b00ff;
`;

export default function Banner() {
  return (
    <BannerContainer>
      <img src={bannerImg} />
      <Indicator>
        <CurrentIndicator></CurrentIndicator>
      </Indicator>
    </BannerContainer>
  );
}
