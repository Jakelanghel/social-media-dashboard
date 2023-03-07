import React from "react";
import { roundNum } from "../../utilities/roundNum";
import { getArrowImg } from "../../utilities/getArrowImg";
import { getClass } from "../../utilities/getClass";

const PlatformCard = (props) => {
  const { userName, img, brand, followers, today } = props;

  const arrowImg = getArrowImg(today);
  const todayClass = getClass(today);
  const todayString = `${Math.abs(today)} Today`;
  const totalFollowers = roundNum(followers);
  const followersString = brand === "youtube" ? "subscribers" : "followers";

  return (
    <div className="card">
      <div className={`accent ${brand}`}></div>
      <div className="container-profile">
        <img src={img} alt={brand} className="brand-img" />
        <p className="user-name">@{userName}</p>
      </div>

      <div className="container-followers">
        <p className="followers-total">{totalFollowers}</p>
        <p className="followers-title">{followersString}</p>
      </div>

      <div className="container-daily">
        <img src={arrowImg} alt="" className="arrow-img" />
        <p className={`daily ${todayClass}`}>{todayString}</p>
      </div>
    </div>
  );
};

export default PlatformCard;
