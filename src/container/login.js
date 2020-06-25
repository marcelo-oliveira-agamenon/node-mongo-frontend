import React from "react";
import Userform from "../components/userForm";
import IconImg from "../assets/corpse.png";

export class Login extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: "#F7F7F7",
            height: "100vh",
            width: "100%",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              backgroundColor: "#6BA8CB",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              style={{
                alignSelf: "center",
              }}
            >
              <img
                src={IconImg}
                alt="Login"
                style={{ width: "400px", height: "390px", marginLeft: "200px" }}
              />
            </div>
          </div>
          <div style={{ display: "flex", padding: "0px 80px" }}>
            <div style={{ alignSelf: "center" }}>
              <Userform />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
