import styled from "styled-components";

export const NavContainer = styled.div`
  padding: 0 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  a {
    font-size: 35px;
    font-weight: 500;
    color: ${({ isDark }) => (isDark ? "#ffffff" : "#17171B")};
    text-decoration: none;
  }
  span:hover {
    cursor: pointer;
  }
  svg {
    width: 22px;
    height: 22px;
  }
`;

export const darkStyles = {
  backgroundColor: "#17171B",
  color: "#ffffff",
};

export const lightStyles = {
  backgroundColor: "#ffffff",
  color: "#17171B",
};
