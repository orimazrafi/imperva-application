import React, { useState } from 'react'
import { Breadcrumbs, Tabs, Tab } from '@material-ui/core'
import { TwoRowsAndIcon } from '../TwoRowsAndIcon/TwoRowsAndIcon';
import ReactHighcharts from "react-highcharts";
import Highlight from "react-highlight"
import { CardContainer } from './../CardContainer/CardContainer';
var config = {
    chart: {
        type: "areaspline",
        zoomType: "x",
        width: 1100,
        height: 120
    },
    credits: {
        enabled: false
    },
    title: {
        text: "Timeframe (req/sec total)",
        align: "left",
        style: {
            color: 'var(--links-color)',

            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }

    },
    yAxis: { title: { text: "" } },
    xAxis: {
        title: { text: "" },
    },

    series: [{
        data: [
            { name: "13.50", x: 13.5, y: 0.2 },
            { name: "13.51", x: 13.51, y: 0.32 },
            { x: 13.52, y: 0.72 },
            { x: 13.53, y: 0.02 },
            { x: 13.54, y: 0.22 },
            { x: 13.55, y: 0.25 },
            { x: 13.56, y: 0.52 },
            { x: 13.57, y: 0.52 },
            { x: 13.58, y: 0.627 },
            { x: 13.59, y: 0.27 },
            { x: 14.00, y: 0.72 },
            { name: "now", x: 14.02, y: 0.27 },
        ]
    }]
};
export const RealTimeComponent = (props) => {
    const [value, setValue] = useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return <div style={
        {
            flexGrow: "20", width: "85%",
            padding: "0 0 0 10px",
        }
    }

    ><div className="breadcrumbs-wrapper" style={{
        background: `var(--light-background)`, height: "calc(100vh - 60px)",
    }}>
            <div style={{ padding: "20px 80px 0 20px" }}>

                <Breadcrumbs aria-label="breadcrumb">
                    {["Incapsula Sales", "Your_Account_Name", "WAF Dashboards", "Site_Name_1"].map((link, index) =>
                        <a href="/" className="hover" key={Math.random()} style={{ marginLeft: index === 0 && "-30px", textDecoration: "none", color: index === 3 ? "unset" : 'var(--links-color)' }}>
                            {link}
                        </a>
                    )}

                </Breadcrumbs>

                <div className="realtime-tabs-container">

                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                    >

                        {[{ label: "Security" }, { label: "Performance" }, { label: "Real_Time" }].map(tab =>
                            <Tab key={Math.random()}
                                label={tab.label}
                            />
                        )}
                    </Tabs>
                </div>
                <CardContainer>
                    <div style={{ borderRight: "1px solid var(--light-border)", paddingRight: "50px" }}>
                        <TwoRowsAndIcon
                            color="var(--links-color)"
                            headline="Assets"
                            height="7px"
                            lowerText="Specific_site_name_1"
                            headerFontSize="14px"
                            fill="black"
                            top="15px"
                            left={"120px"}
                            viewBox="0 0 1024 574"
                            pathname="M1015 10q-10-10-23-10t-23 10L512 492 55 10Q45 0 32 0T9 10Q0 20 0 34t9 24l480 506q10 10 23 10t23-10l480-506q9-10 9-24t-9-24z"
                        />
                    </div>
                    <div>

                        <ReactHighcharts config={config} />
                        <Highlight />
                    </div>
                </CardContainer>
                <div style={{ margin: "5px 0", fontWeight: "bold" }}>Overall traffic</div>
                <CardContainer>
                    <div style={{ display: "flex" }}>

                        {[{ headline: "Passed to Origin Server", lowerText: "2.6k" },
                        { headline: "Requests Blocked", lowerText: "3" },
                        { headline: "Total", lowerText: "536Mbps" },
                        { headline: "Overall", lowerText: "2.6k" },
                        { headline: "Served from Cache", lowerText: "0" },
                        ].map(data =>
                            <div style={{ margin: "10px" }} key={Math.random()}>
                                <TwoRowsAndIcon
                                    color="gray"
                                    headline={data.headline}
                                    lowerText={data.lowerText}
                                    headerFontSize="16px"
                                    fill="black"
                                    strongLowerText
                                />
                            </div>
                        )}
                    </div>

                </CardContainer>
            </div>
        </div>

    </div>
}