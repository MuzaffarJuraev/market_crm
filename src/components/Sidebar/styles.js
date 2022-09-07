import styled from "styled-components";

export const StyledSidebar = styled.div`
  width: ${({ isOpen }) => (isOpen ? "300px" : "50px")};
  height: 91.5vh;
  transition: width 0.5s;
  position: relative;
`;

export const OpenerConta = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const SidItemsConta = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const SideItem = styled.div`
  width: 100%;
  height: 30px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  cursor: pointer;
`;

export const Title = styled.span`
  display: ${({ open }) => (open ? "block" : "none")};
  padding-left: 20px;
  font-size: 25px;
  font-weight: 500px;
`;
