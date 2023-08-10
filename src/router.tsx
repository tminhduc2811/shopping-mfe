import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ProductApplication from "product-mfe/App";
import CartApplication from "cart-mfe/App";
import VueAboutApp from "./components/VueApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductApplication />,
      },
      {
        path: "cart",
        element: <CartApplication />,
      },
      {
        path: "about",
        element: <VueAboutApp />,
      },
    ],
  },
]);

export default router;
