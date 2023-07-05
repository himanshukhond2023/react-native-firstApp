import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

import {MixPanel, CurrentDate} from "../MixPanelAndDate";


const ImageScreen = () => {
    const mixpanel = MixPanel();
    const date = CurrentDate();
    console.log(mixpanel);
    console.log(date);

    try {
        mixpanel.track("Visited Image Demo", {"Image Screen": "Visited", "Date": date});
        mixpanel.flush();
        return (
            <View>
                <ImageDetail title="Forest" imageSource={require("../assets/image/forest.jpg")} imageScore="9"/>
                <ImageDetail title="Beach" imageSource={require("../assets/image/beach.jpg")} imageScore="7"/>
                <ImageDetail title="Mountain" imageSource={require("../assets/image/mountain.jpg")} imageScore="4"/>
            </View>
        );
    } catch(error) {
        mixpanel.track("Error while visiting ImageScreen", { "Image Screen Error": error, "Date": date });
        mixpanel.flush();
    }
};

const styles = StyleSheet.create({

});

export default ImageScreen;