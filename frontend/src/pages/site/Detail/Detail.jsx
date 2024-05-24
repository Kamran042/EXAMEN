import React, { useContext } from "react";
import "./Detail.scss";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import MainContext from "../../../context/context";

const Detail = () => {
  const { id } = useParams();
  const { data, setData, basket, setBasket ,wishlist, setWishlist} = useContext(MainContext);
  const taraget = data.find((x) => x._id == id);

  function addToBasket(id) {
    const targetOfBasket = basket.find((x) => x._id == id);
    console.log(targetOfBasket);
    if (targetOfBasket) {
      targetOfBasket.count++;
      targetOfBasket.totalPrice += targetOfBasket.price;
    } else {
      const targetOfDataBase = data.find((x) => x._id == id);
      basket.push(targetOfDataBase);
    }
    setBasket([...basket]);
    localStorage.setItem("basket", JSON.stringify(basket));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product Bassketa elava olundu",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  function addToWishlist(id) {
    const targetOfWishlist = wishlist.find((x) => x._id == id);
    if (targetOfWishlist) {
      const newWishlist = wishlist.filter((x) => x._id != id);
      setWishlist(newWishlist);
    } else {
      const targetOfDataBase = data.find((x) => x._id == id);
      setWishlist([...wishlist, targetOfDataBase]);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    console.log(wishlist);
  }
  return (
    <div className="detail">
      <div className="container">
        {taraget && (
          <div className="row">
            <div className="col-6">
              <img src={taraget.img} width={"400px"} height={"350px"} alt="" />
            </div>
            <div className="col-6">
              <h1>Title: {taraget.title}</h1>
              <h1>Descroption: {taraget.desc}</h1>
              <h1>Price: {taraget.price} AZN</h1>
              <button
                className="btn btn-primary"
                onClick={() => {
                  addToBasket(taraget._id);
                }}
              >
                Add To Basket
              </button>
              <button
                className="btn btn-warning"
                onClick={() => {
                  addToWishlist(taraget._id);
                }}
              >
                Add To Wishlist
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
