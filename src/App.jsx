import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom"
import RootLayout from "../layout/RootLayout"
import Home from "./components/Home"
import ProductDetail from "./pages/ProductDetail"
import CheckOut from "./pages/CheckOut"
import HeadPhones from "./pages/HeadPhones"
import Speakers from "./pages/Speakers"
import Earphones from "./pages/Earphones"
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {fetchData} from "./redux/features/ecommerseSlice"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

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
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ])
  return <RouterProvider router={routest} />
}

export default App
