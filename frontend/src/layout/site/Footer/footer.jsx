import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="site__foter">
        <div className="site__foter__top">
          <div className="site__foter__box">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua.
            </p>
          </div>
          <div className="site__foter__box">
            <h3>Newsletter</h3>
            <p>Stay update with our latest</p>
            <div className="site__foter__box__inp">
              <input type="email" placeholder="Enter Email" />
              <div className="site__foter__box__inp__i">
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="site__foter__box">
            <h3>Instragram Feed</h3>
            <div className="site__foter__box__photos">
              <div className="site__foter__box__photos__box">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/i1.jpg"
                  alt=""
                />
              </div>
              <div className="site__foter__box__photos__box">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/i1.jpg"
                  alt=""
                />
              </div>
              <div className="site__foter__box__photos__box">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/i1.jpg"
                  alt=""
                />
              </div>
              <div className="site__foter__box__photos__box">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/i1.jpg"
                  alt=""
                />
              </div>
              <div className="site__foter__box__photos__box">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/i1.jpg"
                  alt=""
                />
              </div>
              <div className="site__foter__box__photos__box">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/i1.jpg"
                  alt=""
                />
              </div>
              <div className="site__foter__box__photos__box">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/i1.jpg"
                  alt=""
                />
              </div>
              <div className="site__foter__box__photos__box">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/i1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="site__foter__box">
            <h3>Follow Us</h3>
            <p>Let us be social</p>
            <div className="site__foter__box__sm">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="copyright">
          Copyright ©2024 All rights reserved | This template is made with{" "}
          <span>
            <i class="fa-regular fa-heart"></i>
          </span>{" "}
          by <span>Colorlib</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
