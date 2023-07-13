import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../components/UseCallbackComponents/Title";
import Count from "../components/UseCallbackComponents/Count";
import ButtonComponent from "../components/UseCallbackComponents/Button";

const UseCallbackScreen = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]);

    return (
        <View style={styles.container}>
            <Title />
            <Count text="Age" count={age} />
            <ButtonComponent title="Increment Age" handleClick={incrementAge} />
            <Count text="Salary" count={salary} />
            <ButtonComponent title="Increment Salary" handleClick={incrementSalary} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 40,
    },
});

export default UseCallbackScreen;