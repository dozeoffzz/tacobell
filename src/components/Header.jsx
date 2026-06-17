import React from "react";
import tacobell from "../assets/icons/tacobell.svg";
import mypage from "../assets/icons/mypage.svg";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  background-color: #51436b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  border-radius: 15px;
  padding: 25px 100px;

  @media (max-width: 1024px) {
    padding: 25px 50px;
  }
  @media (max-width: 375px) {
    padding: 25px 20px;
  }
`;

const LogoContainer = styled(NavLink)`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TacobellLogo = styled.img`
  width: 225px;
  height: auto;

  @media (max-width: 375px) {
    width: 130px;
    height: auto;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fafafa;
  gap: 80px;
  font-weight: 600;
  font-size: 24px;

  @media (max-width: 1024px) {
    gap: 60px;
    font-size: 20px;
  }
  @media (max-width: 375px) {
    display: none;
    gap: 20px;
    font-size: 14px;
  }
`;

const MypageContainer = styled.div`
  width: 100%;
  max-width: 225px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 375px) {
    img {
      width: 16px;
    }
  }
`;

const NavContainerMobile = styled.div`
  display: none;
  justify-content: space-between;

  @media (max-width: 375px) {
    padding: 20px;
    display: flex;
    font-weight: 600;
    color: #51436b;
    font-size: 16px;
  }
`;

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <LogoContainer to={"/"}>
          <TacobellLogo src={tacobell} alt="tacobell" />
        </LogoContainer>
        <NavContainer>
          <NavLink to={"/story"}>Story</NavLink>
          <NavLink>Menu</NavLink>
          <NavLink>News&Events</NavLink>
          <NavLink>Store</NavLink>
          <NavLink>SNS</NavLink>
        </NavContainer>
        <MypageContainer>
          <NavLink>
            <img src={mypage} alt="mypage" />
          </NavLink>
        </MypageContainer>
      </HeaderContainer>
      <NavContainerMobile>
        <NavLink to={"/story"}>Story</NavLink>
        <NavLink>Menu</NavLink>
        <NavLink>News&Events</NavLink>
        <NavLink>Store</NavLink>
        <NavLink>SNS</NavLink>
      </NavContainerMobile>
    </>
  );
}
