import Links from "./Links";
import "./TeachersBill.css";
import Dropdown, {
  semesterOptions,
  semesterTitle,
  sessionTitle,
  sessionOptions,
} from "../SampleDropdown/Dropdown";
import "../SampleDropdown/styles.css";
import InvigilationComp from "./InvigilationComp";

const ChiefInvigilatorBill = () => {
  return (
    <>
      <Links />
      <div className="column">
        {/* <Links /> */}
        <form className="col-md-8 Form">
          <h1 className="text-center Form-title">Chief Invigilator Bill</h1>
          <div className="Flex-row Form-row">
            <div className="form-group col-md-5 Subrow1">
              <Dropdown
                options={semesterOptions}
                dropdownTitle={semesterTitle}
              />
            </div>
            <div className="form-group col-md-5 Subrow1">
              <Dropdown options={sessionOptions} dropdownTitle={sessionTitle} />
            </div>
          </div>

          <div className="col-md-7">
            <h5>Invigilation</h5>

            <InvigilationComp tag={"Invigilator's name"} />
          </div>
        </form>
      </div>
    </>
  );
};

export default ChiefInvigilatorBill;
