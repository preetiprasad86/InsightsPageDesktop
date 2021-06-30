import React from "react";
import Frame1578 from "../Frame1578";
import Frame53 from "../Frame53";
import Frame6 from "../Frame6";
import Frame7 from "../Frame7";
import "./Footer22.css";

function Footer22(props) {
  const { group8622Props, frame53Props, frame6Props, frame7Props } = props;

  return (
    <div className="footer">
      <div className="frame-1585">
        <Frame1578
          overlapGroup2={group8622Props.overlapGroup2}
          vector2={group8622Props.vector2}
          group86222Props={group8622Props.group86222Props}
          facebookAppSymbol3Props={group8622Props.facebookAppSymbol3Props}
          twitter3Props={group8622Props.twitter3Props}
        />
        <Frame53 text40={frame53Props.text40} frame4Props={frame53Props.frame4Props} />
        <Frame6
          text48={frame6Props.text48}
          frame42Props={frame6Props.frame42Props}
          frame422Props={frame6Props.frame422Props}
        />
      </div>
      <Frame7 text56={frame7Props.text56} frame4Props={frame7Props.frame4Props} />
    </div>
  );
}

export default Footer22;
