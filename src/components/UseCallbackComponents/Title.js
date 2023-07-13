import React from "react";
import { StyleSheet, Text } from "react-native";

const Title = () => {
    console.log("Rendering Title");
    return (
        <Text style={styles.titleText}>useCallback Hook</Text>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    }
});

export default React.memo(Title);