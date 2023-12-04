import React, { useState } from "react";
import entered_name from "./charnames";
import names_list_in_files from "./charfilenames";

function Names({ onClose }) {
  const [P11, setP11] = useState("");
  const [P12, setP12] = useState("");
  const [P21, setP21] = useState("");
  const [P22, setP22] = useState("");

  const [Pronoun11, setPronoun11] = useState("");
  const [Pronoun12, setPronoun12] = useState("");
  const [Pronoun21, setPronoun21] = useState("");
  const [Pronoun22, setPronoun22] = useState("");

  const [Char11, setChar11] = useState("");
  const [Char12, setChar12] = useState("");
  const [Char21, setChar21] = useState("");
  const [Char22, setChar22] = useState("");

  const [RoundName, setRoundName] = useState("");
  const [PoolName, setPoolName] = useState("");

  const handleP11 = (event) => {
    setP11(event.target.value);
  };

  function Handle_Entry() {
    
  }
  return (
    <>
      <h2>Round INFO</h2>
      <input type="text" value={RoundName} onChange={handleP11} />
      <input type="text" value={PoolName} onChange={handleP11} />

      <h2>Player Tags</h2>
      <h3>Player/Duo 1:</h3>
      <input type="text" value={P11} onChange={handleP11} />
      <input type="text" value={Pronoun11} onChange={handleP11} />

      <input id="l0" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l1" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l2" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l3" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l4" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l5" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l6" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l7" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      
      <input type="text" value={P12} onChange={handleP11} />
      <input type="text" value={Pronoun12} onChange={handleP11} />

      <input id="l0" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l1" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l2" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l3" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l4" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l5" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l6" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l7" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />

      <h3>Player/Duo 2:</h3>

      <input type="text" value={P21} onChange={handleP11} />
      <input type="text" value={Pronoun21} onChange={handleP11} />

      <input id="l0" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l1" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l2" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l3" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l4" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l5" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l6" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l7" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />

      <input type="text" value={P22} onChange={handleP11} />
      <input type="text" value={Pronoun22} onChange={handleP11} />

      <input id="l0" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l1" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l2" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l3" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l4" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l5" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l6" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />
      <input id="l7" type="image" alt="" src= {process.env.PUBLIC_URL +"/charicons/smashball.png"} />

      <button onClick={Handle_Entry()}>Enter</button>
      <button onClick={onClose}>Close</button>
    </>
  );
}

export default Names;
