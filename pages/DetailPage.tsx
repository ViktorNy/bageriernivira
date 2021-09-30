import React from 'react';
import { Text, Button, Image, Dimensions, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import DarkMode from '../components/DarkMode';
import { Recipe } from '../data';

interface Props {
    onGoBack: () => void,
    recipe: Recipe
}

const DetailPage = ({ onGoBack, recipe }: Props) => {
    let themeTextStyle = DarkMode();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} style={{ width: '100%' }}>
                <Text style={[styles.textStyle, themeTextStyle]}>{recipe.name}</Text>
                <Image source={{ uri: recipe.imageUrl }} style={styles.imageStyle} />
                <Text style={[styles.textStyle, themeTextStyle]}>Beskrivning</Text>
                <Text style={[themeTextStyle]}>{recipe.description}</Text>
                <Text style={[styles.textStyle, themeTextStyle]}>Ingredienser</Text>
                <Text style={[themeTextStyle]}>{recipe.ingredients}</Text>
                <Text style={[styles.textStyle, themeTextStyle]}>Gör så här</Text>
                <Text style={[themeTextStyle]}>{recipe.instructions}</Text>
                <Button title='Tillbaka' onPress={onGoBack} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5,
    },
    imageStyle: {
        width: Dimensions.get('screen').width * 0.8,
        height: Dimensions.get('screen').height * 0.4,
        borderRadius: 5 / 2,
        overflow: "hidden",
        borderColor: 'gray',
        borderWidth: 2,
    }
});

export default DetailPage;