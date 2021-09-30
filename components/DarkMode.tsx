import { useColorScheme, StyleSheet } from "react-native";

const DarkMode = () => {
    let colorScheme = 'light';
    let themeContainerStyle;

    if (colorScheme === 'dark') {
        themeContainerStyle = styles.darkContainer
    } else {
        themeContainerStyle = styles.lightContainer
    }
    return themeContainerStyle
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
});

export default DarkMode;