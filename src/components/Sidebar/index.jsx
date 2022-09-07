import React, { useContext, useState } from "react";

// context api
import { ThemeContext } from "../../context/darkMode";

// custom components
import { OpenerConta, StyledSidebar, SidItemsConta } from "./styles";
import { ArrowRightCircle } from "../../assets/icons/ArrowRightCircle";
import { ArrowLeftCircle } from "../../assets/icons/ArrowLeftCircle";

// dark mode styles
import { darkStyles, lightStyles } from "../Navbar/styles";

// sidebar items helper
import { items } from "./helper";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const { theme } = useContext(ThemeContext);
  return (
    <StyledSidebar isOpen={isOpen} style={theme ? darkStyles : lightStyles}>
      <OpenerConta>
        <span onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ArrowLeftCircle /> : <ArrowRightCircle />}
        </span>
      </OpenerConta>
      <SidItemsConta>
        {items.map((item) => (
          <SidebarItem key={item.id} item={item} open={isOpen} />
        ))}
      </SidItemsConta>
    </StyledSidebar>
  );
}
