import { useColorScheme, StyleSheet } from "react-native";

const DarkMode = () => {
    let colorScheme = 'dark';
    let themeContainerStyle;
    let checkBoxStyle;

    if (colorScheme === 'dark') {
        themeContainerStyle = styles.darkContainer
        checkBoxStyle = styles.checkBox
    } else {
        themeContainerStyle = styles.lightContainer
    }
    return { themeContainerStyle, checkBoxStyle }
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

export default DarkMode;