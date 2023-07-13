import React from "react";
import { View, Text } from "react-native";
import { UserContext, ChannelContext } from "../../screens/UseContextScreen";

const ComponentF = () => {
    return (
        <View>
            <Text>Component F</Text>
            <UserContext.Consumer>
                {
                    user  => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return (
                                            <View>
                                                <Text>User Context Value: {user}</Text>
                                                <Text>Channel Context Value: {channel}</Text>
                                            </View>
                                        )
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </View>
    );
}

export default ComponentF;