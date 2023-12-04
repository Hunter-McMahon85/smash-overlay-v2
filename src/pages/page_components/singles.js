import React from "react";

const ScoreboardSingle = ({
  P1,
  P2,
  Pro1,
  Pro2,
  C1,
  C2,
  S1,
  S2,
  rname,
  pool,
}) => {
  return (
    <>
      <div className="singlecontain">
        <div className="singleoverlay">
          <img src={process.env.PUBLIC_URL + C1} alt="" />
          <h1>{P1}</h1>
          <h1>{Pro1}</h1>
          <h1>{S1}</h1>

          <img src={process.env.PUBLIC_URL + C2} alt="" />
          <h1>{P2}</h1>
          <h1>{Pro2}</h1>
          <h1>{S2}</h1>

          <h1>{rname}</h1>
          <h1>{pool}</h1>
        </div>
      </div>
    </>
  );
};

export default ScoreboardSingle;
