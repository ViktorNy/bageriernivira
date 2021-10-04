import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { recipeArray } from '../data';
import { SafeAreaView } from 'react-native-safe-area-context';
import RecipeCard from '../components/RecipeCard'
import { RecipeStackScreenProx } from '../navigation/Navigator';

const HomePage = ({ navigation, route }: RecipeStackScreenProx<'Home'>) => {
    const [clonedRecipeArray, setClonedRecipeArray] = useState(recipeArray);

    useEffect(() => {
        if (route.params.filter === 'all' || !route.params.filter) {
            setClonedRecipeArray(recipeArray);

        }
        else {
            setClonedRecipeArray(recipeArray.filter((recipe) => recipe.category === route.params.filter));
        }
    }, [route.params.filter]);


    return (
        <SafeAreaView style={[styles.container]}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} style={{ width: '100%' }}>
                {clonedRecipeArray.map((recipe) => (
                    <RecipeCard navigator={navigation} recipe={recipe} key={recipe.id} />
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
        flexDirection: 'column',
    },
    scrollViewContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: 10
    },
});

export default HomePage