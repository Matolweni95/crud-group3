import React from "react";
import "../css/TeacherClass.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

const TeacherClass = () => {
  return (
    <div className="container">
      <div
        className="row"
        style={{ width: "300px", border: "1px solid black" }}
      >
        <div class="card">
          {" "}
          Classes
          <div className="col"> English</div>
          <div className="col"> Total learners </div>
        </div>
      </div>
      <br />
      <div
        className="row"
        style={{ width: "300px", border: "1px solid black" }}
      >
        <div class="card">
          {" "}
          <div className="col"> Maths</div>
          <div className="col"> Total learners</div>{" "}
        </div>
      </div>
    </div>
  );
};

export default TeacherClass;
