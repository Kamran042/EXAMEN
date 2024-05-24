import React, { useContext } from "react";
import "./Women.scss";
import MainContext from "../../../context/context";
import {Link} from "react-router-dom"
import Swal from "sweetalert2";


const Women = () => {
  const { data, basket, setBasket, inpVal, setInpVal, sortBy, setSortBy, wishlist, setWishlist} =
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

  function addToWishlist(id){
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
    <div className="women">
      <div className="products">
        <div className="products__top">
          <h2>New realeased Products for Women</h2>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="products__search__sort">
          <input
            placeholder="Search product"
            type="text"
            value={inpVal}
            onChange={(e) => {
              setInpVal(e.target.value);
            }}
          />
          <div className="sort__btns">
            <button
              className="btn btn-success"
              onClick={() => setSortBy({ field: "title", asc: true })}
            >
              A-Z
            </button>
            <button
              className="btn btn-success"
              onClick={() => setSortBy({ field: "title", asc: false })}
            >
              Z-A
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setSortBy({ field: "price", asc: true })}
            >
              Artan
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setSortBy({ field: "price", asc: false })}
            >
              Azalan
            </button>
            <button className="btn btn-dark" onClick={() => setSortBy(0)}>
              Default
            </button>
          </div>
        </div>
        <div className="products__grid">
          {data
            .filter((x) => x.title.toLowerCase().includes(inpVal.toLowerCase()))
            .sort((a, b) => {
              if (!sortBy) {
                return 0;
              } else if (sortBy.asc == true) {
                return a[sortBy.field] > b[sortBy.field]
                  ? 1
                  : b[sortBy.field] > a[sortBy.field]
                  ? -1
                  : 0;
              } else if (sortBy.asc == false) {
                return a[sortBy.field] < b[sortBy.field]
                  ? 1
                  : b[sortBy.field] < a[sortBy.field]
                  ? -1
                  : 0;
              }
            })
            .map((item, index) => (
              <div className="products__grid__card" key={index}>
                <div className="products__grid__card__img">
                  <img src={item.img} alt="" />
                  <div className="products__grid__card__img__bg"></div>
                  <div className="products__grid__card__img__box">
                    <div
                      className="products__grid__card__img__box__icon"
                      onClick={() => {
                        addToWishlist(item._id);
                      }}
                    >
                      <i class="fa-solid fa-heart" style={{ color: wishlist.find((x)=> x._id == item._id ? "red " : "black ") }}></i>
                    </div> 
                    <Link
                      to={`detail/${item._id}`}
                      className="products__grid__card__img__box__icon"
                    >
                      <i class="fa-solid fa-info"></i>
                    </Link>
                    <div
                      onClick={() => {
                        addToBasket(item._id);
                      }}
                      className="products__grid__card__img__box__icon"
                    >
                      <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className="products__grid__card__img__box__icon">
                      <i class="fa-solid fa-expand"></i>
                    </div>
                  </div>
                </div>
                <div className="products__grid__card__title">
                  <h3>{item.title}</h3>
                  <p>$ {item.price}.00</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Women;
