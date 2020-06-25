import React from "react";
import { useHistory } from "react-router-dom";

function Signup() {
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form
        style={{
          width: "550px",
          height: "700px",
          backgroundColor: "#DBEBF3",
          boxShadow: "2px 2px 5px #DBEBF3, -2px -2px 5px #DBEBF3",
          borderRadius: 5,
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontFamily: "Open Sans, sans-serif",
              fontSize: "28px",
              color: "#005281",
              textTransform: "uppercase",
              letterSpacing: 2,
              fontWeight: "lighter",
            }}
          >
            Signup
          </h2>
        </div>
        <div>
          <label
            style={{
              fontFamily: "Open Sans, sans-serif",
              color: "#005281",
              letterSpacing: 1,
              fontSize: "14px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Name
          </label>
          <input
            type="text"
            style={{
              borderRadius: 15,
              outline: "none",
              borderStyle: "none",
              padding: "5px 2px",
            }}
          />
        </div>
        <div>
          <label
            style={{
              fontFamily: "Open Sans, sans-serif",
              color: "#005281",
              letterSpacing: 1,
              fontSize: "14px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Email
          </label>
          <input
            type="text"
            style={{
              borderRadius: 15,
              outline: "none",
              borderStyle: "none",
              padding: "5px 2px",
            }}
          />
        </div>
        <div>
          <label
            style={{
              fontFamily: "Open Sans, sans-serif",
              color: "#005281",
              letterSpacing: 1,
              fontSize: "14px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Phone
          </label>
          <input
            type="text"
            style={{
              borderRadius: 15,
              outline: "none",
              borderStyle: "none",
              padding: "5px 2px",
            }}
          />
        </div>
        <div>
          <label
            style={{
              fontFamily: "Open Sans, sans-serif",
              color: "#005281",
              letterSpacing: 1,
              fontSize: "14px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Password
          </label>
          <input
            type="text"
            style={{
              borderRadius: 15,
              outline: "none",
              borderStyle: "none",
              padding: "5px 2px",
            }}
          />
        </div>
        <div>
          <button
            type="submit"
            style={{
              color: "#FFFFFF",
              letterSpacing: 5,
              textTransform: "uppercase",
              backgroundColor: "#005281",
              fontFamily: "Open Sans, sans-serif",
              cursor: "pointer",
            }}
          >
            Register
          </button>
          <button
            style={{
              backgroundColor: "#E7EAEC",
              borderRadius: 1,
              fontFamily: "Open Sans, sans-serif",
              fontWeight: "lighter",
              cursor: "pointer",
            }}
            onClick={() => history.push("/")}
          >
            Already have a account? Login
          </button>
        </div>
      </form>
    </>
  );
}

export default Signup;
