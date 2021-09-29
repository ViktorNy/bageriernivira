import React from "react";
import { ScrollView, StyleSheet, View, ImageBackground, Text, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { categories } from "../data";

interface Prop {
    onGoBack: (filter?: string) => void;
}

const CategoryPage = ({ onGoBack }: Prop) => {
    return (
        <SafeAreaView style={styles.container}>
            <Button title='Tillbaka' onPress={() => onGoBack()} />
            <ScrollView contentContainerStyle={styles.scrollViewContainer} style={{ width: '100%' }}>
                <View style={styles.container}>
                    {categories.map((cat) => (
                        <TouchableOpacity key={cat.id} onPress={() => { onGoBack(cat.filterName) }}>
                            <ImageBackground style={styles.imageStretch} source={{ uri: cat.image }}>
                                <Text style={styles.nameStyle}>{cat.textName}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 20,
        flexDirection: 'column'
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    scrollViewContainer: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    opacity: {
        backgroundColor: '#DDDDDD'
    },
    textStyle: {
        fontWeight: 'bold'
    },
    imageStretch: {
        marginBottom: 20,
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    },
    nameStyle: {
        position: 'absolute',
        paddingLeft: 10,
        backgroundColor: 'rgba(255,255,255,0.7)',
        color: 'black'
    }
});

export default CategoryPage;