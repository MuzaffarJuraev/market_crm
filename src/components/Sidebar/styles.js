import styled from "styled-components";

export const StyledSidebar = styled.div`
  width: ${({ isOpen }) => (isOpen ? "300px" : "50px")};
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
