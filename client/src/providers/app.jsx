import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from "react-router-dom";
import { client as gqlClient } from '../gql/client';
import { router } from '../routes/router';

export const AppProvider = () => {
    return (
        <ApolloProvider client={gqlClient}>
            <ChakraProvider>
                <RouterProvider router={router} />
            </ChakraProvider>
        </ApolloProvider>
    );
}
