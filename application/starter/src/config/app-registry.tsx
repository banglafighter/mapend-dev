import {MAdapter, MConfig, MRegistry} from "mapend";
import AppConfig from "./app-config";
import AppAdapter from "./app-adapter";

export default class AppRegistry implements MRegistry{
    config: MConfig;
    adapter: MAdapter;

    constructor() {
        this.config = new AppConfig()
        this.adapter = new AppAdapter()
    }
}