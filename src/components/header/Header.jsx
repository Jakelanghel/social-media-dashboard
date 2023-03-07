import React from "react";
import { StyledHeader } from "./Header.Styled";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";

const Header = (props) => {
  return (
    <StyledHeader>
      <div className="container-title">
        <h1>social media dashboard</h1>
        <h2>
          total followers: <span>{23004}</span>
        </h2>
      </div>

      <ThemeSwitcher isDark={props.isDark} setIsDark={props.setIsDark} />
    </StyledHeader>
  );
};

export default Header;
