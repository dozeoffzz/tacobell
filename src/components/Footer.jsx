import React from "react";
import tacobell from "../assets/icons/tacobell.svg";
import instagram from "../assets/icons/instagram.svg";
import kakaotalk from "../assets/icons/kakaotalk.svg";
import facebook from "../assets/icons/facebook.svg";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const FooterContainer = styled.footer`
  background-color: #51436b;
  display: flex;
  justify-content: space-between;
  padding: 50px 100px;
  margin: 5px;
  border-radius: 15px;
  color: #fafafa;
  font-size: 14px;
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const FooterLeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SnsContainer = styled.div`
  padding: 0 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const FooterRight = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const FooterLaw = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLeft>
        <FooterLeftWrap>
          <img src={tacobell} alt="tacobell" />
          <p>캘리스코 고객센터 : 1833 - 4550</p>
          <p>(평일 08:30 ~ 17:30, 공휴일 후무)</p>
        </FooterLeftWrap>
        <SnsContainer>
          <NavLink>
            <img src={instagram} alt="instagram" />
          </NavLink>
          <NavLink>
            <img src={kakaotalk} alt="kakaotalk" />
          </NavLink>
          <NavLink>
            <img src={facebook} alt="facebook" />
          </NavLink>
        </SnsContainer>
      </FooterLeft>
      <FooterRight>
        <div>
          <p>서울시 서울구 서울로 000 2층 (우)xxxxx</p>
          <p>사업자등록번호 xxx-xx-xxxxx | 대표이사 홍길동</p>
        </div>
        <div>
          <p>제휴 및 콜라보 제안 dozeoffzz247@gmail.com</p>
          <p>입접제안 dozeoffzz247@gmail.com</p>
        </div>
        <p>COPYRIGHT ⓒ 2026 CHOIWONHEE. ALL RIGHTS RESERVED. </p>
        <FooterLaw>
          <p>이용약관</p>
          <p>개인정보처리방침</p>
        </FooterLaw>
      </FooterRight>
    </FooterContainer>
  );
}
