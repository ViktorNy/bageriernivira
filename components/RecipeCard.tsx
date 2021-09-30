import React, { FC } from "react";
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from "react-native";
import { Recipe } from '../data'

interface Props {
    recipe: Recipe,
    onSetPage: (page: string, recipe: Recipe) => void
}

const RecipeCard: FC<Props> = ({ recipe, onSetPage }: Props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onSetPage('details', recipe)}>
                <ImageBackground style={styles.imageStretch} source={{ uri: recipe.imageUrl }}>
                    <Text style={styles.nameStyle}>{recipe.name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 50,
        position: 'relative',
        alignContent: 'center',
        alignItems: 'center'
    },
    imageStretch: {
        minWidth: '95%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10 / 2,
        overflow: "hidden",
        borderColor: 'gray',
        borderWidth: 2,
        shadowColor: "black",
        elevation: 5,
    },
    nameStyle: {
        position: 'absolute',
        padding: 8,
        backgroundColor: 'rgba(255,255,255,0.7)',
        color: 'black',
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default RecipeCard;