import React from "react";
import logo from "../logo.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container" style={{ marginTop: 20, marginLeft: 20 }}>
      <div className="row">
        <img src={logo} alt="" />
      </div>

      <div className="d-flex justify-content-center align-items-center mt-5">
        <Link to="/newrequest">
          <Button>Create new care request</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
