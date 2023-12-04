import React from "react";
import "../css/ms1.css";

const MatchStart1 = ({ 
  P1, 
  P2, 
  Pro1, 
  Pro2, 
  rname, 
  pool 
}) => {
  return (
    <>
    <div className="ms1">
     
      <h1>{P1}</h1>
      <h1>{Pro1}</h1>
      
      <h1>VS. &</h1>
      
      <h1>{P2}</h1>
      <h1>{Pro2}</h1>
      
  
      <h1>{rname}</h1>
      <h1>{pool}</h1>
    </div>
    </>
    );
};

export default MatchStart1;
