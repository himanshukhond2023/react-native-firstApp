import React, {useContext} from "react";
import { View, Text } from "react-native";
import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from "../screens/UseContextScreen";

const ComponentE = () => {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);


    return (
        <View>
            {/* <ComponentF /> */}
            <Text>{user} - {channel}</Text>
        </View>
    );
}

export default ComponentE;