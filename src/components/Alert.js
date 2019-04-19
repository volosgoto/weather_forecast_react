import React, { Component } from "react";

export default class Alert extends Component {

  state = {
    showAlert: true
  };

  render() {
    const { showAlert } = this.state;
    return (
      <div>
        {showAlert && (
          <div className="alert alert-warning alert-dismissible">
            <button
              onClick={() =>
                this.setState({
                  showAlert: false
                })
              }
              type="button" class="close" data-dismiss="alert">
              &times;
            </button>
            <strong>Warning!</strong> Limit 5 cities input!
        </div>
        )}
      </div>


    );
  }
}

// $(".alert").alert();
