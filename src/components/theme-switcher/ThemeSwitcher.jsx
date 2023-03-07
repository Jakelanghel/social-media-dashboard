import React from "react";
import { StyledThemeSwitcher } from "./StyledThemeSwitcher";

const ThemeSwitcher = (props) => {
  const mode = props.isDark ? "Dark Mode" : "Light Mode";

  const handleClick = () => {
    props.setIsDark((oldState) => !oldState);
  };
  return (
    <StyledThemeSwitcher>
      <p className="mode">{mode}</p>
      <div className="container-slider" onClick={handleClick}>
        <div className={props.isDark ? "slider" : "slider light-mode"}></div>
      </div>
    </StyledThemeSwitcher>
  );
};

export default ThemeSwitcher;
