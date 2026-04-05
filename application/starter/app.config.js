export default ({config}) => {
    return {
        ...config,
        extra: {
            appConfig: process.env.API_URL,
        },
    };
};