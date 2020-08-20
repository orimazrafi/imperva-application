import React, { useState } from 'react'
import { Breadcrumbs, Tabs, Tab } from '@material-ui/core'
// import { Tabs } from '@material-ui/core/Tabs';
import { IconAndText } from '../IconAndText/IconAndText';
import { TwoRowsAndIcon } from '../TwoRowsAndIcon/TwoRowsAndIcon';

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
                        <a className="hover" key={Math.random()} style={{ marginLeft: index === 0 && "-30px", color: index === 3 ? "unset" : 'var(--links-color)' }}>
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
                <div style={{ background: "white", border: "1px solid gray", display: "flex" }}>
                    <div>
                        <TwoRowsAndIcon
                            headline="CURRENT ACCOUNT"
                            lowerText="Your_Account_Name_"
                            uppercase
                            headerFontSize="12px"
                            left={"50px"}
                            pathname="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424   C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428   s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"
                        />
                    </div>
                    <div></div>
                </div>

            </div>
        </div>

    </div>
}