import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface InstructionProp {
  text: string;
}

const CustomInstruction = ({ text }: InstructionProp) => {
  const { colors } = useTheme();
  return (
    <View key={text} style={styles.section}>
      <Text style={{ color: colors.text }}>{'\u2022' + " " + text}</Text>
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