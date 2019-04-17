import React from "react";
import { Link } from "react-router-dom";

let style = {
  background: "gray"
};

export default function NotFound() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col">
          <div style={style}>
            <h1 className="ml-5 mt-5 pt-5">Page not found</h1>

            <div className="ml-5 mb-5 pb-5">
              <Link to="/" className="btn btn-success">
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
