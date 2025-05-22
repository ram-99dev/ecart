import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import MenuCard from "./components/MenuCard";
import { lazy, Suspense } from "react";
import Cart from "./components/Cart";
import appStore from "./utils/AppStore";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const About = lazy(()=>import("./components/About"));

const AppLayout = () => {
    return(
        <Provider store={appStore}>
             <div className="applayout">
                    <Header />
                    <Outlet />
            </div> 
        </Provider>
    )
       
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
    {
        path: "/",
        element: <Body />,
       
    },    
    {
        path: "/About",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense> ,
    },
    {
         path: "/Contact",
        element: <Contact />,       
    },
    {
         path: "/restaurants/:resId",
        element: <MenuCard />,       
    },
    {
        path: "/Cart",
        element: <Cart />,
    },    
        ],
        errorElement: <Error />
    },

]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
