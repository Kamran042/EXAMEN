import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import Swal from "sweetalert2";

const Wishlist = () => {
  const { wishlist, setWishlist, basket, setBasket, data } =
    useContext(MainContext);

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

  function deleteToWishlist(id) {
    const newWishlist = wishlist.filter((x) => x._id != id);
    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product Wishlistden silindi",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Img</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Add To Basket</th>
            <th scope="col">Delete To Wishlist</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img src={item.img} width={"60px"} height={"60px"} alt="" />
              </td>
              <td>{item.title}</td>
              <td>{item.desc}</td>
              <td>{item.price} $</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => {
                    addToBasket(item._id);
                  }}
                >
                  Add{" "}
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => [deleteToWishlist(item._id)]}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Wishlist;
