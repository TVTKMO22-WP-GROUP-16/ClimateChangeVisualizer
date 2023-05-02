import React from "react";
import V1 from "../components/V1";
import V2 from "../components/V2";
import V3 from "../components/V3";
export default function Charts1() {

  return (
    <div className="charts1">
      <h1>Lämpötilatiedot ja CO2 pitoisuudet</h1>
      <div className="lineCharts">
      <V1/>
      <V2/>
      <V3/>
      </div>
    </div>
  );
}

