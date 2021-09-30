import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import { Recipe } from "../data";
import DarkMode from "./DarkMode";
import CategoryPage from "../pages/CategoryPage";

const Layout = () => {
    const [page, setPage] = useState('home');
    const [filter, setFilter] = useState('all');
    const [selectedRecipe, setRecipe] = useState<Partial<Recipe>>({});
    const goHome = () => setPage('home');
    let themeContainerStyle = DarkMode();

    const goHome = (filter? : string) => {
        setPage('home');
        filter ? setFilter(filter) : setFilter('all');

    const setDetailPage = (page: string, recipe: Recipe) => {
        setPage(page);
        setRecipe(recipe);
    }

    // const selectedPage = () => {
    //     switch (page) {
    //         // case 'home': return <HomePage onSetDetailPage={setDetailPage} onSetPage = {setPage} filter = {filter} />;
    //         case 'details': return <DetailPage recipe={selectedRecipe as Recipe} filter = {filter} />;
    //         case 'category': return <CategoryPage onGoBack={goHome}/>
    //     }
    // }

    return (
        <View style={[styles.container, themeContainerStyle]}>
            <StatusBar style="auto" />
            {/* {selectedPage()} */}
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