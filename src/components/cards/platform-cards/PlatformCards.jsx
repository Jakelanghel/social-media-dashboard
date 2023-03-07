import React from "react";
import { images } from "../../../constants/images";
import { StyledPlatformCards } from "./PlatformCards.Styled";

import PlatformCard from "./PlatformCard";

const PlatformCards = (props) => {
  const CardElements = props.data.platforms.map((plat) => {
    return (
      <PlatformCard
        key={plat.id}
        userName={props.data.username}
        img={plat.img}
        brand={plat.brand}
        followers={plat.followers}
        today={plat.today}
      />
    );
  });
  return <StyledPlatformCards>{CardElements}</StyledPlatformCards>;
};

export default PlatformCards;
