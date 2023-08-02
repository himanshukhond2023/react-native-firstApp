import React, { useMemo, useState } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";

const UseMemoScreen = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    const isEven = useMemo(() => {
        let i = 0;
        while(i < 200000000) i++
        return counterOne % 2 === 0;
    }, [counterOne]);
    

    return (
        <View style={styles.container}>
            <Button title={`Counter One: ${counterOne}`} onPress={() => incrementOne()} />
            <Text>{isEven ? "Even" : "Odd"}</Text>

            <Button title={`Counter Two: ${counterTwo}`} onPress={() => incrementTwo()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 80,
    }
});

export default UseMemoScreen;