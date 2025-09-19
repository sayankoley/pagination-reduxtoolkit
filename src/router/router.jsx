import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/MainLayout";
import { ProductList } from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetails";
import { fetchDetails } from "../store/productSlice";

// Add your GitHub Pages repo name as the base path
const BASE_PATH = "/pagination-reduxtoolkit";

export const router = createBrowserRouter([
  {
    path: `${BASE_PATH}/`,
    element: <MainLayout />,
    errorElement: <div>Failed to load product.</div>,
    children: [
      {
        path: "",
        element: <ProductList />,
        index: true,
      },
      {
        path: ":id",
        element: <ProductDetails />,
        loader: async ({ params }) => fetchDetails(params),
      },
    ],
  },
]);
