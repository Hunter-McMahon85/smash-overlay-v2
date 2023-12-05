import React, { useEffect, useState } from "react";
import "../css/doubles.css";

const ScoreboardDuo = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [P11, setP11] = useState("");
  const [P12, setP12] = useState("");
  const [P21, setP21] = useState("");
  const [P22, setP22] = useState("");

  const [Pro11, setPro11] = useState("");
  const [Pro12, setPro12] = useState("");
  const [Pro21, setPro21] = useState("");
  const [Pro22, setPro22] = useState("");

  const [C11, setC11] = useState("");
  const [C12, setC12] = useState("");
  const [C21, setC21] = useState("");
  const [C22, setC22] = useState("");

  const [S1, setS1] = useState(0);
  const [S2, setS2] = useState(0);
  const [Rname, setRname] = useState("");
  const [Pool, setPool] = useState("");


  const reload = () => {
    setP11(localStorage.getItem("p11"));
    setP12(localStorage.getItem("p12"));
    setP21(localStorage.getItem("p21"));
    setP22(localStorage.getItem("p22"));

    setPro11(localStorage.getItem("Pronoun11"));
    setPro12(localStorage.getItem("Pronoun12"));
    setPro21(localStorage.getItem("Pronoun21"));
    setPro22(localStorage.getItem("Pronoun22"));

    setC11(localStorage.getItem("Char11"));
    setC12(localStorage.getItem("Char12"));
    setC21(localStorage.getItem("Char21"));
    setC22(localStorage.getItem("Char22"));

    setS1(localStorage.getItem("p1score"));
    setS2(localStorage.getItem("p2score"));
    setRname(localStorage.getItem("round"));
    setPool(localStorage.getItem("pool"));
  };

  useEffect(() => {
    const interval = setInterval(reload, 1);
    // Trigger animation after component is mounted
    setIsAnimated(true);
    reload();
    
    return () => {
      clearInterval(interval);
    };
  }, [isAnimated]);

  return (
    <>
      <div className={`doublecontain ${isAnimated ? "slide-in" : ""}`}>
        <div className="doubleoverlay">
          <img
            src={process.env.PUBLIC_URL + "/logo.jpg"}
            height="88"
            width="88"
            alt=""
            className="logo"
          />
          <div class="doubletag">
            <div class="duo">
              <img
                src={process.env.PUBLIC_URL + C11}
                height="32"
                width="32"
                alt=""
              />
              <h1 className="doublename">{P11}</h1>
              <h1 className="doublepronoun">{Pro11}</h1>
            </div>
            <div class="duo">
              <img
                src={process.env.PUBLIC_URL + C12}
                height="32"
                width="32"
                alt=""
              />
              <h1 className="doublename">{P12}</h1>
              <h1 className="doublepronoun">{Pro12}</h1>
            </div>
          </div>
          <h1 className="doublsscore">{S1}</h1>

          <div class="doubletag">
            <div class="duo">
              <img
                src={process.env.PUBLIC_URL + C21}
                height="32"
                width="32"
                alt=""
              />
              <h1 className="doublename">{P21}</h1>
              <h1 className="doublepronoun">{Pro21}</h1>
            </div>
            <div class="duo">
              <img
                src={process.env.PUBLIC_URL + C22}
                height="32"
                width="32"
                alt=""
              />
              <h1 className="doublename">{P22}</h1>
              <h1 className="doublepronoun">{Pro22}</h1>
            </div>
          </div>
          <h1 className="doublsscore">{S2}</h1>

          <h1 className="doubleround">{Rname}</h1>
          <h1 className="doublepool">{Pool}</h1>
        </div>
      </div>
    </>
  );
};

export default ScoreboardDuo;
