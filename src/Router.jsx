import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import Gallery from "./Components/Pages/Gallery";

const routes= createBrowserRouter([
    {

        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            
            {
                path: "/gallery",
                element: <Gallery/>,
            },

            
        ]    
    }
])

export default routes;