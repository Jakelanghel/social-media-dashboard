import React from "react";
import { StyledHeader } from "./Header.Styled";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";
import { getTotalFollowers } from "../utilities/getTotalFollowers";

const Header = (props) => {
  const total = getTotalFollowers(props.data).toLocaleString();
  return (
    <StyledHeader>
      <div className="container-title">
        <h1>social media dashboard</h1>
        <h2>
          total followers: <span>{total}</span>
        </h2>
      </div>

      <ThemeSwitcher isDark={props.isDark} setIsDark={props.setIsDark} />
    </StyledHeader>
  );
};

export default Header;
