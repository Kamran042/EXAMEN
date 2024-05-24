import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("false");
  const [data, setData] = useState([]);
  const [inpVal, setInpVal] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [basket, setBasket] = useState(
    localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );
  const [wishlist, setWishlist] = useState(
    localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : []
  );
  const router = createBrowserRouter(ROUTES);

  useEffect(() => {
    axios.get("http://localhost:8080/api/examen").then((resp) => {
      setData([...resp.data]);
    });
  });
  return (
    <>
      <MainContext.Provider
        value={{
          data,
          setData,
          loading,
          setLoading,
          error,
          setError,
          basket,
          setBasket,
          inpVal,
          setInpVal,
          sortBy,
          setSortBy,
          wishlist,
          setWishlist,
        }}
      >
        <RouterProvider router={router} />
      </MainContext.Provider>
    </>
  );
}

export default App;
