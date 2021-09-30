import { useColorScheme, StyleSheet } from "react-native";

const DarkMode = () => {
    let colorScheme = useColorScheme();
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
        backgroundColor: 'white',
        color: 'black',
    },
    darkContainer: {
        backgroundColor: '#242C40',
        color: 'white',
    },
});

export default DarkMode;