import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LowHeader from "./components/LowHeader";
import Top from "./components/Top";
import Main from "./components/Main";
import Burgers from "./components/Burgers";
import Checkout from "./components/Checkout";
import Recipes from "./components/Recipes";
import Bottom from "./components/Bottom";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/greeting">
            <LowHeader />
            <Footer />
          </Route>
          <Route path="/checkout">
            <LowHeader />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/recipe">
            <LowHeader />
            <Recipes />
            <Bottom />
            <Footer />
          </Route>
          <Route path="/menu">
            <Header />
            <Top />
            <Burgers />
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Top />
            <Main />
            <Bottom />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
