import React from "react";
import "./jumbotron.css";
import logo from "../../assets/images/SteerClearTitle2.png";

const Jumbotron = () => (
    <div className="title-head">
        <img src={logo} alt="logo" />

    </div>
);

export default Jumbotron;

// const Jumbotron = ({ children }) => (
//     <div
//       style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
//       className="jumbotron"
//     >
//       {children}
//     </div>
//   );
  
//   export default Jumbotron;