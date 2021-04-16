import React, { useState } from "react";

function Calc({ setHistories }) {
  const [score, setScore] = useState("0");
  const [clear, setClear] = useState(false);
  const [preScore, setPreScore] = useState(null);
  const [preOper, setPreOper] = useState(null);
  const [isOper, setIsOper] = useState(true); // 연산자인지 아닌지 판별 연속으로 들어왔을때 바꿔주기 위해서

  const onNumberClick = (n) => {
    setIsOper(false);
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
    setIsOper(true);
    if (preOper === null || isOper === true) {
      setPreOper(operator);
      setPreScore(score);
      console.log("inin");
    } else {
      let result;
      switch (preOper) {
        case "+":
          result = Number(preScore) + Number(score);
          break;
        case "-":
          result = Number(preScore) - Number(score);
          break;
        case "×":
          result = Number(preScore) * Number(score);
          break;
        case "÷":
          result = Number(preScore) / Number(score);
          break;
        default:
          break;
      }
      if (operator === "=") {
        setScore(result);
        setPreOper(null);
        setHistories((histories) => [
          histories,
          <tr>
            <td>
              {preScore} {preOper} {score} = {result}
            </td>
          </tr>,
        ]);
      } else {
        setScore(result);
        setPreScore(result);
        setPreOper(operator);
        setHistories((histories) => [
          histories,
          <tr>
            <td>
              {preScore} {preOper} {score} = {result}
            </td>
          </tr>,
        ]);
      }
    }
  };

  const operatorList = ["+", "-", "×", "÷"];

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
          {operatorList.map((operator) => {
            return (
              <div
                className="button button--deepblue"
                onClick={() => onOperatorClick(operator)}
              >
                {operator}
              </div>
            );
          })}
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
