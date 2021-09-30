import { useState } from "react";
import { StyleSheet } from "react-native";

export const getColorScheme = () => {
    return { themeContainerStyle, checkBoxStyle }
}
const DarkMode = (darkMode?: boolean) => {
    let dark = darkMode;


    if (dark) {
        themeContainerStyle = styles.darkContainer
        checkBoxStyle = styles.checkBox
        console.log(dark)
    } else {
        themeContainerStyle = styles.lightContainer
    }
}

const styles = StyleSheet.create({
    lightContainer: {
        backgroundColor: '#F5F5F5',
        color: '#202122',
    },
    darkContainer: {
        backgroundColor: '#202124',
        color: '#bdc1c6',
    },
    checkBox: {
        color: '#bdc1c6',
    }
});

let themeContainerStyle: { backgroundColor: string, color: string } = styles.lightContainer;
let checkBoxStyle: { color: string };

export default DarkMode;