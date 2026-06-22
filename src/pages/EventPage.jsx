import styled from "@emotion/styled";
import React, { useState } from "react";
import Buttons from "../components/Buttons";
import { AllEvent } from "../apis/event";
import left from "../assets/icons/left.svg";
import right from "../assets/icons/right.svg";

const Section = styled.section`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    padding: 50px;
  }
  @media (max-width: 375px) {
    padding: 50px 20px;
  }
`;

const TacoBellEvent = styled.h3`
  font-family: "bangers";
  font-size: 56px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    font-size: 36px;
  }
  @media (max-width: 375px) {
    font-size: 32px;
    margin-bottom: 10px;
  }
`;
const ButtonWrap = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const EventContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 54px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
  }
  @media (max-width: 375px) {
    flex-direction: column;
    gap: 30px;
  }
`;
const EventInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;
  }
  @media (max-width: 375px) {
    text-align: center;
    gap: 20px;
  }
`;
const EventInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 1024px) {
    padding: 0 50px;
  }
  @media (max-width: 375px) {
    padding: 0 20px;
  }
`;
const Event = styled.p`
  font-size: 32px;
  font-weight: 500;

  @media (max-width: 375px) {
    font-size: 16px;
  }
`;
const EventName = styled.p`
  font-size: 28px;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
  @media (max-width: 375px) {
    font-size: 20px;
  }
`;
const EventDate = styled.p`
  font-size: 20px;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    font-size: 16px;
  }
`;
const EventInfo = styled.p`
  font-size: 20px;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

const EventImgContainer = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;

  @media (max-width: 1024px) {
    display: flex;
    width: 724px;
  }
  @media (max-width: 375px) {
    display: flex;
    width: 335px;
  }
`;
const EventImgTrack = styled.div`
  display: flex;
  gap: 20px;
  transition: transform 0.5s ease;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 500}px)`};

  @media (max-width: 1024px) {
    gap: 0;
    transform: ${({ currentIndex }) => `translateX(-${currentIndex * 462}px)`};
  }
  @media (max-width: 375px) {
    gap: 0;
    transform: ${({ currentIndex }) => `translateX(-${currentIndex * 335}px)`};
  }
`;
const EventImg = styled.div`
  flex-shrink: 0;
  border-radius: 30px;
  overflow: hidden;
  transition: 0.4s;

  transform: ${({ active }) => (active ? "scale(1)" : "scale(0.9)")};
  img {
    width: 480px;
    display: block;
  }

  @media (max-width: 1024px) {
    width: 462px;
    img {
      width: 100%;
    }
  }
  @media (max-width: 375px) {
    width: 335px;
    img {
      width: 100%;
    }
  }
`;

const BtnWrap = styled.div`
  display: flex;
  gap: 60px;

  @media (max-width: 375px) {
    justify-content: center;
  }
`;

const LeftRightWrap = styled.div`
  display: flex;
  gap: 20px;
`;
const LeftBtn = styled.button`
  width: 50px;
  height: 50px;
  background-color: #fafafa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ad95d7;
    color: #0c0c0c;
    box-shadow: 0 0 8px #9b00ff;
  }
  &:active {
    background-color: #ad95d7;
    color: #0c0c0c;
    box-shadow: 0 0 16px #9b00ff;
  }

  transition: all 0.3s ease;
`;
const RightBtn = styled(LeftBtn)``;

export default function EventPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentEvent = AllEvent[currentIndex];

  const handleNext = () => {
    if (currentIndex < AllEvent.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <Section>
      <TacoBellEvent>TACO BELL's EVENT</TacoBellEvent>
      <EventContainer>
        <EventInfoContainer>
          <Event>타코벨의 각종 이벤트를 만나보세요</Event>
          <EventInfoWrap>
            <EventName>{currentEvent.name}</EventName>
            <EventDate>{currentEvent.date}</EventDate>
            <EventInfo>{currentEvent.info}</EventInfo>
          </EventInfoWrap>
          <BtnWrap>
            <LeftRightWrap>
              <LeftBtn onClick={handlePrev}>
                <img src={left} />
              </LeftBtn>
              <RightBtn onClick={handleNext}>
                <img src={right} />
              </RightBtn>
            </LeftRightWrap>
            <ButtonWrap>
              <Buttons />
            </ButtonWrap>
          </BtnWrap>
        </EventInfoContainer>
        <EventImgContainer>
          <EventImgTrack currentIndex={currentIndex}>
            {AllEvent.map((item, index) => (
              <EventImg key={item.id} active={index === currentIndex}>
                <img src={item.img} alt={item.name} />
              </EventImg>
            ))}
          </EventImgTrack>
        </EventImgContainer>
      </EventContainer>
    </Section>
  );
}
