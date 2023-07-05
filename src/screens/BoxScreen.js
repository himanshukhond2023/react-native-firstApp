import React from "react";
import {Text, View, StyleSheet} from "react-native";

import {MixPanel, CurrentDate} from "../MixPanelAndDate";

const BoxScreen = () => {
    const mixpanel = MixPanel();
    const date = CurrentDate();
    console.log(mixpanel);
    console.log(date);

    try {
        mixpanel.track("Visited Box Demo", {"Box Screen": "Visited", "Date": date});
        mixpanel.flush();
        return (
            // For Box Model
            // <View style={styles.viewStyle}>
            //     <Text style={styles.textStyle}>Box Screen</Text>
            // </View>
    
    
            // For Flex
            // <View style={styles.viewStyle}>
            //     <Text style={styles.textOneStyle}>Child 1</Text>
            //     <Text style={styles.textTwoStyle}>Child 2</Text>
            //     <Text style={styles.textThreeStyle}>Child 3</Text>
            // </View>
    
    
            // For Position
            // <View style={styles.viewStyle}>
            //     <Text style={styles.textOneStyle}>Child 1</Text>
            //     <Text style={styles.textTwoStyle}>Child 2</Text>
            //     <Text style={styles.textThreeStyle}>Child 3</Text>
            // </View>
    
            // For Exercise
            <View style={styles.parentStyle}>
                <View style={styles.viewOneStyle} />
                <View style={styles.viewTwoStyle} />
                <View style={styles.viewThreeStyle} />
            </View>
        );
    } catch(error) {
        mixpanel.track("Error while visiting BoxScreen", { "Box Screen Error": error, "Date": date });
        mixpanel.flush();
    }  
};

const styles = StyleSheet.create({
    // For Box Model
    // viewStyle: {
    //     borderWidth: 3,
    //     borderColor: "black",
    //     // margin: 20
    // },
    // textStyle: {
    //     borderWidth: 1,
    //     borderColor: "red",
    //     margin: 40
    // }


    // For Flex
    // viewStyle: {
    //     borderWidth: 3,
    //     // padding: 20,
    //     borderColor: "black",
    //     alignItems: "center", // by default stretch
    //     // flexDirection: "row",
    //     height: 200,
    //     // justifyContent: "flex-start"
    // },
    // textOneStyle: {
    //     borderWidth: 3,
    //     borderColor: "red",
    //     // flex: 4,
    // },
    // textTwoStyle: {
    //     borderWidth: 3,
    //     borderColor: "red",
    //     // flex: 4,
    //     alignSelf: "stretch",
    // },
    // textThreeStyle: {
    //     borderWidth: 3,
    //     borderColor: "red",
    //     // flex: 2,
    // }


    // For Position - Absolute, Relative
    // viewStyle: {
    //     borderWidth: 3,
    //     borderColor: "black",
    //     height: 200,
    //     alignItems: "stretch",
    // },
    // textOneStyle: {
    //     borderWidth: 3,
    //     borderColor: "red",
    //     flex: 5,
    // },
    // textTwoStyle: {
    //     borderWidth: 3,
    //     borderColor: "red",
    //     fontSize: 18,
    //     // position: "absolute",
    //     // top: 0,
    //     // right: 0,
    //     // bottom: 0,
    //     // left: 0,
    //     ...StyleSheet.absoluteFillObject
    // },
    // textThreeStyle: {
    //     borderWidth: 3,
    //     borderColor: "red",
    //     flex: 5,
    // }


    // For Exercise
    parentStyle: {
        // borderWidth: 3,
        // borderColor: "black",
        height: 205,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    viewOneStyle: {
        backgroundColor: "red",
        height: 100,
        width: 110,
    },
    viewTwoStyle: {
        backgroundColor: "green",
        height: 100,
        width: 110,
        alignSelf: "flex-end",
        // top: 100,
    },
    viewThreeStyle: {
        backgroundColor: "purple",
        height: 100,
        width: 110,
    }

});

export default BoxScreen;