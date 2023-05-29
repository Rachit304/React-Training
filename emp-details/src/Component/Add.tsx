import React from "react";
const Add = () => {
  return (
    <div>
      <div className="row mb-3">
        <label
          htmlFor="colFormLabel"
          className="col-sm-2 col-form-label col-form-label-lg"
        >
          Username
        </label>

        <div className="col-sm-10">
          <input
            type="text"
            className="form-control form-control-lg"
            id="colFormLabelLg"
            placeholder="Enter the username"
          />
        </div>
      </div>

      <div className="row mb-3">
        <label
          htmlFor="colFormLabel"
          className="col-sm-2 col-form-label col-form-label-lg"
        >
          CompanyName
        </label>

        <div className="col-sm-10">
          <input
            type="text"
            className="form-control form-control-lg"
            id="colFormLabel"
            placeholder="company name"
          />
        </div>
      </div>

      <div className="row">
        <label
          htmlFor="colFormLabelLg"
          className="col-sm-2 col-form-label col-form-label-lg"
        >
          UserType
        </label>

        <div className="col-sm-10">
          <input
            type="text"
            className="form-control form-control-lg"
            id="colFormLabelLg"
            placeholder="usertype"
          />
        </div>
      </div>
      <br></br>
      <button className="btn btn-secondary">Save</button>
    </div>
  );
};
export default Add;
