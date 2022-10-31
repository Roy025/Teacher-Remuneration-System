import React from "react";
import Dropdown, {
  semesterOptions,
  semesterTitle,
  sessionTitle,
  sessionOptions,
} from "../SampleDropdown/Dropdown";
import Links from "./Links";

function ChiefInvigilatorForm() {
  return (
    <div className="row Full-form-page">
      <Links />
      <div className="col-md-10 Form">
        <div className="row">
          <div className="form-group col-md-5">
            <Dropdown options={semesterOptions} dropdownTitle={semesterTitle} />
          </div>
          <div className="form-group col-md-5">
            <Dropdown options={sessionOptions} dropdownTitle={sessionTitle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChiefInvigilatorForm;
