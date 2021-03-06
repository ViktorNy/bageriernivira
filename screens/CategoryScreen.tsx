import React from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { categories } from "../data";
import { RecipeStackScreenProx } from "../navigation/Navigator";

const CategoryScreen = ({ navigation }: RecipeStackScreenProx<'Category'>) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} style={{ width: '100%' }}>
                <View style={styles.container}>
                    {categories.map((cat) => (
                        <TouchableOpacity key={cat.id} onPress={() => navigation.navigate('Home', { filter: cat.filterName })}>
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
        flexDirection: 'column'
    },
    scrollViewContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: 10
    },
    imageStretch: {
        minWidth: '95%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 1,
        overflow: "hidden",
        shadowColor: "black",
        elevation: 5,
        marginBottom: 10,
    },
    nameStyle: {
        position: 'absolute',
        padding: 5,
        backgroundColor: 'rgba(255,255,255,0.7)',
        color: 'black',
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default CategoryScreen;