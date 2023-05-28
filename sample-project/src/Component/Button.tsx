import React, { useState } from "react";
interface Props {
  name: String;
}

function Button(props: Props) {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      {showAlert && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          This is an alert message!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={handleCloseAlert}
          ></button>
        </div>
      )}

      <button className="btn btn-primary" onClick={handleClick}>
        Show Alert
      </button>
    </div>
  );
}

export default Button;
