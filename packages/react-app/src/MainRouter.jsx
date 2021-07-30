import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import {Landing, Product, Gallery, AddProduct} from "./components";


const MainRouter = () => {

    const subgraphUri = "http://localhost:8000/subgraphs/name/scaffold-eth/your-contract";

    return (<div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <Landing subgraphUri={subgraphUri}/>
        </Route>
        <Route path="/explore">
            <Gallery />
        </Route>
        <Route path="/create">
            <AddProduct />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>)
}

export default MainRouter;
