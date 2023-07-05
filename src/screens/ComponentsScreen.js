import React from "react";
import {Text, StyleSheet, View} from "react-native";

const ComponentsScreen = () => {
    // const greeting = "Hi there..";
    // const greeting = 123;
    // const greeting = ["abc", "xyz"];
    // const greeting = [123, 456];
    // const greeting = ["abc", "xyz"];
    const greeting = <Text>Hello to you!</Text>;

    return (
        <View>
            <Text style={styles.textStyle}>This is the component screen</Text>
            {/* <Text style={{fontSize: 50}}>This is the component screen</Text> */}
            {/* <Text>{greeting}</Text> */}
            {greeting}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    }
});

export default ComponentsScreen;