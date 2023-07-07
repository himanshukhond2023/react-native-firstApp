import React, { useEffect, useState } from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";

const UseEffectScreen = () => {
    const [type, setType] = useState("");
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     console.log(type);
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //         .then(response => response.json())
    //         .then(json => setData(json))
    // }, [type]);


    // Using async-await
    const result = async (type) => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
        let result = response.json();

        return result;
    };
    
    useEffect(() => {
        let response = result(type);
        setData(response);
    }, [type]);

    return (
        <View style={styles.container}>
            <Button title="Posts" onPress={() => setType("Posts")}/>
            <Button title="Users" onPress={() => setType("Users")}/>
            <Button title="Comments" onPress={() => setType("Comments")} />

            <Text style={{marginVertical: 30}}>{type}</Text>

            <FlatList 
                data={data}
                renderItem={({item}) => {
                    return (
                        <Text style={{marginBottom: 20}}>{JSON.stringify(item)}</Text>
                    );
                }}
            />
        </View>

        
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        margin: 20
    }
});

export default UseEffectScreen;