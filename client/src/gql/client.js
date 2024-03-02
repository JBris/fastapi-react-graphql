import { ApolloClient, InMemoryCache } from '@apollo/client';
import { config } from '../config/config';

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: config.GRAPHQL_URL,
    name: config.APP_NAME,
    version: config.APP_VERSION,
    queryDeduplication: false,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
        },
    },
});
