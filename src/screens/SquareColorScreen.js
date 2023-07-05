import React, {useState, useReducer} from "react";
import {Text, View, StyleSheet} from "react-native";
import ColorCounter from "../components/ColorCounter";

import {MixPanel, CurrentDate} from "../MixPanelAndDate";


const colorIncrement = 15;

const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number}
    // action === {type: "red" || "green" || "blue", payload: 15 || -15}

    switch(action.type) {
        case "changeRed":
            return state.red + action.payload > 255 || state.red + action.payload < 0 
                ? state 
                : {...state, red: state.red + action.payload};
        case "changeGreen":
            return state.green + action.payload > 255 || state.green + action.payload < 0 
                ? state    
                : {...state, green: state.green + action.payload};
        case "changeBlue":
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 
                ? state
                : {...state, blue: state.blue + action.payload};
        default:
            return state;
    }
}

const SquareColorScreen = () => {
    const mixpanel = MixPanel();
    const date = CurrentDate();
    console.log(mixpanel);
    console.log(date);

    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);

    // const setColor = (color, change) => {
    //     // color === "red", "green", "blue"
    //     // change === +15, -15

    //     switch(color) {
    //         case "red":
    //             red + change > 255 || red + change < 0 ? null : setRed(red + change); 
    //             return;
    //         case "green":
    //             green + change > 255 || green + change < 0 ? null : setGreen(green + change); 
    //             return;
    //         case "blue":
    //             blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change); 
    //             return;
    //         default:
    //             return;
    //     }
    // }

    //     return (
    //         <View>
    //             <ColorCounter 
    //                 color="Red"
    //                 onIncrease={() => {
    //                     setColor("red", colorIncrement);
    //                 }}
    //                 onDecrease={() => {
    //                     setColor("red", -1 * colorIncrement);
    //                 }}
    //             />
    //             <ColorCounter 
    //                 color="Green"
    //                 onIncrease={() => {
    //                     setColor("green", colorIncrement);
    //                 }}
    //                 onDecrease={() => {
    //                     setColor("green", -1 * colorIncrement);
    //                 }}
    //             />
    //             <ColorCounter 
    //                 color="Blue"
    //                 onIncrease={() => {
    //                     setColor("blue", colorIncrement);
    //                 }}
    //                 onDecrease={() => {
    //                     setColor("blue", -1 * colorIncrement);
    //                 }}
    //             />
    //             <View style={{height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}/>
    //         </View>
    //     );
    // };





    // Using Reducer
    try {
        const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
        const {red, green, blue} = state;

        mixpanel.track("Visited Square Color Demo", {"Square Color Screen": "Visited", "Date": date});
        mixpanel.flush();
        return (
            <View>
                <ColorCounter 
                    color="Red"
                    onIncrease={() => {
                        dispatch({type: "changeRed", payload: colorIncrement});
                    }}
                    onDecrease={() => {
                        dispatch({type: "changeRed", payload: colorIncrement * -1})
                    }}
                />
                <ColorCounter 
                    color="Green"
                    onIncrease={() => {
                        dispatch({type: "changeGreen", payload: colorIncrement});
                    }}
                    onDecrease={() => {
                        dispatch({type: "changeGreen", payload: colorIncrement * -1});
                    }}
                />
                <ColorCounter 
                    color="Blue"
                    onIncrease={() => {
                        dispatch({type: "changeBlue", payload: colorIncrement});
                    }}
                    onDecrease={() => {
                        dispatch({type: "changeBlue", payload: colorIncrement * -1});
                    }}
                />
                <View style={{height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}/>
            </View>
        );
    } catch(error) {
        mixpanel.track("Error while visiting SquareColorScreen", { "Square Color Screen Error": error, "Date": date });
        mixpanel.flush();
    }

};

const styles = StyleSheet.create({

});

export default SquareColorScreen;