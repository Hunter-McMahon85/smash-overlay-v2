import React, { useState } from "react";
import Names from "./page_components/namesinput";

function Controller() {
  const [ShowTagSet, setTagSet] = useState(false);

  const handleopenTagSet = () => {
    setTagSet(true);
  };

  const handlecloseTagSet = () => {
    setTagSet(false);
  };
  let p1score = 0;
  let p2score = 0;
  localStorage.setItem("p1score", p1score);
  localStorage.setItem("p2score", p2score);

  function score(p, x) {
    if (p === 1) {
      p1score = p1score + x;
      localStorage.setItem("p1score", p1score);
    } else {
      p2score = p2score + x;
      localStorage.setItem("p2score", p2score);
    }
  }

  return (
    <>
      <div className="UI_Contain">
        <button onClick={handleopenTagSet}>Enter Player Tags</button>

        <button onClick={() => score(1, 1)}>Win Left</button>
        <button onClick={() => score(1, -1)}>Undo</button>
        <button onClick={() => score(2, 1)}>Win Right</button>
        <button onClick={() => score(2, -1)}>Undo</button>

        {ShowTagSet && <Names onClose={handlecloseTagSet} />}
      </div>
    </>
  );
}

export default Controller;
