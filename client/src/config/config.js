class Config {
    constructor() {
        this.APP_NAME = import.meta.env.VITE_APP_NAME;
        this.APP_VERSION = import.meta.env.VITE_APP_VERSION;
        this.GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL;
        this.REDIS_URL = import.meta.env.VITE_REDIS_URL;
        this.IRIS_FIELDS = [
            { value: 'sepalWidth', label: 'Sepal Width' },
            { value: 'sepalLength', label: 'Sepal Length' },
            { value: 'petalWidth', label: 'Petal Width' },
            { value: 'petalLength', label: 'Petal Length' }
        ]
    }
};

export const config = new Config();