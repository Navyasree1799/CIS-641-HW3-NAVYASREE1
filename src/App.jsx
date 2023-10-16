import { createContext, useMemo, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Layout from "./shared/Layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";

export const MyContext = createContext();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/resume",
        element: <Resume />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
]);

function App() {
    const [currentTab, setCurrentTab] = useState("");

    // Memoize the context value to prevent unnecessary re-renders
    const contextValue = useMemo(() => ({ currentTab, setCurrentTab }), [currentTab]);

    return (
        <MyContext.Provider value={contextValue}>
            <Layout>
                <RouterProvider router={router} />
            </Layout>
        </MyContext.Provider>
    );
}

export default App;
