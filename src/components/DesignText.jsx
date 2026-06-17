import React from "react";
import styled from "@emotion/styled";

const MarqueeWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 100px;

  @media (max-width: 1024px) {
    margin-bottom: 70px;
  }
  @media (max-width: 375px) {
    margin-bottom: 50px;
  }
`;

const MarqueeTrack = styled.div`
  display: inline-flex;
  animation: marquee 20s linear infinite;

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  margin: 0;
  padding-right: 100px;
  white-space: nowrap;
  font-weight: 900;
  color: #9b00ff;
  strong {
    margin: 0 20px;
    color: #ff8900;
  }
  font-family: "Shrikhand";

  @media (max-width: 1024px) {
    font-size: 20px;
    strong {
      font-size: 20px;
    }
  }
  @media (max-width: 375px) {
    font-size: 14px;
    strong {
      font-size: 14px;
    }
  }
`;
export default function DesignText() {
  return (
    <MarqueeWrapper>
      <MarqueeTrack>
        <Text>
          TACO BELL TACO BELL <strong>"LIFE IS MORE FUN WHEN YOU SHAKE UP THE ORDINARY."</strong> TACO BELL TACO BELL
        </Text>
        <Text>
          TACO BELL TACO BELL <strong>"LIFE IS MORE FUN WHEN YOU SHAKE UP THE ORDINARY."</strong> TACO BELL TACO BELL
        </Text>
      </MarqueeTrack>
    </MarqueeWrapper>
  );
}
