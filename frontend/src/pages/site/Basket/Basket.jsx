import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";

const Basket = () => {
  const { basket, setBasket } = useContext(MainContext);

  let TOTALPRICE = 0

  for (let i = 0; i < basket.length; i++) {
     TOTALPRICE += basket[i].totalPrice
  }

  function increaseItemOfBasket(item) {
    item.count++;
    item.totalPrice += item.price;
    localStorage.setItem("basket", JSON.stringify(basket));
  }

  function decreaseItemOfBasket(item) {
    if (item.count > 1) {
      item.count--;
      item.totalPrice -= item.price;
    }else{
      const targetOfBaasket = basket.find((x)=>x._id == item._id)
      const targetOfIndex = basket.indexOf(targetOfBaasket)
      basket.splice(targetOfIndex,1);
    }
    setBasket([...basket])
    localStorage.setItem("basket", JSON.stringify(basket));
  }

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Img</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Add</th>
            <th scope="col">Count</th>
            <th scope="col">Delete</th>
            <th scope="col">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((item, index) => (
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
                  className="btn btn-warning"
                  onClick={() => {
                    increaseItemOfBasket(item);
                  }}
                >
                  +
                </button>
              </td>
              <td>{item.count}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    decreaseItemOfBasket(item);
                  }}
                >
                  -
                </button>
              </td>

              <td>{item.totalPrice} $</td>
            </tr>
          ))}
        </tbody>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Total: {TOTALPRICE} $</th>
          </tr>
        </thead>
      </table>
    </>
  );
};

export default Basket;
