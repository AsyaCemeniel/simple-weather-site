import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "./hooks";
import { Header } from "./components/header";
import { MainPage, Favorites } from "./pages";

function App() {
  const theme = useSelector((store) => store.ParametersReducer.theme);
  const isDark = theme === "dark";

  const currentTheme = isDark ? "theme-dark" : "theme-light";

  return (
    <div className={`color ${currentTheme}`}>
      <Header />
      <Switch>
        <Route path="/simple-weather-site" exact={true} component={MainPage} />
        <Route path="/favorites" exact={true} component={Favorites} />
      </Switch>
    </div>
  );
}

export default App;
