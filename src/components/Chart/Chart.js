import React from 'react'
import ReactHighcharts from "react-highcharts";
import Highlight from "react-highlight"
export const Chart = props => {
    return <div>
        <ReactHighcharts config={props.config} />
        <Highlight />
    </div>
}