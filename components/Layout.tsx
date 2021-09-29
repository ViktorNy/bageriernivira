import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import { Recipe } from "../data";
import DarkMode from "./DarkMode";

const Layout = () => {
    const [page, setPage] = useState('home');
    const [selectedRecipe, setRecipe] = useState<Partial<Recipe>>({});
    const goHome = () => setPage('home');
    let themeContainerStyle = DarkMode();

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
        <View style={[styles.container, themeContainerStyle]}>
            {selectedPage()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Layout;