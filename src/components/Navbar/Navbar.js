import React, { useState } from 'react'
import { SideBorder } from './../SideBorder/SideBorder';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { IconAndText } from '../IconAndText/IconAndText';
import style from "./style.module.scss";
export const Navbar = props => {
    const [value, setValue] = useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div style={{ background: "black", height: "60px", color: "white" }}>
            <div style={{ display: "flex", height: "60px", alignItems: "center" }}>
                <div style={{ fontSize: "24px", fontWeight: "500", marginLeft: "15px" }}>
                    Imperva
                </div>
                <SideBorder />
                <div>

                    <div style={{ display: "flex", marginRight: "80px" }}>
                        <div style={{ color: "gray", fontSize: "14px" }}>
                            CURRENT ACCOUNT
                        </div>
                        <SvgIcon
                            position="relative"
                            top="12px"
                            left="34px"
                            pathname="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424   C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428   s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"
                        />
                    </div>
                    <div>
                        Your_Account_Name_
                    </div>
                </div>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >

                    {[{ label: "Home", margin: "0 0 4px 0" }, { label: "Application", icon: "icon" }, { label: "Edge", icon: "icon" }, { label: "Data", icon: "icon" }].map(tab =>
                        <Tab key={Math.random()}
                            label={<IconAndText
                                text={tab.label}
                                icon={tab.icon}
                                margin={tab.margin}
                                height="25px"
                                left="-15px"
                                position="relative"
                                viewBox="0 0 24 24"
                                pathname="M21 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zm-1 14H4V6h16v12zm-7-7H6v5h7v-5zm-1 4H7v-3h5v3zm2-2h4v1h-4v-1zm0 2h4v1h-4v-1zm0-4h4v1h-4v-1zm4-1H6V8h12v2z"
                            />}
                        />
                    )}
                </Tabs>
                <SvgIcon
                    top="1px"
                    left="30px"
                    height="17px"
                    position="relative"
                    viewBox="0 0 24 24"
                    pathname="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                <input className={style.navbar_input} placeholder="Search for an account, site or an IP" style={{ background: "gray", borderRadius: "30px", minWidth: "260px", padding: "10px 40px", border: "1px solid" }} />
                <SideBorder margin="0 30px" />
                <div style={{ marginLeft: "30px", display: "flex" }}>
                    {[{ label: "Help", icon: "icon" }, { label: "Account", icon: "icon" }].map(tab =>
                        <IconAndText
                            key={Math.random()}
                            text={tab.label}
                            icon={tab.icon}
                            margin="0 20px "
                            height="25px"
                            left="0"
                            position="relative"
                            viewBox="0 0 24 24"
                            pathname="M21 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zm-1 14H4V6h16v12zm-7-7H6v5h7v-5zm-1 4H7v-3h5v3zm2-2h4v1h-4v-1zm0 2h4v1h-4v-1zm0-4h4v1h-4v-1zm4-1H6V8h12v2z"
                        />
                    )}
                </div>

            </div>
        </div>)
}