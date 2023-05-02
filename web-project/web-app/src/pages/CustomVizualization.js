import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import '../styles.css';

import V1 from "../components/V1";
import V2 from "../components/V2";
import V3 from "../components/V3";
import V4 from "../components/V4";
import V5 from "../components/V5";

axios.defaults.baseURL = "http://localhost:8090"

export default function CustomVizualization() {
    const { url } = useParams();
    const [getSuccess, setGetSuccess] = useState(true);
    const [viewData, setViewData] = useState([]);
    const [title , setTitle] = useState("");
    const [descriptions , setDescriptions] = useState({});
    const [layout , setLayout] = useState(false);
    const [creator, setCreator] = useState("");

    const Visualizations = {
        v1: <V1 key='v1' description={descriptions['v1']} />,
        v2: <V2 key='v2' description={descriptions['v2']} />,
        v3: <V3 key='v3' description={descriptions['v3']} />,
        v4: <V4 key='v4' description={descriptions['v4']} />,
        v5: <V5 key='v5' description={descriptions['v5']} />
    };
    // console.log(Object.keys(Visualizations));

    useEffect(() => {
        axios.get(`/customviews/${url}`)
            .then(response => {
                // console.log("get response:", response);
                if (response.status === 200) {
                    setGetSuccess(true);

                    const data = response.data.view;
                    const selectedCharts = response.data.visualizations.split(",");
                   // console.log("selected charts:", selectedCharts);
                    setLayout(response.data.layout);
                   // console.log("layout:", response.data.layout);
                    setViewData(selectedCharts);
                   // console.log("view data:", selectedCharts);
                    setTitle(response.data.title);
                   // console.log("title:", response.data.title);
                    setCreator(response.data.username);
                   // console.log("creator:", response.data.username);

                    const selectedDescriptions = [response.data.description1, response.data.description2, response.data.description3, response.data.description4, response.data.description5];
                    
                    let tempDescription = {};

                    for (let i = 0; i < selectedCharts.length; i++) {
                        tempDescription[selectedCharts[i]] = selectedDescriptions[i];
                    }

                    setDescriptions(tempDescription);
                } else {
                    setGetSuccess(false);
                }
            })
            .catch(error => {
                console.log(error);
                setGetSuccess(false);
            });
    }, [url]);
    // console.log("Visualizations:", Visualizations);
    // console.log("Descriptions:", descriptions);
    return (
      <>
          <div className="customVisualization" style={{paddingLeft: '70px'}}>
              <h2>{title}</h2>
              <p>View created by: {creator}</p>
          </div>
          <div className={`visualizationContainer ${layout ? "stacked" : "sidebyside"}`}>
              {viewData.map((view, i) => {
                  if (Visualizations[view]) {
                      return (
                          <div key={`view-${i}`} className={layout ? "chartContainer-stacked" : "chartContainer-sidebyside"}>
                              {Visualizations[view]}
                          </div>
                      );
                  } else {
                      console.log(`Visualization '${view}' is not defined`);
                      return null;
                  }
              })}
          </div>
      </>
  );
}
