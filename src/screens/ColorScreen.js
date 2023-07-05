import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

import { MixPanel, CurrentDate } from "../MixPanelAndDate";


const ColorScreen = () => {
    const mixpanel = MixPanel();
    const date = CurrentDate();
    console.log(mixpanel);
    console.log(date);
    
    try {
        const [colors, setColors] = useState([]);
        console.log(colors);

        mixpanel.track("Visited Color Demo", { "Color Screen": "Visited", "Date": date});
        mixpanel.flush();
        return (
            <View>
                <Button
                    title="Add a Color"
                    onPress={() => {
                        setColors([...colors, randomRgb()]);
                    }}
                />

                <FlatList
                    keyExtractor={item => item}
                    data={colors}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ height: 100, width: 100, backgroundColor: item }} />
                        );
                    }}
                />
            </View>
        );
    } catch (error) {
        mixpanel.track("Error while visiting ColorScreen", { "Color Screen Error": error, "Date": date });
        mixpanel.flush();
    }
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({

});

export default ColorScreen;