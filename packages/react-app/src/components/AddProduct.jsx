import React from "react";
//import "./css/addProduct.css";

export default function AddProduct() {
    var s = 1;
    var change = () => {
      document.getElementById(`${s}`).classList.remove("visible");
      s++;
      document.getElementById(`${s}`).classList.add("visible");
    };
    return (
      <div className=" body1 body2 main">
        <section className="prodHeading">
          Publish your own <strong>Artwork</strong>
        </section>
        <div className="main">
          <form action="#" autocomplete="off">
            <ol className="fields" id="thisform">
              <li id="1" className="visible">
                <label htmlFor="name">What's the name of your masterpiece?</label>
                <input type="text" name="name" placeholder="My Awesome Book" />
              </li>
              <li id="2">
                <label for="auth_name">And what's your name, monsieur/madame?</label>
                <input type="text" name="auth_name" placeholder="Cool Dude" />
              </li>
              <li id="3">
                <label for="file">Upload your Artwork!</label>
                <input type="file" name="file" />
              </li>
              <li id="4">
                <label for="desc">Describe your artwork (in about 200 words)</label>
                <textarea type="text" name="desc" rows="8"></textarea>
              </li>
              <li id="5">
                <label for="price">What would be its price?</label>
                <input type="number" name="price" placeholder="10" />
              </li>
            </ol>
          </form>
          <button className="prodSubmit" type="submit" onClick={change}>
            Continue
          </button>
        </div>
      </div>
    );
  }