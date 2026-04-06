import {Button} from "react-native";
import {toast} from "mapend-ui";

export default function ExampleView() {
    return (
        <>
            <Button
                title='Show toast'
                onPress={() => {
                    toast({
                        message: "Bismillah Message",
                        type: "error",
                    })
                }}
            />
        </>
    )
}