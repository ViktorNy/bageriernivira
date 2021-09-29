import React from 'react';
import { Text, Button, Image, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Recipe } from '../data';
import * as Speech from 'expo-speech';

interface Props {
    onGoBack: (filter?: string) => void,
    recipe: Recipe,
    filter: string
}

const DetailPage = ({ onGoBack, recipe, filter }: Props) => {

    const speak = (textToSay: string, counter?: number) => {

        Speech.getAvailableVoicesAsync().then(voices => {
            if (voices.length > 0) {
                if (voices.findIndex(voice => voice.language === "sv-SE") >= 0) {
                    Speech.speak("Testar", { language: "sv-SE" });
                }
            }else{
                if(!counter || counter < 10)
                {
                    speak(textToSay,  (counter ?? 0) + 1)
                }
            }
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Button title='Tillbaka' onPress={() => onGoBack(filter)} />
            <ScrollView contentContainerStyle={styles.scrollViewContainer} style={{ width: '100%' }}>
                <Text>{recipe.name}</Text>
                <Image source={{ uri: recipe.imageUrl }} style={{ width: Dimensions.get('screen').width * 0.7, height: 300 }} />
                <Text style={styles.textStyle}>Beskrivning</Text>
                <Text>{recipe.description}</Text>
                <Text style={styles.textStyle}>Ingredienser</Text>
                <Text>{recipe.ingredients}</Text>
                <Text style={styles.textStyle}>Gör så här</Text>
                <Text>{recipe.instructions}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20,
        flexDirection: 'column'
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    scrollViewContainer: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    opacity: {
        backgroundColor: '#DDDDDD'
    },
    textStyle: {
        fontWeight: 'bold'
    }
});

export default DetailPage;