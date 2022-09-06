import React, { useContext } from "react";
import { Link } from "react-router-dom";

// context api
import { ThemeContext } from "../../context/darkMode";

import { LightOff } from "../../assets/icons/LightOff";
import { LightOn } from "../../assets/icons/LightOn";
import { NavContainer } from "./styles";

// dark mode light mode styles
import { darkStyles, lightStyles } from "./styles";

export default function Navbar() {
  const { theme } = useContext(ThemeContext);
  return (
    <NavContainer style={theme ? darkStyles : lightStyles} isDark={theme}>
      <Link to={"/"}>Market_CRM</Link>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <span
            onClick={() => {
              changeTheme(!theme);
            }}
          >
            {theme ? <LightOff /> : <LightOn />}
          </span>
        )}
      </ThemeContext.Consumer>
    </NavContainer>
  );
}
