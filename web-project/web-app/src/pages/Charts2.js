import React from "react";
import V4 from "../components/V4";
import V5 from "../components/V5";

export default function Charts2() {

  return (
    <div className="charts2">
      <h1>Päästölähteet</h1>
      <div className="lineCharts">
      <V4/>
      </div>     
      <div className="V5">
      <V5/>
      </div>     
    </div>
  );
}