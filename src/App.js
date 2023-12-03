import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Controller from "./pages/scorecontroller";
import Scoreboard from "./pages/scoreboard";
import landing from "./pages/landing";



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={landing}></Route>
        <Route exact path="/scoreboard" Component={Scoreboard}></Route>
        <Route exact path="/controller" Component={Controller}></Route>
      </Routes>
    </Router>
  );
}

export default App;
