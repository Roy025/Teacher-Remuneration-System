import React from "react";
import { Button } from "../Buttons/Button";
import { Link } from "react-router-dom";
import "./PageBlock.css";

function PageBlock({
  lightTheme,
  topLine,
  textTheme,
  textDescriptionTheme,
  headline,
  description,
  buttonLabel,
  image,
  alt,
  imageStartLocation,
}) {
  return (
    <>
      <div className="Home_block">
        <div className="Container">
          <div className="Row Home-block-row">
            <div className="Col">
              <div
                className="Home-block-text-wrapper"
                style={{
                  display: "flex",
                  flexDirection: (imageStartLocation = "start"
                    ? "row-reverse"
                    : "row"),
                }}
              >
                <div className="Top-line">
                  {topLine}
                  <h1 className={textTheme}>{headline}</h1>
                  <p className={textDescriptionTheme}>{description}</p>
                  <Link to="/teachersbill">
                    <Button buttonSize="btn--wide" buttonColor="blue">
                      {buttonLabel}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageBlock;
