import React, {useEffect, useRef} from "react";
import { Text, Button, View, StyleSheet, TextInput } from "react-native";

const UseRefScreen = () => {
    const inputRef = useRef();

    useEffect(() => {
        // focus the input element
        inputRef.current.focus();
    }, [])

    return (
        <View>
            <TextInput ref={inputRef} style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 200,
        height: 40,
        margin: 15,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 20,
        alignSelf: "center",
        color: "black"
    }
});

export default UseRefScreen;