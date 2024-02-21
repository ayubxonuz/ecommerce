import {RouterProvider, createBrowserRouter} from "react-router-dom"
import RootLayout from "../layout/RootLayout"
import Home from "./components/Home"
import ProductDetail from "./pages/ProductDetail"
import CheckOut from "./pages/CheckOut"
import HeadPhones from "./pages/HeadPhones"
import Speakers from "./pages/Speakers"
import Earphones from "./pages/Earphones"

function App() {
  const routest = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/headphones",
          element: <HeadPhones />,
        },
        {
          path: "/speakers",
          element: <Speakers />,
        },
        {
          path: "/earphones",
          element: <Earphones />,
        },
        {
          path: "/product/:slug",
          element: <ProductDetail />,
        },
        {
          path: "/checkout",
          element: <CheckOut />,
        },
      ],
    },
  ])
  return <RouterProvider router={routest} />
}

export default App
