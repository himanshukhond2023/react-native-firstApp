import React, { useReducer } from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

// useReducer (simple state and action)
// const initialState = 0;
// const reducer = (state, action) => {
//     switch(action) {
//         case "increment":
//             return state + 1;
//         case "decrement":
//             return state - 1;
//         case "reset":
//             return initialState;
//         default:
//             return state;
//     }
// }
// const UseReducerScreen = () => {
//     const [count, dispatch] = useReducer(reducer, initialState);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.text}>Count: {count}</Text>
//             <TouchableOpacity style={styles.button} onPress={() => dispatch("increment")}>
//                 <Text style={styles.text}>Increment</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => dispatch("decrement")}>
//                 <Text style={styles.text}>Decrement</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => dispatch("reset")}>
//                 <Text style={styles.text}>Reset</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }


// useReducer (complex state and action)
// const initialState = {
//     firstCounter: 0,
//     secondCounter: 10
// };
// const reducer = (state, action) => {
//     switch(action.type) {
//         case "increment":
//             return {...state, firstCounter: state.firstCounter + action.value};
//         case "decrement":
//             return {...state, firstCounter: state.firstCounter - action.value};
//         case "increment2":
//             return {...state, secondCounter: state.secondCounter + action.value};
//         case "decrement2":
//             return {...state, secondCounter: state.secondCounter - action.value};
//         case "reset":
//             return initialState;
//         default:
//             return state;
//     }
// }
// const UseReducerScreen = () => {
//     const [count, dispatch] = useReducer(reducer, initialState);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.text}>First Counter: {count.firstCounter}</Text>
//             <Text style={styles.text}>Second Counter: {count.secondCounter}</Text>

//             {/* First Counter */}
//             <TouchableOpacity style={styles.button} onPress={() => dispatch({type: "increment", value: 1})}>
//                 <Text style={styles.text}>Increment</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => dispatch({type: "decrement", value: 1})}>
//                 <Text style={styles.text}>Decrement</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => dispatch({type: "increment", value: 5})}>
//                 <Text style={styles.text}>Increment by 5</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => dispatch({type: "decrement", value: 5})}>
//                 <Text style={styles.text}>Decrement by 5</Text>
//             </TouchableOpacity>

//             {/* Second Counter */}
//             <TouchableOpacity style={styles.button} onPress={() => dispatch({type: "increment2", value: 1})}>
//                 <Text style={styles.text}>Increment Counter 2</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => dispatch({type: "decrement2", value: 1})}>
//                 <Text style={styles.text}>Decrement Counter 2</Text>
//             </TouchableOpacity>

//             {/* Reset Button for both the counter */}
//             <TouchableOpacity style={styles.button} onPress={() => dispatch({type: "reset"})}>
//                 <Text style={styles.text}>Reset</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }


// Multiple useReducers
const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
}

const UseReducerScreen = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

    return (
        <View style={styles.container}>
            {/* Count One */}
            <Text style={styles.text}>Count One: {count}</Text>
            <TouchableOpacity style={styles.button} onPress={() => dispatch("increment")}>
                <Text style={styles.text}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => dispatch("decrement")}>
                <Text style={styles.text}>Decrement</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => dispatch("reset")}>
                <Text style={styles.text}>Reset</Text>
            </TouchableOpacity>

            {/* Count Two */}
            <View style={styles.container}>
                <Text style={styles.text}>Count Two: {countTwo}</Text>
                <TouchableOpacity style={styles.button} onPress={() => dispatchTwo("increment")}>
                    <Text style={styles.text}>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => dispatchTwo("decrement")}>
                    <Text style={styles.text}>Decrement</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => dispatchTwo("reset")}>
                    <Text style={styles.text}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 40,
    },
    button: {
        width: 200,
        height: 40,
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 20,
        marginVertical: 10,
        justifyContent: "center",
        fontSize: 1000,
        fontWeight: "bold"
    },
    text: {
        fontSize: 15, 
        fontWeight: "bold"
    },
});

export default UseReducerScreen;