import React from "react";
import ContactComp from "../../components/dashboard/contactComponent";

export class Dashboard extends React.Component {
  render() {
    return (
      <div
        style={{ width: "100%", height: "100vh", backgroundColor: "#568D62" }}
      >
        <div>
          <h1 style={{ backgroundColor: "#ffffff" }}>
            CHAT - WELCOME TO YOUR DASHBOARD
          </h1>
        </div>
        <div>
          <ContactComp />
        </div>
      </div>
    );
  }
}

export default Dashboard;
