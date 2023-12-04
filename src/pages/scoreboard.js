import React, { useState, useEffect } from "react";
import ScoreboardSingle from "./page_components/singles";
import ScoreboardDuo from "./page_components/doubles";
import MatchStart1 from "./page_components/matchstart1";
import MatchStart2 from "./page_components/matchstart2";

function Scoreboard() {
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

  const [P1Score, setP1Score] = useState(0);
  const [P2Score, setP2Score] = useState(0);
  const [RoundName, setRoundName] = useState("");
  const [PoolName, setPoolName] = useState("");
  const [ScoreType, setScoreType] = useState("");

  const [ScoreBug, setScoreBug] = useState("");

  const reload = () => {
    setP11(localStorage.getItem("p11"));
    setP12(localStorage.getItem("p12"));
    setP21(localStorage.getItem("p21"));
    setP22(localStorage.getItem("p22"));

    setPronoun11(localStorage.getItem("Pronoun11"));
    setPronoun12(localStorage.getItem("Pronoun12"));
    setPronoun21(localStorage.getItem("Pronoun21"));
    setPronoun22(localStorage.getItem("Pronoun22"));

    setChar11(localStorage.getItem("Char11"));
    setChar12(localStorage.getItem("Char12"));
    setChar21(localStorage.getItem("Char21"));
    setChar22(localStorage.getItem("Char22"));

    setP1Score(localStorage.getItem("p1score"));
    setP2Score(localStorage.getItem("p2score"));
    setRoundName(localStorage.getItem("round"));
    setPoolName(localStorage.getItem("pool"));

    setScoreType(localStorage.getItem("ScoreboardType"));
    
    switch (ScoreType) {
      case "single":
        setScoreBug(
          <ScoreboardSingle
            P1={P11}
            P2={P21}
            Pro1={Pronoun11}
            Pro2={Pronoun21}
            C1={Char11}
            C2={Char21}
            S1={P1Score}
            S2={P2Score}
            rname={RoundName}
            pool={PoolName}
          />
        );
        break;
      case "double":
        setScoreBug(
          <ScoreboardDuo
            P11={P11}
            P12={P12}
            P21={P21}
            P22={P22}
            Pro11={Pronoun11}
            Pro12={Pronoun12}
            Pro21={Pronoun21}
            Pro22={Pronoun22}
            C11={Char11}
            C12={Char12}
            C21={Char21}
            C22={Char22}
            S1={P1Score}
            S2={P2Score}
            rname={RoundName}
            pool={PoolName}
          />
        );
        break;
      case "singlestart":
        setScoreBug(
          <MatchStart1
            P1={P11}
            P2={P21}
            Pro1={Pronoun11}
            Pro2={Pronoun21}
            rname={RoundName}
            pool={PoolName}
          />
        );
        break;
      case "doublestart":
        setScoreBug(
          <MatchStart2
            P11={P11}
            P12={P12}
            P21={P21}
            P22={P22}
            Pro11={Pronoun11}
            Pro12={Pronoun12}
            Pro21={Pronoun21}
            Pro22={Pronoun22}
            rname={RoundName}
            pool={PoolName}
          />
        );
        break;
      default:
        setScoreBug(
          <></>
        )
        break;
    }
  };

  useEffect(() => {
    reload();
    const interval = setInterval(reload, 1);
    // this is so if this page is used as a component the interval ends
    // when the component is closed
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <>
      <div className="scoreboardcontain">{ScoreBug}</div>
    </>
  );
}

export default Scoreboard;
