import React from 'react';
import { Text, Button, Image, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Recipe } from '../data';

interface Props {
    onGoBack: () => void,
    recipe: Recipe
}

const DetailPage = ({ onGoBack, recipe }: Props) => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} style={{ width: '100%' }}>
                <Text>{recipe.name}</Text>
                <Image source={{ uri: recipe.imageUrl }} style={{ width: Dimensions.get('screen').width * 0.7, height: 300 }} />
                <Text style={styles.textStyle}>Beskrivning</Text>
                <Text>{recipe.description}</Text>
                <Text style={styles.textStyle}>Ingredienser</Text>
                <Text>{recipe.ingredients}</Text>
                <Text style={styles.textStyle}>Gör så här</Text>
                <Text>{recipe.instructions}</Text>
                <Button title='Tillbaka' onPress={onGoBack} />
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