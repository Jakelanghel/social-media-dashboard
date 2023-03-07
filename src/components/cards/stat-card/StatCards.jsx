import React from "react";
import StatCard from "./StatCard";
import { StyledStatCards } from "./StatCards.Styled";

const StatCards = (props) => {
  const StatCardElements = [];
  props.data.platforms.forEach((platform) => {
    platform.analytics.forEach((stat) => {
      StatCardElements.push(
        <StatCard key={stat.id} data={stat} img={platform.img} />
      );
    });
  });
  return (
    <StyledStatCards>
      <h2>overview - today</h2>
      {StatCardElements}
    </StyledStatCards>
  );
};

export default StatCards;
