import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { CountContext } from "../../screens/UseReducerScreen";

const ComponentA = () => {
    const countContext = useContext(CountContext);

    return (
        <View style={styles.container}>
            <Text>Component A</Text>
            <TouchableOpacity style={styles.button} onPress={() => countContext.countDispatch("increment")}>
                <Text style={styles.text}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => countContext.countDispatch("decrement")}>
                <Text style={styles.text}>Decrement</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => countContext.countDispatch("reset")}>
                <Text style={styles.text}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        // padding: 40,
        marginTop: 10,
    },
    button: {
        width: 200,
        height: 40,
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 20,
        marginVertical: 5,
        justifyContent: "center",
        fontSize: 1000,
        fontWeight: "bold"
    },
    text: {
        fontSize: 15, 
        fontWeight: "bold"
    },
});

export default ComponentA;