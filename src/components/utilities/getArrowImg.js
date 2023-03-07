import { images } from "../../constants/images";

export const getArrowImg = (num) => {
  return num > 0 ? images.upIcon : images.downIcon;
};
