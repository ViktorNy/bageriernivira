import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import { Recipe } from "../data";


const Layout = () => {
    const [page, setPage] = useState('home');
    const [selectedRecipe, setRecipe] = useState<Partial<Recipe>>({});
    const goHome = () => setPage('home');

    const setDetailPage = (page: string, recipe: Recipe) => {
        setPage(page);
        setRecipe(recipe);
    }

    const selectedPage = () => {
        switch (page) {
            case 'home': return <HomePage onSetPage={setDetailPage} />;
            case 'details': return <DetailPage onGoBack={goHome} recipe={selectedRecipe as Recipe} />;
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