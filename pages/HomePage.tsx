import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Recipe, recipeArray } from '../data';
import RecipeCard from '../components/RecipeCard'


interface Props {
    onSetPage: (page: string, recipe: Recipe) => void;
}

const HomePage = ({ onSetPage }: Props) => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} style={{ width: '100%' }}>
                {recipeArray.map((recipe) => (
                    <RecipeCard onSetPage={onSetPage} recipe={recipe} key={recipe.id} />
                ))}
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
        flexDirection: 'column',
    },
    scrollViewContainer: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    }
});

export default HomePage