/** @format */

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

class ScreenOne extends React.Component<{}, {}> {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text>This is a simple example</Text>
            </View>
        );
    }
}

class ScreenTwo extends React.Component<{}, {}> {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text>This is the other screen</Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({ Home: ScreenOne, Next: ScreenTwo });
const AppContainer = createAppContainer(TabNavigator);

AppRegistry.registerComponent(appName, () => AppContainer);
