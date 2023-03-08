import React from "react";
import { roundNum } from "../../utilities/roundNum";
import { getArrowImg } from "../../utilities/getArrowImg";
import { getClass } from "../../utilities/getClass";
import { getStatTitle } from "../../utilities/getStatTitle";
const StatCard = (props) => {
  const { data, percent, img, id } = props;

  const keys = Object.keys(data);
  const statKey = keys[1];
  const title = getStatTitle(statKey);
  const likes = roundNum(data[statKey]);
  const percentString = `${Math.abs(percent)}%`;
  const arrowImg = getArrowImg(percent);
  const arrowClass = getClass(percent);

  return (
    <div className="card" key={id}>
      <div className="container-title">
        <p className="stat-title">{title}</p>
        <img src={img} alt="" className="brand-img" />
      </div>

      <div className="container-stats">
        <p className="stat">{likes}</p>

        <div className="container-percent">
          <img src={arrowImg} alt="" className="arrow-img" />
          <p className={`percent ${arrowClass}`}>{percentString}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
