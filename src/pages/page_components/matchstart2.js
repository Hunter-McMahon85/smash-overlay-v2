import React from "react";

const MatchStart2 = ({
  P11,
  P12,
  P21,
  P22,
  Pro11,
  Pro12,
  Pro21,
  Pro22,
  rname,
  pool,
}) => {
  return (
    <>
    <div className="start2contain">
  
      <h1>{P11}</h1>
      <h1>{Pro11}</h1>
      <h1>{P12}</h1>
      <h1>{Pro12}</h1>
      
      <h1>VS.</h1>
      
      <h1>{P21}</h1>
      <h1>{Pro21}</h1>
      <h1>{P22}</h1>
      <h1>{Pro22}</h1>
      
  
      <h1>{rname}</h1>
      <h1>{pool}</h1>
    </div>
    </>
    );
};

export default MatchStart2;
