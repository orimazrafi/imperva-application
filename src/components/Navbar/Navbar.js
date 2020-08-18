import React from 'react'
import { SideBorder } from './../SideBorder/SideBorder';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { IconAndText } from '../IconAndText/IconAndText';
export const Navbar = props => {
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
                <div style={{ width: "40%", display: "flex", justifyContent: "space-between" }}>
                    {["Home", "Application", "Edge", "Data"].map(tab => <div key={Math.random()} >
                        <IconAndText
                            text={tab}
                        />
                    </div>)}
                </div>
            </div>
        </div>)
}