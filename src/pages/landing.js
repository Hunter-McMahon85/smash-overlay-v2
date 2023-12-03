import { Link } from "react-router-dom";
import React from "react";

function landing() {
  return (
    <>
      <div class="container">
        <Link to="/scoreboard">
          <button>Open Scoreboard</button>
        </Link>
        <Link to="/controller">
          <button>Open Controller</button>
        </Link>
      </div>
    </>
  );
}

export default landing;
