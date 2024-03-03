import { ApolloProvider } from '@apollo/client';
import { RouterProvider } from "react-router-dom";
import { client as gqlClient } from '../gql/client';
import { router } from '../routes/router';

export const AppProvider = () => {
    return (
        <ApolloProvider client={gqlClient}>
            <RouterProvider router={router} />
        </ApolloProvider>
    );
}
