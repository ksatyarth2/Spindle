import React from "react";
import "./css/product.css";
import SampleImg from "./img/sampleImg.svg";
import Back from "./img/back.svg";
import {Link} from "react-router-dom";

export default function Product() {
  return (
    <div className="product body1">
      <Link to="/" className="backBtn">
        <img src={Back} alt="back" />
      </Link>
      <div className="main">
        <div className="productImg">
          <img src={SampleImg} width="420px" height="500px" />
        </div>
        <div className="productDesc">
          <div className="top">
            <div className="title">Title of something</div>
            <div className="name">Author's name</div>
          </div>
          <div className="desc">
            This is just a random description. This is just a random description. This is just a random description.
            This is just a random description. This is just a random description. This is just a random description.
            This is just a random description. This is just a random description. This is just a random description.
          </div>
          <div className="price">1.00 eth</div>
          <button className="buyBtn">Buy</button>
        </div>
      </div>
      <button className="likeBtn"></button>
    </div>
  );
}
