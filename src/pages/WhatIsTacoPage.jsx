import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Buttons from "../components/Buttons";
import taco from "../assets/imgs/taco.webp";

const Section = styled.section`
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 375px) {
    padding: 0 20px;
  }
`;
const TacoInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 375px) {
    gap: 20px;
  }
`;
const WhatIsTaco = styled.h3`
  font-family: "bangers";
  font-size: 56px;

  @media (max-width: 375px) {
    font-size: 24px;
  }
`;
const Mexico = styled.p`
  font-size: 20px;

  @media (max-width: 375px) {
    font-size: 14px;
  }
`;
const Info = styled.p`
  font-size: 28px;
  font-weight: 500;

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;
const ButtonWrap = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;

  @media (max-width: 375px) {
    height: 30px;
  }
`;
const TacoImageWrap = styled.div`
  opacity: 0;
  transform: translateY(100px);
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 1s ease;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }

  img {
    display: block;
    width: auto;
  }
`;

export default function WhatIsTacoPage() {
  const imageRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      {
        threshold: 0.3,
      },
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);
  console.log(show);
  return (
    <Section>
      <TacoInfo>
        <WhatIsTaco>WHAT IS TACO?</WhatIsTaco>
        <Mexico>TRADITIONAL MEXICO FOOD</Mexico>
        <Info>
          타코는 손바닥 사이즈의 토르티야에 주로 고기나 해물, 양파, 로메인, 고수, 치즈, 아보카도 등을 얹고
          <br />
          살사를 곁들여 싸 먹는 대표적인 멕시코 요리입니다.
          <br />
          오늘날 타코는 부리또와 함께 현대 식문화에서 빠질 수 없는 음식으로 자리 잡았습니다.
        </Info>
        <ButtonWrap>
          <Buttons />
        </ButtonWrap>
      </TacoInfo>
      <TacoImageWrap ref={imageRef} className={show ? "show" : ""}>
        <img src={taco} alt="taco" />
      </TacoImageWrap>
    </Section>
  );
}
