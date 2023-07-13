import React, { useReducer, useContext, useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, View, Text, ScrollView } from "react-native";
import ComponentA from "../components/UseReducerComponents/ComponentA";
import ComponentB from "../components/UseReducerComponents/ComponentB";
import ComponentC from "../components/UseReducerComponents/ComponentC";
import axios from "axios";

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
//     const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

//     return (
//         <View style={styles.container}>
//             {/* Count One */}
//             <Text style={styles.text}>Count One: {count}</Text>
//             <TouchableOpacity style={styles.button} onPress={() => dispatch("increment")}>
//                 <Text style={styles.text}>Increment</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => dispatch("decrement")}>
//                 <Text style={styles.text}>Decrement</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => dispatch("reset")}>
//                 <Text style={styles.text}>Reset</Text>
//             </TouchableOpacity>

//             {/* Count Two */}
//             <View style={styles.container}>
//                 <Text style={styles.text}>Count Two: {countTwo}</Text>
//                 <TouchableOpacity style={styles.button} onPress={() => dispatchTwo("increment")}>
//                     <Text style={styles.text}>Increment</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.button} onPress={() => dispatchTwo("decrement")}>
//                     <Text style={styles.text}>Decrement</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.button} onPress={() => dispatchTwo("reset")}>
//                     <Text style={styles.text}>Reset</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// }


// useReducer with useContext
// export const CountContext = React.createContext();
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
//         <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
//             <View style={styles.container}>
//                 <Text>Count: {count}</Text>
//                 <ComponentA /> 
//                 <ComponentB />
//                 <ComponentC />
//             </View>
//         </CountContext.Provider>
//     );
// }


// Fetching data with useReducer - will use useState just for example and then useReducer
// const UseReducerScreen = () => {
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");
//     const [post, setPost] = useState({});

//     useEffect(async () => {
//         try {
//             const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
//             const result = await response.data;
//             setLoading(false);
//             setPost(result);
//             setError("");
//         } catch(error) {
//             setLoading(false);
//             setPost({});
//             setError("Something went Wrong!");
//             console.log(error);
//         }
//     }, []);
//     return (
//         <View style={styles.container}>
//             <Text>{loading ? "Loading..." : post.title}</Text>
//             <Text>{error ? error : null}</Text>

//         </View>
//     );
// }


// Fetching data with useReducer - will use useReducer now
const initialState = {
    loading: true,
    error: "",
    post: {}
}
const reducer = (state, action) => {
    switch(action.type) {
        case "FETCH_SUCCESS": 
            return {
                loading: false,
                post: action.payload,
                error: ""
            }
        case "FETCH_ERROR":
            return {
                loading: false,
                post: {},
                error: "Something Went Wrong!"
            }
        default: 
            return state;
    }
}
const UseReducerScreen = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicod.com/posts/1");
            const result = await response.data;
            dispatch({type: "FETCH_SUCCESS", payload: result});
        } catch(error) {
            dispatch({type: "FETCH_ERROR"})
        }
    });

    return (
        <View style={styles.container}>
            <Text>{state.loading ? "Loading.." : state.post.title}</Text>
            <Text>{state.error ? state.error : null }</Text>
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