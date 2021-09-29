import React, { useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomCheckBox from "../components/CustomCheckBox";
import CustomInstruction from "../components/CustomInstruction";
import { Recipe } from "../data";

interface Props {
    onGoBack: (filter?: string) => void,
    recipe: Recipe,
    filter: string
}

const DetailPage = ({ onGoBack, recipe, filter }: Props) => {

  return (    

    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        style={{ width: "100%" }}
      >
        <Text>{recipe.name}</Text>
        <Image
          source={{ uri: recipe.imageUrl }}
          style={{ width: Dimensions.get("screen").width * 0.7, height: 300 }}
        />
        <Text style={styles.textStyle}>Beskrivning</Text>
        <Text>{recipe.description}</Text>
        <Text style={styles.textStyle}>Ingredienser</Text>
        <View  style={styles.ingredientInstructionContainer}>
          {recipe.ingredients.map((item) => (
            <CustomInstruction key={item} text={item} />
          ))}
        </View>
        <Text style={styles.textStyle}>Gör så här</Text>
        <View style={styles.ingredientInstructionContainer}>
          {recipe.instructions.map((item) => (
            <CustomCheckBox key={item} text={item} />
          ))}
        </View>
        
        {/* <Text>{recipe.instructions}</Text> */}
        <Button title="Tillbaka" onPress={onGoBack} />
      </ScrollView>
    </SafeAreaView>

            
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    flexDirection: "column",
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  scrollViewContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  opacity: {
    backgroundColor: "#DDDDDD",
  },
  textStyle: {
    fontWeight: "bold",
  },
  Checkbox: {
    margin: 1,
  },
  ingredientInstructionContainer: {
    display: "flex",
    textAlign: "center",
    // marginLeft: 10,
  },
});

export default DetailPage;
