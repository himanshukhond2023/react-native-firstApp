import React, { useEffect } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

import { MixPanel, CurrentDate } from "../MixPanelAndDate";

const HomeScreen = ({ navigation }) => {
    // console.log(props.navigation);
    const mixpanel = MixPanel();
    const date = CurrentDate();
    console.log(mixpanel);
    console.log(date);

    // const [currDate, ]
    // useEffect(() =>{

    //     convertDate()
    //     // let currDate = CurrentDate()
    //     // console.log(currDate);
    // },[])


    // useEffect(() =>{
    //     const date = CurrentDate();
    //     console.log(mixpanel);
    //     console.log(date);
    // },[])

    // const convertDate = () => {
    //     let newDate = JSON.stringify(CurrentDate())
    //     console.log(newDate);
    //     const regex = /"/g
    //     let finaldate = newDate?.replace(regex, "");
    //     // console.log(finaldate);
    //     // console.log(newDate.length);
    //     // let finalDate = JSON.parse(newDate)
    //     // console.log(finalDate);
    //     // console.log("type", typeof finalDate)
    //     return finaldate
    // }

    try {
        mixpanel.track("Visited HomeScreen", { "Home Screen": "Visited", "Date": date});
        mixpanel.flush();
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hi there..</Text>
                <Button
                    title="Go to Components Demo"
                    onPress={() => {
                        navigation.navigate("ExerciseScreen");
                        mixpanel.track("Components Demo Button Clicked", { "Components Demo Button": "Clicked", "Date": date});
                        mixpanel.flush();
                    }}
                    color="red"
                    accessibilityLabel="Learn more about this button"
                />
                {/* <TouchableOpacity onPress={() => navigation.navigate("ListExerciseScreen")}>
                    <Text>Go to List Demo</Text>
                </TouchableOpacity> */}
                <Button
                    title="Go to List Demo"
                    onPress={() => {
                        navigation.navigate("ListExerciseScreen");
                        mixpanel.track("List Demo Button Clicked", { "List Demo Button": "Clicked" });
                        mixpanel.flush();
                    }}
                    color="red"
                />
                <Button
                    title="Go to Image Demo"
                    onPress={() => {
                        navigation.navigate("ImageScreen");
                        mixpanel.track("Image Demo Button Clicked", { "Image Demo Button": "Clicked" });
                        mixpanel.flush();
                    }}
                    color="red"
                />
                <Button
                    title="Go to Counter Demo"
                    onPress={() => {
                        navigation.navigate("CounterScreen");
                        mixpanel.track("Counter Demo Button Clicked", { "Counter Demo Button": "Clicked" });
                        mixpanel.flush();
                    }}
                    color="red"
                />
                <Button
                    title="Go to Color Demo"
                    onPress={() => {
                        navigation.navigate("ColorScreen");
                        mixpanel.track("Color Demo Button Clicked", { "Color Demo Button": "Clicked" });
                        mixpanel.flush();
                    }}
                    color="red"
                />
                <Button
                    title="Go to Square Color Demo"
                    onPress={() => {
                        navigation.navigate("SquareColorScreen");
                        mixpanel.track("Square Color Demo Button Clicked", { "Square Color Demo Button": "Clicked" });
                        mixpanel.flush();
                    }}
                    color="red"
                />
                <Button
                    title="Go to Text Demo"
                    onPress={() => {
                        navigation.navigate("TextScreen");
                        mixpanel.track("Text Demo Button Clicked", { "Text Demo Button": "Clicked" });
                        mixpanel.flush();
                    }}
                    color="red"
                />
                <Button
                    title="Go to Box Demo"
                    onPress={() => {
                        navigation.navigate("BoxScreen");
                        mixpanel.track("Box Demo Button Clicked", { "Box Demo Button": "Clicked" });
                        mixpanel.flush();
                    }}
                    color="red"
                />
                <Button
                    title="Go to MixPanel Demo"
                    onPress={() => {
                        navigation.navigate("MixPanelScreen");
                        mixpanel.track("MixPanel Demo Button Clicked", { "MixPanel Demo Button": "Clicked" });
                        mixpanel.flush();
                    }}
                />
                <Button
                    title="Go to Date Demo"
                    onPress={() => {
                        navigation.navigate("DateScreen");
                        mixpanel.track("Date Demo Button Clicked", { "Date Demo Button": "Clicked" });
                        mixpanel.flush();
                    }}
                />
            </View>
        );
    } catch (error) {
        mixpanel.track("Error while visiting HomeScreen", { "Home Screen Error": error, "Date": date });
        mixpanel.flush();
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 80
    },
    text: {
        fontSize: 30
    }
});

export default HomeScreen;