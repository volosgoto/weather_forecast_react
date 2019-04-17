import React from "react";

export default function Spinner() {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col text-center mt-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
