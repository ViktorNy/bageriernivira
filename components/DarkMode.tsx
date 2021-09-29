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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lightContainer: {
        backgroundColor: '#D0D0C0',
        color: '#242C40',
    },
    darkContainer: {
        backgroundColor: '#242C40',
        color: '#D0D0C0',
    },
});

export default DarkMode;