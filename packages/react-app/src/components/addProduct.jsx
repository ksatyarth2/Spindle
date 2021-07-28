import React from "react";
import "./css/addProduct.css";

export default function AddProduct() {
    return (
      <div className="product body1 main">
         <section class="prodHeading">
            Publish your own <strong>Artwork</strong>
        </section>
        <main>
            <form action="#" autocomplete="off">
                <ol class="fields" id="thisform">
                    <li class="visible">
                        <label for="name">What's the name of your masterpiece?</label>
                        <input type="text" name="name" placeholder="My Awesome Book" />
                    </li>
                    <li>
                        <label for="auth_name">And what's your name, monsieur/madame?</label>
                        <input type="text" name="auth_name" placeholder="Cool Dude" />
                    </li>
                    <li>
                        <label for="file">Upload your Artwork!</label>
                        <input type="file" name="file" />
                    </li>
                    <li>
                        <label for="desc">Describe your artwork (in about 200 words)</label>
                        <textarea type="text" name="desc" rows="8"></textarea>
                    </li>
                    <li>
                        <label for="price">What would be its price?</label>
                        <input type="number" name="price" placeholder="10" />
                    </li>
                </ol>
            </form>
            <button class="prodSubmit" type="submit">Continue</button>
        </main>
      </div>
    );
  }