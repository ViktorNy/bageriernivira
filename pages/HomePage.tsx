import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Button, Text } from 'react-native';
import { categories, Recipe, recipeArray } from '../data';
import { SafeAreaView } from 'react-native-safe-area-context';
import RecipeCard from '../components/RecipeCard'
import { RecipeStackScreenProx } from '../navigation/Navigator';

const HomePage = ({  navigation, route }: RecipeStackScreenProx<'Home'>) => {
    const [clonedRecipeArray, setClonedRecipeArray] = useState(recipeArray);
    
    useEffect(() => {
        if (route.params.filter === 'all' || !route.params.filter) {
            setClonedRecipeArray(recipeArray);
        }
        else{
            setClonedRecipeArray(recipeArray.filter((recipe) => recipe.category === route.params.filter));
        }
    }, [route.params.filter]);
    

    return (
        <SafeAreaView style={styles.container}>
            <Button title="Kategorier" onPress={() => navigation.navigate('Category')}/>

            {/* Find better way to display category text*/}
            <Text style={styles.categoryText}></Text> 

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
        // backgroundColor: '#fff',
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
    categoryText: {
        color: 'black',
        fontSize: 25,
        paddingTop: 10,
    }
});

// {categories.find(x => x.filterName === route.params.filter)?.textName}

export default HomePage