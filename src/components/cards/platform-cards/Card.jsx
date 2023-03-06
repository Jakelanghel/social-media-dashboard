import React from "react";
import { images } from "../../../constants/images";

const Card = (props) => {
  const { userName, img, brand, followers, today } = props;

  const arrowImg = props.today > 0 ? images.upIcon : images.downIcon;
  const todayString = `${Math.abs(today)} Today`;

  return (
    <div className="card">
      <div className={`accent ${brand}`}></div>
      <div className="container-profile">
        <img src={img} alt={brand} />
        <p className="user-name">@{userName}</p>
      </div>

      <div className="container-followers">
        <p className="followers-total">{followers}</p>
        <p className="followers-title">followers</p>
      </div>

      <div className="container-daily">
        <img src={arrowImg} alt="" className="arrow-img" />
        <p className="daily">{todayString}</p>
      </div>
    </div>
  );
};

export default Card;
