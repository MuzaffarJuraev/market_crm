import React, { useReducer } from "react";
import { Link } from "react-router-dom";

// reducer
import { reducer, initialState } from "../../reducer/darkMode";
import { darkModeType } from "../../reducer/types";
// custom components
import { LightOff } from "./LightOff";
import { LightOn } from "./LightOn";
import { NavContainer } from "./styles";

// dark mode light mode styles
import { darkStyles, lightStyles } from "./styles";

export default function Navbar() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <NavContainer
      style={state.isDark ? darkStyles : lightStyles}
      isDark={state.isDark}
    >
      <Link to={"/"}>Market_CRM</Link>
      <span onClick={() => dispatch({ type: darkModeType.darkMode })}>
        {state.isDark ? <LightOff /> : <LightOn />}
      </span>
    </NavContainer>
  );
}
