import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import React from "react";
import { Button } from "react-native";
import { Recipe } from "../data";
import CategoryPage from "../pages/CategoryPage";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";

const Stack = createNativeStackNavigator();

export type RecipeStackListParams = {
    Home: { filter: string };
    Detail: { recipe: Recipe };
    Category: undefined;
}

export type RecipeStackScreenProx<Screen extends keyof RecipeStackListParams> = NativeStackScreenProps<RecipeStackListParams, Screen>

export const Navigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
                <Stack.Screen
                    name='Home'
                    component={HomePage}
                    initialParams={{ filter: 'all' }}
                    options={({navigation}) => ({
                        title: 'Bageri Ernivira',
                        headerRight: () => (
                            (<Button
                            onPress={() => navigation.navigate('CategoryPage')}
                            title="Info"
                            color="black"
                        />))
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
        </NavigationContainer>
    )
}