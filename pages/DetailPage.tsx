import * as Speech from 'expo-speech';
import React from "react";
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomCheckBox from "../components/CustomCheckBox";
import CustomInstruction from "../components/CustomInstruction";
import { RecipeStackScreenProx } from "../navigation/Navigator";

const DetailPage = ({ navigation, route }: RecipeStackScreenProx<'Detail'>) => {
    navigation.setOptions({ title: route.params.recipe.name }); // Fråga Davey Jones

    const speak = (textToSay: string, counter?: number) => {
        Speech.getAvailableVoicesAsync().then(voices => {
            if (voices.length > 0) {
                if (voices.findIndex(voice => voice.language === "sv-SE") >= 0) {
                    Speech.speak(textToSay, { language: "sv-SE" });
                }
            } else {
                if (!counter || counter < 10) {
                    speak(textToSay, (counter ?? 0) + 1)
                }
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
                    style={{ width: Dimensions.get("screen").width * 0.7, height: 300 }}
                />
                <Text style={styles.textStyle}>Beskrivning</Text>
                <Text>{route.params.recipe.description}</Text>
                <Text style={styles.textStyle}>Ingredienser</Text>
                <View style={styles.ingredientInstructionContainer}>
                    {route.params.recipe.ingredients.map((item) => (
                        <CustomInstruction key={item} text={item} />
                    ))}
                </View>
                <Text style={styles.textStyle}>Gör så här</Text>
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
