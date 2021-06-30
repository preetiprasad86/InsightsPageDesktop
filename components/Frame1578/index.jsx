import React from "react";
import Group86222 from "../Group86222";
import Group324 from "../Group324";
import FacebookAppSymbol3 from "../FacebookAppSymbol3";
import Twitter3 from "../Twitter3";
import "./Frame1578.css";

function Frame1578(props) {
  const { overlapGroup2, vector2, group86222Props, facebookAppSymbol3Props, twitter3Props } = props;

  return (
    <div className="frame-1578">
      <Group86222 group85={group86222Props.group85} whiteProps={group86222Props.whiteProps} />
      <div className="frame-1584">
        <Group324 />
        <div className="frame-1583">
          <FacebookAppSymbol3 src={facebookAppSymbol3Props.src} />
          <div className="instagram">
            <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <img
                className="vector-1"
                src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-95@2x.svg"
              />
              <img className="vector-2" src={vector2} />
            </div>
          </div>
          <Twitter3 src={twitter3Props.src} />
        </div>
      </div>
    </div>
  );
}

export default Frame1578;
