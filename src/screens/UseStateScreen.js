import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button, ScrollView } from "react-native";

const UseStateScreen = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState({firstName: "", lastName: ""});
    const [items, setItems] = useState([]);

    // Not a right way to change count value -> unsafe
    // const increment = () => {
    //     setCount(count + 1);
    // }
    // const decrement = () => {
    //     setCount(count - 1);
    // }
    // const reset = () => {
    //     setCount(0);
    // }


    // useState with previous state -> safe
    // const changeCount = (amount) => {
    //     // console.log("changecount");
    //     setCount(prevCount => prevCount + amount);
    // }
    // const reset = () => {
    //     setCount(0);
    // }


    // useState with object
    const addFirstName = (value) => {
        setName({...name, firstName: value});
    }
    const addLastName = (value) => {
        setName({...name, lastName: value});
    }


    // useState with array
    // const addItem = () => {
    //     setItems([...items, {
    //         id: items.length,
    //         value: Math.floor(Math.random() * 10) + 1
    //     }]);
    // }

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


            {/* useState with previous state */}
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


// useState with object
// const UseStateScreen = () => {
//     const [count, setCount] = useState(0);
//     const [name, setName] = useState({firstName: "", lastName: ""});
//     const [items, setItems] = useState([]);

//     // useState with object
//     const addFirstName = (value) => {
//         setName({...name, firstName: value});
//     }
//     const addLastName = (value) => {
//         setName({...name, lastName: value});
//     }

//     return (
//         <View style={styles.container}>

//             {/* useState with object */}
//             <TextInput 
//                 placeholder="Enter First Name"
//                 value={name.firstName}
//                 onChangeText={(newValue) => addFirstName(newValue)}
//                 style={styles.input}
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 allowFontScaling
//             />
//             <TextInput
//                 placeholder="Enter Last Name"
//                 value={name.lastName}
//                 onChangeText={(newValue) => addLastName(newValue)}
//                 style={styles.input}
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 allowFontScaling 
//             />
//             {
//                 name.firstName ? <Text style={styles.text}>Your first name is {name.firstName}</Text> : null
//             }
//             {
//                 name.firstName ? <Text style={styles.text}>Your last name is {name.lastName}</Text> : null
//             }
//             <Text style={styles.text}>{JSON.stringify(name)}</Text>
//         </View>
//     );
// };


// useState with array
// const UseStateScreen = () => {
//     const [count, setCount] = useState(0);
//     const [name, setName] = useState({firstName: "", lastName: ""});
//     const [items, setItems] = useState([]);

//     // useState with array
//     const addItem = () => {
//         setItems([...items, {
//             id: items.length,
//             value: Math.floor(Math.random() * 10) + 1
//         }]);
//     }

//     return (
//         <View style={styles.container}>
//             {/* useState with array */}
//             <Button 
//                 title="Add a number"
//                 onPress={addItem}
//             />
//             <ScrollView>
//                 {
//                     items.map((item) => {
//                         return <Text key={item.id} style={{marginVertical: 10, width: 50}}>{item.id}: {item.value}</Text>
//                     })
//                 }
//             </ScrollView>
//         </View>
//     );
// };

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
        marginVertical: 20,
        justifyContent: "center",
        fontSize: 1000,
        fontWeight: "bold"
    },
    text: {
        fontSize: 15, 
        fontWeight: "bold"
    },

    // useState with object
    input: {
        width: 200,
        height: 40,
        margin: 15,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 20,
    }
});

export default UseStateScreen;