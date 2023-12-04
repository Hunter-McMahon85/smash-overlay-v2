import React from "react";
import { Route, Routes} from "react-router-dom";
import Controller from "./pages/scorecontroller";
import Scoreboard from "./pages/scoreboard";
import Landing from "./pages/landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/scoreboard" element={<Scoreboard/>} />
        <Route path="/controller" element={<Controller />} />
      </Routes>
    </>
  );
}

export default App;
