import {MAdapter} from "mapend";
import {DefaultUIImplementation} from "mapend-default-ui";
import {UIAdapterData} from "mapend-ui";

export default class AppAdapter extends MAdapter {
    setCentralUI() {
        return (<></>)
    }

    setUIAdapter(): UIAdapterData {
        return DefaultUIImplementation
    }

}