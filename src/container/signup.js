import React from "react";

import SignupForm from "../components/signupForm";

export class SignUp extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            height: "100vh",
            width: "100%",
            backgroundColor: "#8388B8",
          }}
        >
          <div style={{ marginLeft: "150px", paddingTop: "20px" }}>
            <SignupForm />
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
