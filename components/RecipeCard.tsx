import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Recipe } from '../data';
import { RecipeStackListParams } from "../navigation/Navigator";

interface Props {
    recipe: Recipe,
    navigator: NativeStackNavigationProp<RecipeStackListParams, 'Home'>
}

const RecipeCard: FC<Props> = ({ recipe, navigator }: Props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigator.navigate('Detail', {recipe: recipe})}>
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
        paddingTop: 10,
        position: 'relative',
        alignContent: 'center',
        alignItems: 'center'
    },
    imageStretch: {
        minWidth: '95%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 1,
        overflow: "hidden",
        shadowColor: "black",
        elevation: 5,
    },
    nameStyle: {
        position: 'absolute',
        padding: 5,
        backgroundColor: 'rgba(255,255,255,0.7)',
        color: 'black',
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default RecipeCard;