import {getCommandRoot, joinPath, loadYmlConfig} from "mmcore-fs";

export default ({config}) => {
    const yamlPath = joinPath(getCommandRoot(), 'env/env.yml')
    return {
        ...config,
        extra: {
            appConfig: loadYmlConfig(yamlPath, {}),
        },
    };
};