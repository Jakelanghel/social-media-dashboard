import React from "react";
import { images } from "../../../constants/images";

const StatCard = (props) => {
  // Get keys of stat Obj
  const keys = Object.keys(props.data);
  const statKey = keys[1];
  // Create an array from the key of each stat
  let arr = Array.from(statKey);
  let title = "";
  // loop over each char in title looking for capital letter indicating a space is needed
  arr.forEach((char) => {
    char === char.toLowerCase() ? (title += char) : (title += " " + char);
  });
  let likes = props.data[statKey].toString();
  likes = likes.length <= 4 ? likes : `${likes.slice(0, 2)}k`;

  const percentString = `${Math.abs(props.data.percent)}%`;

  const arrowImg = props.data.percent > 0 ? images.upIcon : images.downIcon;
  const arrowClass = props.data.percent > 0 ? "up" : "down";

  return (
    <div className="card" key={props.id}>
      <div className="container-title">
        <p className="stat-title">{title}</p>
        <img src={props.img} alt="" className="brand-img" />
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
