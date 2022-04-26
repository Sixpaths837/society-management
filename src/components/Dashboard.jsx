import React from "react";
import Issues from "./Issues";

function Dashboard(props) {
  return (
    <div>
      <Issues user={props.user} />
    </div>
  );
}

export default Dashboard;
