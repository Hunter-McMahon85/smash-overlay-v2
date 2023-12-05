import React, { useState, useEffect } from "react";
import ScoreboardSingle from "./page_components/singles";
import ScoreboardDuo from "./page_components/doubles";
import MatchStart1 from "./page_components/matchstart1";
import MatchStart2 from "./page_components/matchstart2";

function Scoreboard() {
  
  const [ScoreType, setScoreType] = useState("");
  const [PrevScoreType, setPrevScoreType] = useState("");

  const [ScoreBug, setScoreBug] = useState("");

  const reload = () => {
    setPrevScoreType(ScoreType);
    setScoreType(localStorage.getItem("ScoreboardType"));
    if (ScoreType !== PrevScoreType) {
      switch (ScoreType) {
        case "single":
          setScoreBug(<ScoreboardSingle />);
          break;
        case "double":
          setScoreBug(
            <ScoreboardDuo/>
          );
          break;
        case "singlestart":
          setScoreBug(
            <MatchStart1/>
          );
          break;
        case "doublestart":
          setScoreBug(
            <MatchStart2/>
          );
          break;
        default:
          setScoreBug(<></>);
          break;
      }
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
