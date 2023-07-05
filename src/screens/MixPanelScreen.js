import React from "react";
import { Button, SafeAreaView } from "react-native";

import {MixPanel, CurrentDate} from "../MixPanelAndDate";


const MixPanelScreen = () => {
    const mixpanel = MixPanel();
    const date = CurrentDate();
    console.log(mixpanel);
    console.log(date);

    try {
        mixpanel.track("Visited MixPanel Demo", {"MixPanel Screen": "Visited", "Date": date});
        mixpanel.flush();
        return (
            <SafeAreaView>
                <Button 
                    title="Select Premium Plan"
                    onPress={() => {
                        mixpanel.track("Signed Up", {"Signup Type": "Referral"});
                        mixpanel.flush();
                    }}
                />
            </SafeAreaView>
        );
    } catch(error) {
        mixpanel.track("Error while visiting MinPanel Screen", {"MixPanel Screen Error": error, "Date": date});
        mixpanel.flush();
    }

};

export default MixPanelScreen;