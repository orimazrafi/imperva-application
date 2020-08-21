import React, { useState } from 'react'
import { Breadcrumbs, Tabs, Tab } from '@material-ui/core'
import { TwoRowsAndIcon } from '../TwoRowsAndIcon/TwoRowsAndIcon';
import { CardContainer } from './../CardContainer/CardContainer';
import { Chart } from './../Chart/Chart';
import { timeframeChartConfig, trafficCharts, dataCharts } from "../../helpers"
import { IconAndText } from '../IconAndText/IconAndText';
import { Conatiner } from '../../elements';

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
                    <Chart
                        config={timeframeChartConfig}
                    />
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
                <CardContainer>
                    <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>

                        {trafficCharts.map(traffic =>
                            <Chart
                                key={Math.random()}
                                config={traffic}
                            />
                        )}
                    </div>

                </CardContainer>
                <Conatiner gap="10px">
                    {[{ label: "Per Data center" }, { label: "Per Origin center" }, { label: "Server list" }].map((chart, index) =>
                        <div key={Math.random()} style={{ flexGrow: index === 2 ? 2 : 1 }}>
                            <IconAndText
                                fontSize="18px"
                                fontWeight="bold"
                                text={chart.label}
                                icon="icon"
                                textOrder={1}
                                fill="black"
                                iconOrder={2}
                                justifyContent="space-between"
                                viewBox="0 0 1024 1205"
                                pathname="M338 641l181 181q10 10 23 10t23-10l181-181q9-9 9-22.5t-9-22.5q-10-9-23-9t-23 9L574 722V32q0-13-9.5-22.5T542 0t-22.5 9.5T510 32v690L384 596q-10-9-23-9t-23 9q-9 9-9 22.5t9 22.5zm622 95v192q0 13-9.5 22.5T928 960H96q-13 0-22.5-9.5T64 928V736q0-13-9.5-22.5T32 704t-22.5 9.5T0 736v224q0 26 19 45t45 19h896q26 0 45-19t19-45V736q0-13-9.5-22.5T992 704t-22.5 9.5T960 736z"
                                secondPathname="M192 32q0-13 9.5-22.5T224 0h768q13 0 22.5 9.5T1024 32q0 14-9.5 23T992 64H224q-13 0-22.5-9T192 32zM0 32Q0 18 9.5 9T32 0t22.5 9T64 32q0 13-9.5 22.5T32 64 9.5 54.5 0 32zm192 320q0-14 9.5-23t22.5-9h768q13 0 22.5 9t9.5 23q0 13-9.5 22.5T992 384H224q-13 0-22.5-9.5T192 352zM0 350q0-13 9.5-22.5T32 318t22.5 9.5T64 350q0 14-9.5 23T32 382t-22.5-9T0 350zm192 323q0-13 9.5-22.5T224 641h768q13 0 22.5 9.5t9.5 22.5-9.5 22.5T992 705H224q-13 0-22.5-9.5T192 673zM0 672q0-13 9.5-22.5T32 640t22.5 9.5T64 672t-9.5 22.5T32 704t-22.5-9.5T0 672z"
                            />
                            <CardContainer>
                                <Chart
                                    config={
                                        dataCharts[index]
                                    }
                                />
                            </CardContainer>
                        </div>)}
                </Conatiner>

            </div>
        </div>
    </div>
}