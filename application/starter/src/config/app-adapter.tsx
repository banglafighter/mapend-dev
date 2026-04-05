import {MAdapter} from "mapend";
import {DefaultUIImplementation} from "mapend-default-ui";
import {UIAdapterData} from "mapend-ui";

export default class AppAdapter extends MAdapter {
    setCentralUI() {
        throw new Error("Method not implemented.");
    }

    setSuspense() {
        throw new Error("Method not implemented.");
    }

    setUIAdapter(): UIAdapterData {
        return DefaultUIImplementation
    }

}