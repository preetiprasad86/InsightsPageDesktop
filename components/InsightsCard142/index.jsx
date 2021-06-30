import React from "react";
import Button82 from "../Button82";
import "./InsightsCard142.css";

function InsightsCard142(props) {
  const { x1600I26012682202, propertyTaxI26012, button8Props } = props;

  return (
    <div className="insights-card-6">
      <div className="group-69-6">
        <div className="x1600-i26012682202 valign-text-middle typographyheadlineh2-extrabold-40">
          {x1600I26012682202}
        </div>
        <div className="property-tax-i26012-5 valign-text-middle typographybodycaption-14-semi-bold">
          {propertyTaxI26012}
        </div>
      </div>
      <Button82>{button8Props.children}</Button82>
    </div>
  );
}

export default InsightsCard142;
