import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components/header";
import { MainPage, Favorites } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/simple-weather-site" exact={true} component={MainPage} />
        <Route path="/favorites" exact={true} component={Favorites} />
      </Switch>
    </div>
  );
}

export default App;
