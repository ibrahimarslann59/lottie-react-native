import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const getWidth = (percent) => {
  return (width * percent) / 100;
};

export const getHeight = (percent) => {
  return (height * percent) / 100;
};
