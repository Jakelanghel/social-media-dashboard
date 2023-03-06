import React from "react";
import { images } from "../../../constants/images";
import { StyledPlatformCards } from "./PlatformCards.Styled";
import { socialData } from "../../../data/socialData";

import Card from "./Card";

const PlatformCards = () => {
  const CardElements = socialData.platforms.map((plat) => {
    return (
      <Card
        key={plat.id}
        userName={socialData.username}
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
