import React from "react";

const ScoreboardDuo = ({
  P11,
  P12,
  P21,
  P22,
  Pro11,
  Pro12,
  Pro21,
  Pro22,
  C11,
  C12,
  C21,
  C22,
  S1,
  S2,
  rname,
  pool,
}) => {
  return (
    <>
    <div className="start2contain">
    <img src={process.env.PUBLIC_URL + C11} alt="" />
      <h1>{P11}</h1>
      <h1>{Pro11}</h1>
      <img src={process.env.PUBLIC_URL + C12} alt="" />
      <h1>{P12}</h1>
      <h1>{Pro12}</h1>
      <h1>{S1}</h1>
      
      <h1>VS.</h1>
      
      <img src={process.env.PUBLIC_URL + C21} alt="" />
      <h1>{P21}</h1>
      <h1>{Pro21}</h1>
      <img src={process.env.PUBLIC_URL + C22} alt="" />
      <h1>{P22}</h1>
      <h1>{Pro22}</h1>
      <h1>{S2}</h1>
      
  
      <h1>{rname}</h1>
      <h1>{pool}</h1>
    </div>
    </>
    );
};

export default ScoreboardDuo;
