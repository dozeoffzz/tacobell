import styled from "@emotion/styled";
import React, { useState } from "react";
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

  background-color: ${({ active }) => (active ? "#fafafa" : "#ad95d7")};

  transition: 0.3s;

  &:hover {
    background-color: #fafafa;
    color: #0c0c0c;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const MenuViewport = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  background-color: #ad95d7;
`;

const MenuTrack = styled.div`
  padding: 50px 0;
  display: flex;
  gap: 20px;
  /* overflow: hidden; */
  /* transition: transform 0.5s ease; */
  width: max-content;

  animation: marquee 50s linear infinite;

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-50% - 10px));
    }
  }
  &:hover {
    animation-play-state: paused;
  }
`;

const MenuImgContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 10px;
  width: 415px;
  height: 340px;
  background-color: #fafafa20;
  box-shadow: 4px 4px 4px #0c0c0c25;
  border-radius: 30px;
  transition: 0.3s;
`;
const MenuCard = styled.div`
  padding: 20px;
  border: 1px solid #fafafa;
  border-radius: 30px;
  width: 455px;
  flex-shrink: 0;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background-color: #fafafa;
  }
  &:hover .menu-img-container {
    background-color: #ad95d7;
  }
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
  font-family: "Jua";
`;
const MenuPriceText = styled.p`
  font-size: 28px;
  color: #9b00ff;
  font-family: "Jua";
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

  &:hover {
    background-color: #fafafa;
    color: #0c0c0c;
  }
  &:active {
    background-color: #fafafa;
    color: #0c0c0c;
    box-shadow: 0 0 16px #9b00ff;
  }

  transition: all 0.3s ease;
`;

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const categories = ["전체", "타코", "보울", "브리또", "크런치랩,퀘사디아"];

  const filteredMenu =
    selectedCategory === "전체" ? AllMenu : AllMenu.filter((item) => item.category === selectedCategory);

  const duplicatedMenu = [...filteredMenu, ...filteredMenu, ...filteredMenu, ...filteredMenu];
  return (
    <Section>
      <TacoBellMenu>TACO BELL's MENU</TacoBellMenu>
      <CategoryContainer>
        {categories.map((category) => (
          <CategoryBtn
            key={category}
            active={selectedCategory === category}
            onClick={() => {
              setSelectedCategory(category);
            }}
          >
            {category}
          </CategoryBtn>
        ))}
      </CategoryContainer>
      <MenuContainer>
        <MenuViewport>
          <MenuTrack>
            {duplicatedMenu.map((item, index) => (
              <MenuCard key={`${item.id}-${index}`}>
                <MenuImgContainer className="menu-img-container">
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
            ))}
          </MenuTrack>
        </MenuViewport>
        <MenuMoreView>메뉴 자세히 보기</MenuMoreView>
      </MenuContainer>
    </Section>
  );
}
