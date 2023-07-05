import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        {name: "Himanshu"},
        {name: "Hrushikesh Gaware"},
        {name: "Ayaan"},
        {name: "Aishwarya"},
        {name: "Vaibhav"},
        {name: "Sumeet"},
        {name: "Hrushikesh"},
        {name: "Rohit"},
        {name: "Saniya"}
    ];
    // const friends = [    // one way to uniquely identify
    //     {name: "Himanshu", key: "1"},
    //     {name: "Hrushikesh Gaware", key: "2"},
    //     {name: "Ayaan", key: "3"},
    //     {name: "Aishwarya", key: "4"},
    //     {name: "Vaibhav", key: "5"},
    //     {name: "Sumeet", key: "6"},
    //     {name: "Hrushikesh", key: "7"},
    //     {name: "Rohit", key: "8"},
    //     {name: "Saniya", key: "9"}
    // ];


    return (
        <FlatList 
            keyExtractor={friend => friend.name} // second way to uniquely identify
            data={friends} 
            renderItem={({item}) => { // destructuring inside argument - {item}
                // element === {item: {name: "Friend #1"}, index: 0}
                // item === {name: "Friend #1"} // Do destructuring

                return <Text style={styles.textStyle}>{item.name}</Text>
            }} 
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;