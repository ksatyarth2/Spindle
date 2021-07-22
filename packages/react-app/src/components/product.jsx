import React from "react";
import "../components/css/product.css";

export default function Product() {
    return (
        <div className="product">   
            <a href="#" className="backBtn"><img src="./img/back.svg" alt="back" /></a>
            <main>
                <div className="productImg"><img src="./img/sampleImg.svg" width="420px" height="500px" /></div>
                <div className="productDesc">
                    <div className="top">
                        <div className="title">Title of something</div>
                        <div className="name">Author's name</div>
                    </div>
                    <div className="desc">
                        This is just a random description. This is just a random description. This is just a
                        random description. This is just a random description. This is just a random description. This is just a
                        random description. This is just a random description. This is just a random description. This is just a
                        random description.
                    </div>
                    <div className="price">1.00 eth</div>
                    <button className="buyBtn">Buy</button>
                </div>
            </main>
            <button className="likeBtn"></button>
        </div>
    );
};

