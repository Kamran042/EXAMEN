
import AdminRoot from "../pages/admin/AdminRoot"
import Dashboard from "../pages/admin/dashboard/dashboard"
import Add from "../pages/admin/add/add"
import Error from "../pages/error/error/error"
import SiteRoot from "../pages/site/SiteRoot"
import Home from "../pages/site/home/home"
import Basket from "../pages/site/Basket/Basket"
import Wishlist from "../pages/site/Wishlist/Wishlist"
import Detail from "../pages/site/Detail/Detail"

const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "add",
        element: <Add />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
];
export default ROUTES;