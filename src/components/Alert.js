import React from "react";

export default function Alert() {
  return (
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Limit 5 cities input</strong>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

// $(".alert").alert();
