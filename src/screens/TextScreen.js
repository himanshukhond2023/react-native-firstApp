import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import {MixPanel, CurrentDate} from "../MixPanelAndDate";


const TextScreen = () => {
    const mixpanel = MixPanel();
    const date = CurrentDate();
    console.log(mixpanel);
    console.log(date);

    try {
        const [password, setPassword] = useState("");

        mixpanel.track("Visited Text Demo", {"Text Screen": "Visited", "Date": date});
        mixpanel.flush();
        return (
            <View>
                <Text>Enter Password:</Text>
                <TextInput 
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={password}
                    onChangeText={(newValue) => setPassword(newValue)}
                />
                {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
                {/* <Text>My name is {password}</Text> */}
            </View>
        );
    } catch(error) {
        mixpanel.track("Error while visiting TextScreen", { "Text Screen Error": error, "Date": date });
        mixpanel.flush();
    }
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1
    }
});

export default TextScreen;