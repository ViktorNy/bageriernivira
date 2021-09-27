import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import { Recipe } from "../data";
import CategoryPage from "../pages/CategoryPage";


const Layout = () => {
    const [page, setPage] = useState('home');
    const [filter, setFilter] = useState('all');
    const [selectedRecipe, setRecipe] = useState<Partial<Recipe>>({});

    const goHome = (filter? : string) => {
        setPage('home')
        alert(filter);
        filter ? setFilter(filter) : setFilter('all');
    }

    const setDetailPage = (page: string, recipe: Recipe) => {
        setPage(page);
        setRecipe(recipe);
    }

    const selectedPage = () => {
        switch (page) {
            case 'home': return <HomePage onSetDetailPage={setDetailPage} onSetPage = {setPage} filter = {filter} />;
            case 'details': return <DetailPage onGoBack={goHome} recipe={selectedRecipe as Recipe} filter = {filter} />;
            case 'category': return <CategoryPage onGoBack={goHome}/>
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {selectedPage()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default Layout;