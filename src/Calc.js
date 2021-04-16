import React, { useState } from "react";

function Calc({ setHistories }) {
  const [score, setScore] = useState("0");
  const [clear, setClear] = useState(false);
  const [preScore, setPreScore] = useState(null);
  const [preOper, setPreOper] = useState(null);
  const onNumberClick = (n) => {
    if (score != "0" && clear === false) {
      setScore(score + n);
    } else {
      setScore(n);
      setClear(false);
    }
  };

  const onAcClick = () => {
    setScore("0");
    setClear(true);
    setPreScore(null);
  };

  const onOperatorClick = (operator) => {
    setClear(true);
    if (preOper === null) {
      setPreOper(operator);
      setPreScore(score);
    } else {
      let result;
      switch (preOper) {
        case "+":
          result = Number(preScore) + Number(score);
          break;
        case "-":
          result = Number(preScore) - Number(score);
          break;
        case "*":
          result = Number(preScore) * Number(score);
          break;
        case "/":
          result = Number(preScore) / Number(score);
          break;
        default:
          break;
      }
      if (operator === "=") {
        setScore(result);
        setPreOper(null);
      } else {
        setScore(result);
        setPreScore(result);
        setPreOper(operator);
      }
    }
  };

  return (
    <div className="calc">
      <div className="calc__title">Calculator</div>
      <div className="calc__score">{score}</div>
      <div className="calc__keyboard">
        <div className="calc__keyboard__main">
          <div
            className="button calc__keyboard__ac"
            onClick={() => onAcClick()}
          >
            AC
          </div>
          <div class="calc__keyboard__number">
            {new Array(3).fill().map((_, lineIdx) => {
              return (
                <div key={lineIdx} class="calc__keyboard__number__line">
                  {new Array(3).fill().map((_, nIdx) => {
                    const num = nIdx + 1 + lineIdx * 3;
                    return (
                      <div
                        key={num}
                        class="button button--blue"
                        onClick={() => onNumberClick(num.toString())}
                      >
                        {num}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div
            className="button button--blue--big"
            onClick={() => onNumberClick(0)}
          >
            0
          </div>
        </div>
        <div className="calc__keyboard__operator">
          <div
            className="button button--deepblue"
            onClick={() => onOperatorClick("+")}
          >
            +
          </div>
          <div
            className="button button--deepblue"
            onClick={() => onOperatorClick("-")}
          >
            -
          </div>
          <div
            className="button button--deepblue"
            onClick={() => onOperatorClick("*")}
          >
            ×
          </div>
          <div
            className="button button--deepblue"
            onClick={() => onOperatorClick("/")}
          >
            ÷
          </div>
          <div
            className="button button--pink"
            onClick={() => onOperatorClick("=")}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calc;
