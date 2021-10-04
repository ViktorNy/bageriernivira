import { useTheme } from '@react-navigation/native';
import * as Speech from 'expo-speech';
import React, { useEffect } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomCheckBox from "../components/CustomCheckBox";
import CustomInstruction from "../components/CustomInstruction";
import { RecipeStackScreenProx } from "../navigation/Navigator";

const DetailPage = ({ navigation, route }: RecipeStackScreenProx<'Detail'>) => {
    const { colors } = useTheme();

    useEffect(() => {
        Speech.getAvailableVoicesAsync();
        navigation.setOptions({ title: route.params.recipe.name });
    }, [])
    //Speeech måste kallas två gånger, annars fungerar en inte

    const speak = (textToSay: string, counter?: number) => {
        Speech.getAvailableVoicesAsync().then(voices => {
            if (voices.findIndex(voice => voice.language === "sv-SE") >= 0) {
                Speech.speak(textToSay, { language: "sv-SE" });
            }
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollViewContainer}
                style={{ width: "100%" }}
            >
                <Image
                    source={{ uri: route.params.recipe.imageUrl }}
                    style={{ width: Dimensions.get("screen").width * 0.7, height: 300, margin: 10 }}
                />
                <Text style={[{ color: colors.text }, styles.textStyle]}>Beskrivning</Text>
                <Text style={{ color: colors.text }}>{route.params.recipe.description}</Text>
                <Text style={[{ color: colors.text }, styles.textStyle]}>Ingredienser</Text>
                <View style={styles.ingredientInstructionContainer}>
                    {route.params.recipe.ingredients.map((item) => (
                        <CustomInstruction key={item} text={item} />
                    ))}
                </View>
                <Text style={[{ color: colors.text }, styles.textStyle]}>Gör så här</Text>
                <View style={styles.ingredientInstructionContainer}>
                    {route.params.recipe.instructions.map((item) => (
                        <CustomCheckBox key={item} text={item} speak={speak} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
    },
    scrollViewContainer: {
        display: "flex",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
    },
    textStyle: {
        fontWeight: "bold",
        fontSize: 16
    },
    ingredientInstructionContainer: {
        display: "flex",
        textAlign: "center",
    },
});

export default DetailPage;