import React from "react";

const Display = props => {
  return (
    <div>
      <h1>At Bat Stats</h1>
      <div className="statsContainer">
        <div>
          <h3>Balls</h3>
          <p>{100}</p>
        </div>
        <div>
          <h3>Fouls</h3>
          <p>{100}</p>
        </div>
      </div>
    </div>
  );
};

export default Display;
