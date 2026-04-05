import {Text, View} from 'react-native';
import {Mapend, useAppContext} from "mapend";
import AppRegistry from "./config/app-registry";


function MainComponent() {
    const config = useAppContext((state: any) => state.config);
    return (
        <View>
            <Text>Bismillah {config.apiBaseUrl}</Text>
        </View>
    );
}

Mapend.boot({
    mainComponent: MainComponent,
    registry: new AppRegistry()
})