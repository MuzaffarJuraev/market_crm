import React from "react";
import styled from "styled-components";

const StyledSidebar = styled.div`
  width: 300px;
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <h1>Sidebar</h1>
    </StyledSidebar>
  );
}
