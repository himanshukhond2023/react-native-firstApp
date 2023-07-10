import React, { useEffect, useState } from "react";
import { View, Button, Text, StyleSheet, FlatList, TextInput } from "react-native";
import axios from "axios";


// useEffect after render
// const UseEffectScreen = () => {
//     const [count, setCount] = useState(0);
//     const [type, setType] = useState("");
//     const [data, setData] = useState([]);

//     // useEffect after render
//     useEffect(() => {
//         console.log(count);
//     });

//     return (
//         // useEffect after render
//         <View style={styles.container}>
//             <Button 
//                 title={`You clicked ${count} times`}
//                 onPress={() => setCount(count + 1)}
//             />
//         </View>  

//     );
// };


// Conditionally run effects - runs when type changes
// const UseEffectScreen = () => {
//     const [count, setCount] = useState(0);
//     const [type, setType] = useState("");
//     const [data, setData] = useState([]);

//     // Conditionally run effects - runs when type changes
//     // useEffect(() => {
//     //     console.log(type);
//     //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//     //         .then(response => response.json())
//     //         .then(json => setData(json))
//     // }, [type]);

//     // Using async-await
//     const result = async (type) => {
//         try {
//             let response = await axios.get(`https://jsonplaceholder.typicode.com/${type}`);
//             let result = response.data;
//             return result;
//         } catch(error) {
//             console.log(error);
//         }
//     };
//     useEffect(async () => {
//         let response = await result(type);
//         setData(response);
//     }, [type]);

//     return (
//             <View style={styles.container}>
//                 <Button title="Posts" onPress={() => setType("Posts")}/>
//                 <Button title="Users" onPress={() => setType("Users")}/>
//                 <Button title="Comments" onPress={() => setType("Comments")} />

//                 <Text style={{marginVertical: 30}}>{type}</Text>

//                 <FlatList 
//                     data={data}
//                     renderItem={({item}) => {
//                         return (
//                             <Text style={{marginBottom: 20}}>{JSON.stringify(item)}</Text>
//                         );
//                     }}
//                 />
//             </View>
//     );
// }


// Run effects only once - only render initially
// const UseEffectScreen = () => {
//     const [count, setCount] = useState(0);
//     const [type, setType] = useState("");
//     const [data, setData] = useState([]);

//     // Run effects only once - only render initially
//     useEffect(() => {
//         console.log(count);
//     }, []); 

//     return (

//         // Run effects only once - render initially only
//         <View style={styles.container}>
//             <Button 
//                 title={`You clicked ${count} times`}
//                 onPress={() => setCount(count + 1)}
//             />
//         </View>


//     );
// };


// useEffect with incorrect dependency
// const UseEffectScreen = () => {
//     const [count, setCount] = useState(0);
//     const [type, setType] = useState("");
//     const [data, setData] = useState([]);

//     // u0seEffect with incorrect dependency
//     const tick = () => {
//         setCount(count + 1);
//     }
//     useEffect(() => {
//         const interval = setInterval(tick, 1000);
        
//         return () => {
//             clearInterval(interval)
//         }   
//     }, []); // Won't work if you don't provide the dependency, so you have to provide count in array
 

//     return (
//         // useEffect with incorrect dependency
//         <View style={styles.container}>
//             <Text style={{fontSize: 20}}>{count}</Text>
//         </View>
//     );
// };


// Fetching data with useEffect
const UseEffectScreen = () => {
    const [post, setPost] = useState("");
    const [id, setId] = useState("");
    const [idFromButton, setIdFromButton] = useState("");

    const submitId = () => {
        setIdFromButton(id)
    }

    const result = async (idFromButton) => {
        try {
            let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`);
            let result = response.data;
            setPost(result);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        result(idFromButton);
        // console.log();
    }, [idFromButton]);

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Enter Your Id"
                value={id}
                onChangeText={(newId) => setId(newId)}
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Button 
                title="Submit"
                onPress={() => submitId()}
            />

            <Text style={{fontSize: 20, marginTop: 20}}>{post.title}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        margin: 20
    },
    input: {
        width: 200,
        height: 40,
        margin: 15,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 20,
    }
});

export default UseEffectScreen;