import React from "react";

function History(props) {
  return (
    <div className="history">
      <div className="history__title">History</div>
      <table className="history__table">
        {props.histories.map((history) => {
          return <>{history}</>;
        })}
      </table>
    </div>
  );
}

export default History;
