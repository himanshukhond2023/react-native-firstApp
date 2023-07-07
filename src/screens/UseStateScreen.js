import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const UseStateScreen = () => {
    const [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount(count + 1);
    // }
    // const decrement = () => {
    //     setCount(count - 1);
    // }
    // const reset = () => {
    //     setCount(0);
    // }


    const changeCount = (amount) => {
        // console.log("changecount");
        setCount(prevCount => prevCount + amount);
    }
    const reset = () => {
        setCount(0);
    }

    return (
        <View style={styles.container}>
            {/* <TouchableOpacity style={styles.button} onPress={decrement}>
                <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Count: {count}</Text>
            <TouchableOpacity style={styles.button} onPress={increment}>
                <Text style={styles.text}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={reset}>
                <Text style={styles.text}>Reset</Text>
            </TouchableOpacity> */}


            <TouchableOpacity style={styles.button} onPress={() => changeCount(-1)}>
                <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Count: {count}</Text>
            <TouchableOpacity style={styles.button} onPress={() => changeCount(1)}>
                <Text style={styles.text}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={reset}>
                <Text style={styles.text}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 100,
        
    },
    button: {
        width: 200,
        height: 40,
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 20,
        marginVertical: 20,
        justifyContent: "center",
        fontSize: 1000,
        fontWeight: "bold"
    },
    text: {
        fontSize: 20, 
        fontWeight: "bold"
    }
});

export default UseStateScreen;