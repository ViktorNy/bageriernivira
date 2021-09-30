import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { View, StyleSheet, Text, ImageBackground, Button, TouchableOpacity } from "react-native";
import { Recipe } from '../data'
import { RecipeStackListParams, RecipeStackScreenProx } from "../navigation/Navigator";

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
        position: 'relative'
    },
    imageStretch: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    },
    nameStyle: {
        position: 'absolute',
        paddingLeft: 10,
        backgroundColor: 'rgba(255,255,255,0.7)',
        color: 'black'
    }
})

export default RecipeCard;