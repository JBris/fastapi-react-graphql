import {
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../error-page";
import App from '../App';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
]);
