import {Text, View} from 'react-native';
import {Mapend} from "mapend";
import AppRegistry from "./config/app-registry";


function MainComponent() {
    return (
        <View>
            <Text>Bismillah</Text>
        </View>
    );
}

Mapend.boot({
    mainComponent: MainComponent,
    registry: new AppRegistry()
})