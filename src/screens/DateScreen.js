import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import moment from "moment/moment";
import { MixPanel, CurrentDate } from "../MixPanelAndDate";


const DateScreen = () => {
    const mixpanel = MixPanel();
    const date = CurrentDate();
    console.log(mixpanel);
    console.log(date);

    try {
        const [currentDate, setCurrentDate] = useState("");

        mixpanel.track("Visited DateScreen", { "Date Screen": "Visited", "Date": date });
        mixpanel.flush();
        // useEffect(() => {
        //     var date = new Date().getDate();
        //     var month = new Date().getMonth() + 1; //Current Month
        //     var year = new Date().getFullYear(); //Current Year
        //     var hours = new Date().getHours(); //Current Hours
        //     var min = new Date().getMinutes(); //Current Minutes
        //     var sec = new Date().getSeconds(); //Current Seconds

        //     // setCurrentDate(
        //     //     date + '/' + month + '/' + year + ', ' + hours + ':' + min + ':' + sec
        //     // );
        // }, []);

        useEffect(() => {
            var date = moment().utcOffset('+05:30').format(' DD-MM-YYYY hh:mm:ss a')
            setCurrentDate(date);
        });

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>
                        Current Date Time:
                    </Text>
                    <Text>
                        {currentDate}
                    </Text>
                </View>
            </SafeAreaView>
        );
    } catch (error) {
        mixpanel.track("Error while visiting DateScreen", { "Date Screen Error": error, "Date": date });
        mixpanel.flush();
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    textStyle: {
        textAlign: "center",
        fontSize: 25,
    }
});

export default DateScreen;