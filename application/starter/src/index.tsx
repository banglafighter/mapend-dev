import {Text, View} from 'react-native';
import {Mapend, useAppContext} from "mapend";
import AppRegistry from "./config/app-registry";
import ExampleView from "./view/example-view";
import { StatusBar } from "mapend-ui";


function MainComponent() {
    const config = useAppContext((state: any) => state.config);
    return (
        <>
            <StatusBar style={"auto"}/>
            <View>
                <Text>Bismillah {config.apiBaseUrl}</Text>
            </View>
            <ExampleView/>
        </>
    );
}

Mapend.boot({
    mainComponent: MainComponent,
    registry: new AppRegistry()
})