import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme, } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Recipe } from "../data";
import CategoryPage from "../pages/CategoryPage";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import Switch from 'expo-dark-mode-switch';
import DarkMode from '../components/DarkMode';
import { useColorScheme } from 'react-native';

const Stack = createNativeStackNavigator();

export type RecipeStackListParams = {
    Home: { filter: string };
    Detail: { recipe: Recipe };
    Category: undefined;
}

export type RecipeStackScreenProx<Screen extends keyof RecipeStackListParams> = NativeStackScreenProps<RecipeStackListParams, Screen>

export const Navigator = () => {
    const [value, setValue] = React.useState(false);
    const [scheme, setScheme] = React.useState('');

    const changeColorMode = (value: boolean) => {
        DarkMode(value);
        setValue(value);
    }

    useEffect(() => {
        if (scheme === 'light') {
            setScheme('dark')
        } else (
            setScheme('light')
        )

    }, [value])

    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme} >
            <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
                <Stack.Screen
                    name='Home'
                    component={HomePage}
                    initialParams={{ filter: 'all' }}
                    options={({ navigation }) => ({
                        title: 'Bageri Ernivira',
                        headerRight: () => (
                            (<>
                                <Switch value={value} onChange={value => setValue(value)} />
                                <MaterialIcons
                                    name="menu-book"
                                    size={24}
                                    color="black"
                                    onPress={() => navigation.navigate('Category')}
                                />
                            </>
                            ))
                    })}
                />

                <Stack.Screen
                    name='Detail'
                    component={DetailPage}
                />

                <Stack.Screen
                    name='Category'
                    component={CategoryPage}
                />
            </Stack.Navigator>
        </NavigationContainer >
    )
}