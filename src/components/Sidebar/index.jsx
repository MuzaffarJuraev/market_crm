import React, { useContext, useState } from "react";

// context api
import { ThemeContext } from "../../context/darkMode";

// custom components
import { OpenerConta, StyledSidebar } from "./styles";
import { ArrowRightCircle } from "../../assets/icons/ArrowRightCircle";
import { ArrowLeftCircle } from "../../assets/icons/ArrowLeftCircle";

// dark mode styles
import { darkStyles, lightStyles } from "../Navbar/styles";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const { theme } = useContext(ThemeContext);
  return (
    <StyledSidebar isOpen={isOpen} style={theme ? darkStyles : lightStyles}>
      <OpenerConta>
        <span onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ArrowLeftCircle /> : <ArrowRightCircle />}
        </span>
      </OpenerConta>
    </StyledSidebar>
  );
}
