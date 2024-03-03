import { ApolloProvider } from '@apollo/client';
import { RouterProvider } from "react-router-dom";
import { client as gqlClient } from '../gql/client';
import { router } from '../routes/router';
import { store } from '../store/store'
import { Provider as ReduxProvider } from 'react-redux'

export const AppProvider = () => {
    return (
        <ApolloProvider client={gqlClient}>
            <ReduxProvider store={store}>
                <RouterProvider router={router} />
            </ReduxProvider>
        </ApolloProvider>
    );
}
