import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Landing, Product} from "./components"

const MainRouter = () => {
    return (<div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/products" component={Product}/>
      </Switch>
      </BrowserRouter>
    </div>)
}

export default MainRouter;
