import React, { useState } from "react";

function Calc({ setHistories }) {
  const [score, setScore] = useState();
  const onNumberClick = (num) => {
    setScore(num);
  };

  return (
    <div className="calc">
      <div className="calc__title">Calculator</div>
      <div className="calc__score">{score}</div>
      <div className="calc__keyboard">
        <div className="calc__keyboard__main">
          <div className="button calc__keyboard__ac">AC</div>
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
                        onClick={() => onNumberClick(num)}
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
          <div className="button button--deepblue">+</div>
          <div className="button button--deepblue">-</div>
          <div className="button button--deepblue">×</div>
          <div className="button button--deepblue">÷</div>
          <div className="button button--pink">=</div>
        </div>
      </div>
    </div>
  );
}

export default Calc;
