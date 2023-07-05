import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

import {MixPanel, CurrentDate} from "../MixPanelAndDate";


const ListExerciseScreen = () => {
    const mixpanel = MixPanel();
    const date = CurrentDate();
    console.log(mixpanel);
    console.log(date);

    try {
        const friends = [
            {name: "Himanshu", age: 21},
            {name: "Hrushikesh Gaware", age: 22},
            {name: "Ayaan", age: 22},
            {name: "Aishwarya", age: 22},
            {name: "Vaibhav", age: 21},
            {name: "Sumeet", age: 21},
            {name: "Hrushikesh", age: 22},
            {name: "Rohit", age: 22},
            {name: "Saniya", age: 21}
        ];
    
        mixpanel.track("Visited List Demo", {"List Screen": "Visited", "Date": date});
        mixpanel.flush();
        return (
            <FlatList 
                keyExtractor={friend => friend.name}
                data={friends}
                renderItem={({item}) => {
                    return (
                        <Text style={styles.textStyle}>
                            {item.name} - Age {item.age}
                        </Text>
                    )
                }}
            />
        );
    } catch(error) {
        mixpanel.track("Error while visiting ListScreen", { "List Screen Error": error, "Date": date });
        mixpanel.flush();
    }
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListExerciseScreen;