import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DarkMode from "./DarkMode";

interface InstructionProp {
  text: string;
}

const CustomInstruction = ({ text }: InstructionProp) => {
  let { themeContainerStyle } = DarkMode();
  return (
    <View key={text} style={styles.section}>

      <Text style={[themeContainerStyle]}>{'\u2022' + " " + text}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
});

export default CustomInstruction;
