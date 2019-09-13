import React from "react";

const Dashboard = props => {
  return (
    <div className="dashboardContainer">
      <strong>User Dashboard</strong>
      <div className="dashboardControls">
        <div className="dashboardButton">
          <h3>Strike</h3>
        </div>
        <div className="dashboardButton">
          <h3>Ball</h3>
        </div>
        <div className="dashboardButton">
          <h3>Foul</h3>
        </div>
        <div className="dashboardButton">
          <h3>Hit</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
