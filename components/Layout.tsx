import React, { useState } from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import { Recipe } from "../data";

const Layout = () => {
    const [page, setPage] = useState('home');
    const [selectedRecipe, setRecipe] = useState<Partial<Recipe>>({});
    const goHome = () => setPage('home');

    let colorScheme = useColorScheme();
    let themeContainerStyle;

    if (colorScheme === 'dark') {
        themeContainerStyle = styles.darkContainer;
    } else {
        themeContainerStyle = styles.lightContainer;
    }

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
    },
    lightContainer: {
        backgroundColor: '#D0D0C0',
    },
    darkContainer: {
        backgroundColor: '#242C40',
    },
});

export default Layout;