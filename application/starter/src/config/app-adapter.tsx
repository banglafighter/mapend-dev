import {MAdapter} from "mapend";
import {DefaultUIImplementation} from "mapend-default-ui";
import {ToastBox, UIAdapterData} from "mapend-ui";
import {UINode} from "mmcore";

export default class AppAdapter extends MAdapter {
    setCentralUI(): UINode {
        return (
            <>
                <ToastBox/>
            </>
        )
    }

    setUIAdapter(): UIAdapterData {
        return DefaultUIImplementation
    }

}