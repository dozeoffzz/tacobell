import React from "react";
import { AllStores } from "../apis/stores";
import tacobellStore from "../assets/icons/tacobellstore.svg";
import tacobellMap from "../assets/icons/tacobellmap.svg";
import tacobellCall from "../assets/icons/call.svg";
import styled from "@emotion/styled";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 100px;

  @media (max-width: 1024px) {
    padding: 50px 50px;
  }

  @media (max-width: 375px) {
    padding: 50px 20px;
  }
`;

const MainText = styled.h3`
  font-family: "bangers";
  font-size: 56px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 375px) {
    font-size: 32px;
  }
`;

const StoreContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 1728px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StoreCardWrap = styled.div`
  padding: 30px;
  border-radius: 30px;
  background-color: #8c73b7;
  background-color: #51436b;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 1728px) {
    padding: 20px;
  }
  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 375px) {
    padding: 20px;
  }
`;

const StoreRegion = styled.div`
  padding: 0 0 0 30px;
  background-color: #8c73b7;
  text-align: center;
`;

const StoreImgContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
`;

const StoreText = styled.div`
  display: flex;
  font-size: 24px;
  color: #fafafa;
  gap: 10px;
  font-weight: 500;

  @media (max-width: 1728px) {
    font-size: 18px;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 375px) {
    font-size: 16px;
  }
`;
const StoreIcon = styled.img`
  width: 24px;
`;

const StoreMap = styled(StoreText)`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 400;

  @media (max-width: 1728px) {
    font-size: 16px;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;
const MapIcon = styled.img`
  width: 24px;
`;

const CallContainer = styled.a`
  padding: 6px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fafafa;
  color: #8c73b7;
  gap: 20px;
  border-radius: 30px;
  font-size: 20px;

  &:hover {
    background-color: #ad95d7;
    color: #0c0c0c;
    box-shadow: 0 0 8px #9b00ff;
  }

  transition: all 0.3s ease;

  @media (max-width: 1728px) {
    font-size: 16px;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

export default function StorePage() {
  return (
    <Section>
      <MainText>TACO BELL's STORE</MainText>
      <StoreContainer>
        {AllStores.map((item) => (
          <StoreCardWrap key={item.id}>
            {/* <StoreRegion>{item.region}</StoreRegion> */}
            <StoreImgContainer>
              <img src={item.img} />
            </StoreImgContainer>
            <StoreText>
              <StoreIcon src={tacobellStore} />
              <p>{item.name}</p>
            </StoreText>
            <StoreMap>
              <MapIcon src={tacobellMap} />
              <p>{item.map}</p>
            </StoreMap>
            <CallContainer href={`tel:${item.call}`}>
              <img src={tacobellCall} />
              <p>{item.call}</p>
            </CallContainer>
          </StoreCardWrap>
        ))}
      </StoreContainer>
    </Section>
  );
}
