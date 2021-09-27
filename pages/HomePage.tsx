import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';
import { Recipe, recipeArray } from '../data';
import { SafeAreaView } from 'react-native-safe-area-context';
import RecipeCard from '../components/RecipeCard'


interface Props {
    onSetDetailPage: (page: string, recipe: Recipe) => void;
    onSetPage:(page: string) => void;
    filter: string;
}

const HomePage = ({ onSetDetailPage: onSetDetailPage, onSetPage: onSetPage, filter: filter }: Props) => {


    const [clonedRecipeArray, setClonedRecipeArray] = useState(recipeArray);
    
    useEffect(() => {
        if (filter === 'all') {
            setClonedRecipeArray(recipeArray);
        }
        else{
            setClonedRecipeArray(recipeArray.filter((recipe) => recipe.category === filter));
        }
    }, [filter]);

    return (
        <SafeAreaView style={styles.container}>
            <Button title="Kategorier" onPress={() => onSetPage('category')}/>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} style={{ width: '100%' }}>
                {clonedRecipeArray.map((recipe) => (
                    <RecipeCard onSetPage={onSetDetailPage} recipe={recipe} key={recipe.id} />
                ))}
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
    }
});

export default HomePage