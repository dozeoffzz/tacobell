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
`;

const TacoBellEvent = styled.h3`
  font-family: "bangers";
  font-size: 56px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
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
`;
const EventInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const EventInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 465px;
`;
const Event = styled.p`
  font-size: 32px;
  font-weight: 500;
`;
const EventName = styled.p`
  font-size: 28px;
  font-weight: 500;
`;
const EventDate = styled.p`
  font-size: 20px;
`;
const EventInfo = styled.p`
  font-size: 20px;
`;

const EventImgContainer = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
`;
const EventImgTrack = styled.div`
  display: flex;
  gap: 20px;
  transition: transform 0.5s ease;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 500}px)`};
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
`;

const BtnWrap = styled.div`
  display: flex;
  gap: 60px;
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
