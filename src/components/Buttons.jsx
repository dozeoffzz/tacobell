import styled from "@emotion/styled";
import React from "react";
import { NavLink } from "react-router-dom";

const MoreInfo = styled(NavLink)`
  padding: 12px 32px;
  background-color: #fafafa;
  border-radius: 30px;
  width: 150px;
  font-size: 20px;

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

export default function Buttons() {
  return <MoreInfo>더보기</MoreInfo>;
}
