import { DarkTheme, DefaultTheme, useTheme } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import Checkbox from "expo-checkbox";
import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

interface IngredientProp {
  text: string;
  speak: (text: string, counter?: number) => void;
}

const CustomCheckBox = ({ text, speak }: IngredientProp) => {
  const [checked, onChange] = useState(false);
  const { colors } = useTheme();
  return (

    <View key={text} style={styles.section}>
      <Checkbox color={'#6082B6'} value={checked} onValueChange={onChange} />
      <TouchableOpacity onPress={() => speak(text)}>
        <Text style={[checked ? styles.instructionStyleCrossed : styles.instructionStyle, { color: colors.text }]}>{text}</Text>
      </TouchableOpacity>
    </View >
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
  checkBox: {
    color: 'green'
  }
})

export default CustomCheckBox;