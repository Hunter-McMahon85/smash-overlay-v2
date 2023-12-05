import React from "react";
import { Route, Routes} from "react-router-dom";
import Controller from "./pages/scorecontroller";
import Scoreboard from "./pages/scoreboard";
import Landing from "./pages/landing";
import Comms from "./pages/page_components/comms";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/scoreboard" element={<Scoreboard/>} />
        <Route path="/controller" element={<Controller/>} />
        <Route path="/comms" element={<Comms/>} />
      </Routes>
    </>
  );
}

export default App;
