import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Link to="/scoreboard">
          <button>Open Scoreboard</button>
        </Link>
        <Link to="/controller">
          <button>Open Controller</button>
        </Link>
    </>
  );
}

export default Landing;
