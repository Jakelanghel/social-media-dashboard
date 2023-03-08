import React from "react";
import StatCard from "./StatCard";
import { StyledStatCards } from "./StatCards.Styled";

const StatCards = (props) => {
  const StatCardElements = [];
  props.data.platforms.forEach((platform) => {
    platform.analytics.forEach((stat) => {
      StatCardElements.push(
        <StatCard
          key={stat.id}
          data={stat}
          id={stat.id}
          img={platform.img}
          percent={stat.percent}
        />
      );
    });
  });
  return (
    <StyledStatCards>
      <h2>overview - today</h2>
      <div className="container-stat-elements">{StatCardElements}</div>
    </StyledStatCards>
  );
};

export default StatCards;
