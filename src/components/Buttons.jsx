import styled from "@emotion/styled";
import React from "react";
import { NavLink } from "react-router-dom";
import right from "../assets/icons/right.svg";

const MoreInfo = styled(NavLink)`
  padding: 12px 32px;
  background-color: #fafafa;
  border-radius: 30px;
  /* width: 150px; */
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

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

  @media (max-width: 375px) {
    font-size: 14px;
    padding: 6px 28px;
    img {
      width: 14px;
    }
  }
`;

export default function Buttons() {
  return (
    <MoreInfo>
      더보기
      <img src={right} />
    </MoreInfo>
  );
}
