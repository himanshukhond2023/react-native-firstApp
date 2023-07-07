import React, { useEffect, useState } from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";

const UseEffectScreen = () => {
    const [count, setCount] = useState(0);
    const [type, setType] = useState("");
    const [data, setData] = useState([]);

    // useEffect after render
    // useEffect(() => {
    //     console.log(count);
    // });


    // Conditionally run effects - runs when type changes
    // useEffect(() => {
    //     console.log(type);
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //         .then(response => response.json())
    //         .then(json => setData(json))
    // }, [type]);

    // Using async-await
    // const result = async (type) => {
    //     let response = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
    //     let result = response.json();00
    //     return result;
    // };
    // useEffect(async () => {
    //     let response = await result(type);
    //     setData(response);
    // }, [type]);


    // Run effects only once - only render initially
    // useEffect(() => {
    //     console.log(count);
    // }, []);


    // useEffect with incorrect dependency
    const tick = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000);
        
        return () => {
            clearInterval(interval)
        }   
    }, []); // Won't work if you don't provide the dependency, so you have to provide count in array
 

    return (
        // useEffect after render
        // <View style={styles.container}>
        //     <Button 
        //         title={`You clicked ${count} times`}
        //         onPress={() => setCount(count + 1)}
        //     />
        // </View>


        // Conditionally run effect
        // <View style={styles.container}>
        //     <Button title="Posts" onPress={() => setType("Posts")}/>
        //     <Button title="Users" onPress={() => setType("Users")}/>
        //     <Button title="Comments" onPress={() => setType("Comments")} />

        //     <Text style={{marginVertical: 30}}>{type}</Text>

        //     <FlatList 
        //         data={data}
        //         renderItem={({item}) => {
        //             return (
        //                 <Text style={{marginBottom: 20}}>{JSON.stringify(item)}</Text>
        //             );
        //         }}
        //     />
        // </View>   


        // Run effects only once - render initially only
        // <View style={styles.container}>
        //     <Button 
        //         title={`You clicked ${count} times`}
        //         onPress={() => setCount(count + 1)}
        //     />
        // </View>


        // useEffect with incorrect dependency
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>{count}</Text>
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