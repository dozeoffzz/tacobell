import styled from "@emotion/styled";
import React from "react";
import { AllMenu } from "../apis/menu";
import { NavLink } from "react-router-dom";

const Section = styled.section`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #8c73b7;
  border-radius: 30px;
`;

const TacoBellMenu = styled.h3`
  font-family: "bangers";
  font-size: 56px;
  margin-bottom: 50px;
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const CategoryBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  border-radius: 30px 30px 0 0;
  background-color: #ad95d7;
  min-width: 150px;
  font-size: 20px;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuTrack = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: #ad95d7;
  border-radius: 30px;
  overflow: hidden;
  width: 1920px;
`;

const MenuCard = styled.div`
  padding: 20px;
  border: 1px solid #fafafa;
  border-radius: 30px;
`;

const MenuImgContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 10px;
  /* width: 100%; */
  width: 415px;
  height: 340px;
  background-color: #fafafa20;
  box-shadow: 4px 4px 4px #0c0c0c25;
  border-radius: 30px;
`;

const MenuAllInfo = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MenuNamePrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuNameText = styled.h3`
  font-size: 28px;
  color: #9b00ff;
`;
const MenuPriceText = styled.p`
  font-size: 28px;
  color: #9b00ff;
`;

const MenuInfoText = styled.p`
  text-align: left;
  font-size: 16px;
`;
const MenuMoreView = styled(NavLink)`
  padding: 12px 50px;
  background-color: #ad95d7;
  width: 500px;
  border-radius: 0 0 50px 50px;
  font-size: 20px;
`;

export default function MenuPage() {
  return (
    <Section>
      <TacoBellMenu>TACO BELL's MENU</TacoBellMenu>
      <CategoryContainer>
        <CategoryBtn>전체</CategoryBtn>
        <CategoryBtn>타코</CategoryBtn>
        <CategoryBtn>보울</CategoryBtn>
        <CategoryBtn>브리또</CategoryBtn>
        <CategoryBtn>크런치랩,퀘사디아</CategoryBtn>
      </CategoryContainer>
      <MenuContainer>
        <MenuTrack>
          {AllMenu.map((item) => (
            <NavLink>
              <MenuCard key={item.id}>
                <MenuImgContainer>
                  <img src={item.img} />
                </MenuImgContainer>
                <MenuAllInfo>
                  <MenuNamePrice>
                    <MenuNameText>{item.name}</MenuNameText>
                    <MenuPriceText>{item.price}</MenuPriceText>
                  </MenuNamePrice>
                  <MenuInfoText>{item.info}</MenuInfoText>
                </MenuAllInfo>
              </MenuCard>
            </NavLink>
          ))}
        </MenuTrack>
        <MenuMoreView>메뉴 자세히 보기</MenuMoreView>
      </MenuContainer>
    </Section>
  );
}
