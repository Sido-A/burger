import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Top from "./components/Top";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Recipes from "./components/Recipes";
import Bottom from "./components/Bottom";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route path="/greeting">
            <Header />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Footer />
          </Route>
          <Route path="/recipes">
            <Recipes />
            <Footer />
          </Route>
          <Route path="/menu">
            <Top />
            <Menu />
            <Footer />
          </Route>

          <Route path="/">
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
