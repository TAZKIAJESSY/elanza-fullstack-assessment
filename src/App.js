import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import NewRequestPage from "./pages/NewRequestPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/newrequest" component={NewRequestPage} />
      </Switch>{" "}
    </div>
  );
}

export default App;
