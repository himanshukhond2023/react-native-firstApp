import React from "react";
import { Text, Button} from "react-native";

const ButtonComponent = ({title, handleClick}) => {
    console.log(`Rendering Button - Incrementing ${title}`);
    return (
        <Button title={title} onPress={handleClick} />
    );
}

export default React.memo(ButtonComponent);