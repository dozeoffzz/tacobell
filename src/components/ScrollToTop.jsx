import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Button = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 9999;

  width: 60px;
  height: 60px;

  border-radius: 50%;
  border: none;
  color: #0c0c0c;

  cursor: pointer;

  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? "auto" : "none")};

  transition: all 0.3s ease;
  background-color: #fafafa;
  box-shadow: 4px 4px 8px #0c0c0c50;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 375px) {
    width: 50px;
    height: 50px;
    right: 20px;
    bottom: 10px;
  }
`;

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const moveTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button visible={visible} onClick={moveTop}>
      ↑
    </Button>
  );
}
