import {
    createBrowserRouter, redirect
} from "react-router-dom";
import ErrorPage from "../features/error/error-page";
import App from '../App';
import IrisPage from '../features/iris/iris-page';
import PredictionsPage from '../features/predictions/predictions-page';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                loader: async () => redirect("/iris")
            },
            {
                path: "iris",
                element: <IrisPage />,
            },
            {
                path: "predictions",
                element: <PredictionsPage />,
            },
        ]
    },
]);
