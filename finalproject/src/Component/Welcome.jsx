import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import bg from "../Assets/welcomebg2.avif";
import "./Welcome.css";
import welcometop from "../Assets/weltop1.webp";
import { Container, Row, Col } from "react-bootstrap";
import loader from "../Assets/loder.gif";
import poster2 from "../Assets/poster2.jpg";
const Welcome = () => {
  const location = useLocation();
  const usrnm = location.state?.usrnm;

  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/Home", { state: { usrnm } });
  }, 6000);

  return (
    <div className="mainbg">
      <div>
        {/* <img
          src={welcometop}
          style={{
            position: "absolute",
            right: "10px",
            width: "100%",
            top: "-100",
          }}
        ></img> */}
      </div>
      <p
        style={{
          color: "white",
          fontSize: "50px",
          marginLeft: "300px",
          marginTop: "230px",
          color: "black",
        }}
        className="kalam-regular"
      >
        Welcome {usrnm} <br></br>You are being Redirected... to get the Vibes
      </p>
      <img
        src={loader}
        style={{ marginLeft: "690px", marginTop: "10px" }}
        height={"100px"}
      ></img>
      {/* <img src={poster2} height={"500px"}></img> */}
    </div>
  );
};

export default Welcome;
