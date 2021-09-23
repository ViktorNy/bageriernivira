import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import HomePage from "../pages/HomePage";


const Layout = () => {
    const [page, setPage] = useState('home');
    const goHome = () => setPage('home');

    const selectedPage = () => {
        switch (page) {
            case 'home': return <HomePage onSetPage={setPage} />;
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