import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { MixPanel, CurrentDate } from "../MixPanelAndDate";


const ExerciseScreen = () => {
    const mixpanel = MixPanel();
    const date = CurrentDate();
    console.log(mixpanel);
    console.log(date);

    try {
        const name = "Himanshu";
        mixpanel.track("Visited Components Demo", { "Component Screen": "Visited", "Date": date });
        mixpanel.flush();
        return (
            <View>
                <Text style={styles.textStyle}>Getting started with React Native!</Text>
                <Text style={styles.textStyle2}>My name is {name}</Text>
            </View>
        );
    } catch (error) {
        mixpanel.track(`${error} while visiting Components Demo`, { "Date": date });
        mixpanel.flush();
    }
}
// mixpanel.track("Visited ComponentsScreen");
// mixpanel.flush();
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    textStyle2: {
        fontSize: 20
    }
});

export default ExerciseScreen;