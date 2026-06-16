import React, { useState } from "react";
import DesignText from "../components/DesignText";
import styled from "@emotion/styled";
import aboutbanner from "../assets/imgs/aboutbanner.webp";
import tacobellabout from "../assets/imgs/tacobellabout.webp";
import { Historys } from "../apis/history";
import TACOBELL from "../assets/imgs/TACOBELL.png";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;
const Banner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AboutUs = styled.h2`
  position: absolute;
  font-family: "bangers";
  color: #fafafa;
  font-size: 200px;
  text-shadow: 0 12px 4px #8c73b7;
`;

const AboutContainer = styled.div`
  padding: 0 100px;
  margin-bottom: 160px;
`;

const AboutWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainText = styled.h3`
  padding: 0 100px;
  font-size: 58px;
  margin-bottom: 40px;
`;

const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
`;
const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: #8c73b7;
`;
const InfoText = styled.p`
  font-size: 20px;
`;

const AboutHistroy = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  text-align: center;
`;
const AboutHistoryWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HistoryContainer = styled.div`
  margin-bottom: 80px;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const HistoryLeftWrap = styled.div`
  width: 848px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const HistoryMainText = styled.h3`
  font-size: 56px;
`;
const HistorySubText = styled.p`
  font-size: 36px;
`;
const HistoryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  width: 100%;
  max-width: 830px;
`;
const HistoryInfoWrap = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #444444;
  cursor: pointer;
`;
const HistoryDate = styled.p`
  font-size: 56px;
  color: #8c73b7;
  font-weight: 600;
`;
const HistoryInfo = styled.p`
  font-size: 20px;
`;
const DesignTacoBell = styled.h1`
  padding: 0 100px;
  text-align: center;
`;

export default function StoryPage() {
  const [selectedHistory, setSelectedHistory] = useState(Historys[0]);
  return (
    <Section>
      <Banner>
        <img src={aboutbanner} />
        <AboutUs>ABOUT US</AboutUs>
      </Banner>
      <DesignText />
      <MainText>타코벨의 이야기</MainText>
      <AboutContainer>
        <AboutWrap>
          <img src={tacobellabout} />
          <AboutTextContainer>
            <TextContainer>
              <TextWrap>
                <TitleText>
                  음식을 통해
                  <br /> 문화를 만든다.
                </TitleText>
                <InfoText>
                  1962년, 미국 캘리포니아에서
                  <br /> 타코벨은 탄생했습니다.
                  <br /> 멕시칸 스타일의 맛을 누구나
                  <br /> 즐길 수 있도록 새롭게 해석하며,
                  <br /> 전 세계인의 사랑을 받는
                  <br /> 글로벌 브랜드로 성장했습니다.
                </InfoText>
              </TextWrap>
              <TextWrap>
                <TitleText>
                  새로운 맛의
                  <br /> 경험을 향한 도전
                </TitleText>
                <InfoText>
                  우리는 항상 새로움을
                  <br /> 두려워하지 않습니다.
                  <br /> 익숙한 재료에 아이디어를
                  <br /> 더해, 예상을 뛰어넘는 맛과
                  <br />
                  즐거움을 고객에게
                  <br /> 전하고 있습니다.
                </InfoText>
              </TextWrap>
              <TextWrap>
                <TitleText>
                  최고의 재료로
                  <br /> 완성하는 타코벨의 맛
                </TitleText>
                <InfoText>
                  신선한 재료와 레시피로
                  <br />
                  타코벨만의 맛을 완성합니다.
                  <br />
                  좋은 재료의 가치를 믿고,
                  <br /> 정성을 담아 메뉴를 만들며,
                  <br />
                  새로운 맛의 즐거움을 전하고,
                  <br />
                  최고의 경험을 선사합니다.
                </InfoText>
              </TextWrap>
            </TextContainer>
            <AboutHistroy>
              <AboutHistoryWrap>
                <TitleText>1962</TitleText>
                <InfoText>브랜드 탄생</InfoText>
              </AboutHistoryWrap>
              <AboutHistoryWrap>
                <TitleText>60 +</TitleText>
                <InfoText>브랜드 역사</InfoText>
              </AboutHistoryWrap>
              <AboutHistoryWrap>
                <TitleText>7000 +</TitleText>
                <InfoText>전 세계 매장 수</InfoText>
              </AboutHistoryWrap>
              <AboutHistoryWrap>
                <TitleText>1,000,000 +</TitleText>
                <InfoText>하루 고객 수</InfoText>
              </AboutHistoryWrap>
            </AboutHistroy>
          </AboutTextContainer>
        </AboutWrap>
      </AboutContainer>
      <HistoryContainer>
        <HistoryLeftWrap>
          <HistoryMainText>
            한 개의 타코에서 시작된 변화,
            <br />
            그리고 세계로 이어진 여정.
          </HistoryMainText>
          <HistorySubText>
            하나의 작은 타코 스탠드에서 시작된 타코벨은,
            <br /> 수많은 혁신과 도전을 거쳐 세계적인 브랜드로 성장했습니다.
          </HistorySubText>
          <div>
            <img src={selectedHistory.img} alt={selectedHistory.date} />
          </div>
        </HistoryLeftWrap>
        <HistoryInfoContainer>
          {[...Historys].reverse().map((item) => (
            <HistoryInfoWrap key={item.id} onClick={() => setSelectedHistory(item)}>
              <HistoryDate>{item.date}</HistoryDate>
              <HistoryInfo> {selectedHistory.id === item.id && <HistoryInfo>{item.info}</HistoryInfo>}</HistoryInfo>
            </HistoryInfoWrap>
          ))}
        </HistoryInfoContainer>
      </HistoryContainer>
      <DesignTacoBell>
        <img src={TACOBELL} alt="TACOBELL" />
      </DesignTacoBell>
    </Section>
  );
}
