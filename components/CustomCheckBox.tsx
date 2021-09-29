import { BlurView } from "expo-blur";
import Checkbox from "expo-checkbox";
import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native";

interface IngredientProp {
  text: string;
}

const CustomCheckBox = ({ text }: IngredientProp) => {
  const [checked, onChange] = useState(false);

  return (

    <View key={text} style={styles.section}>
      <Checkbox value={checked} onValueChange={onChange} />
      <Text style={checked ? styles.instructionStyleCrossed : styles.instructionStyle}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    marginRight: 50,
    maxWidth: "80%"
  }, instructionStyle: {
    textDecorationLine: 'none'
  },
  instructionStyleCrossed: {
    textDecorationLine: 'line-through'
  },
})

export default CustomCheckBox;