import React from "react";
import { View } from "react-native";
import ComponentC from "../components/ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const UseContextScreen = () => {
    return (
        <View>
            <UserContext.Provider value={"Himanshu"}>
                <ChannelContext.Provider value={"Champ"}>
                    <ComponentC />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </View>
    );
}

export default UseContextScreen;