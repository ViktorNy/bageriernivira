import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface InstructionProp {
  text: string;
}

const CustomInstruction = ({ text }: InstructionProp) => {
  const { colors } = useTheme();
  return (
    <Text key={text} style={[styles.section, { color: colors.text }]}>{'\u2022' + " " + text}</Text>
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