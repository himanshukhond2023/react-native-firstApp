import React, { useReducer, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { MixPanel, CurrentDate } from "../MixPanelAndDate";

// const CounterScreen = () => {
//     const [counter, setCounter] = useState(0);

//     return (
//         <View>
//             <Button
//                 title="Increase"
//                 onPress={() => {
//                     // counter++;   // This won't work
//                     // console.log(counter);
//                     setCounter(counter + 1);
//                 }}
//             />
//             <Button
//                 title="Decrease"
//                 onPress={() => {
//                     // counter--;   // This won't work
//                     // console.log(counter);
//                     setCounter(counter - 1);
//                 }}
//             />
//             <Text>Current Count: {counter}</Text>
//         </View>
//     );
// };





const reducer = (state, action) => {
    // state === {counter: number}
    // action === {type: "increment" || "decrement", payload: 1}

    switch (action.type) {
        case "increment":
            return { ...state, counter: state.counter + action.payload };
        case "decrement":
            return { ...state, counter: state.counter - action.payload };
        default:
            return state;
    }
}

const CounterScreen = () => {
    const mixpanel = MixPanel();
    const date = CurrentDate();
    console.log(mixpanel);
    console.log(date);

    try {
        const [state, dispatch] = useReducer(reducer, { counter: 0 })

        mixpanel.track("Visited Counter Demo", { "Counter Screen": "Visited", "Date": date });
        mixpanel.flush();
        return (
            <View>
                <Button
                    title="Increase"
                    onPress={() => {
                        dispatch({ type: "increment", payload: 1 });
                    }}
                />
                <Button
                    title="Decrease"
                    onPress={() => {
                        dispatch({ type: "decrement", payload: 1 })
                    }}
                />
                <Text>Current Count: {state.counter}</Text>
            </View>
        );
    } catch (error) {
        mixpanel.track("Error while visiting CounterScreen", { "Counter Screen Error": error, "Date": date });
        mixpanel.flush();
    }

};

const styles = StyleSheet.create({

});

export default CounterScreen;