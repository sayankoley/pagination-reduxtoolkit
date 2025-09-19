import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/MainLayout";
import { ProductList } from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetails";
import { fetchDetails } from "../store/productSlice";

export const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>Failed to load product.</div>,
    children: [{
        path: "/",
        element: <ProductList></ProductList>,
        index: true
    }, {
        path: "/:id",
        element: <ProductDetails></ProductDetails>,
        loader: async ({ params }) => fetchDetails(params)
    }


    ]
}])