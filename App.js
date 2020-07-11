import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import LottieView from "lottie-react-native";
import { getHeight } from "./style/Dimension";
import success from "./assets/json/success.json";
import finger from "./assets/json/finger-clicking.json";
import { STATUS } from "./config";

function App() {
  const [status, setStatus] = useState(STATUS.LOADING);

  const changeStatus = () => {
    setStatus(status === STATUS.LOADING ? STATUS.SUCCESS : STATUS.LOADING);
  };

  return (
    <View style={generalStyle}>
      <View style={textContainer}>
        <Text style={textStyle}>lottie-react-native Training</Text>
      </View>
      <LottieView
        source={status === STATUS.SUCCESS ? success : finger}
        autoPlay
        loop
        speed={1}
        style={animationSize}
      />
      <View style={buttonStyle}>
        <Button title="Change" onPress={() => changeStatus()} />
      </View>
    </View>
  );
}

const generalStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};

const animationSize = {
  height: getHeight(30),
  marginTop: 15,
};
const buttonStyle = {
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 60,
};

const textStyle = {
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: 24,
  lineHeight: 28,
  color: "#0F1337",
};

const textContainer = {
  marginLeft: "auto",
  marginRight: "auto",
};

export default App;
