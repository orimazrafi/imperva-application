import React from 'react';
import style from "./style.module.scss";
import { MutedText } from '../MutedText/MutedText';
import { AccordionSummary, Accordion } from '@material-ui/core';
import { SvgIcon } from './../SvgIcon/SvgIcon';
import { accordionList } from './../../helpers';
export const Sidebar = props => {
    return (
        <div className={style.sidebar_wrapper} >
            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <div style={{ padding: "30px 0 0 10px" }}>
                    <MutedText uppercase margin="20px 0">
                        Analitics
                    </MutedText>
                    <div style={{ margin: "20px 0" }} >Attack Analitics</div>
                    <div style={{ fontWeight: "bold", display: "flex", justifyContent: "space-between" }}>
                        <div>
                            Reputation intelligence
                </div>
                        <div className={style.beta_btn} > BETA</div>
                    </div>
                    <MutedText uppercase margin="20px 0">
                        Services
                </MutedText>
                </div>
                <div className="sidebar-accordion">
                    {accordionList.map(accordion =>
                        <Accordion key={Math.random()}>
                            <AccordionSummary
                                expandIcon={
                                    <SvgIcon
                                        viewBox="0 0 24 24"
                                        fill="black"
                                        pathname="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                                    />
                                }
                                aria-controls="panel1a-content"
                            >
                                {accordion.headline}
                            </AccordionSummary>
                            {accordion.subText.map((text, index) =>
                                <div key={Math.random()} style={{ padding: index === 0 ? "0 0 0 30px" : "20px 0 0 30px", fontWeight: index === 0 && "bold", marginBottom: index === accordion.subText.length - 1 && "10px" }}>{text}
                                    {accordion.subText.length - 1 === index && <div style={{ fontWeight: "bold", float: "right", marginRight: "10px", fontSize: "11px", marginTop: "4px", background: "#dfa907" }}>INTERNAL</div>}
                                </div>
                            )}

                        </Accordion>
                    )}
                </div>
                <div style={{ margin: "auto auto 0 auto", background: "white", width: "100%" }}>
                    <div style={{ textAlign: "center", background: "white", width: "100%", height: "40px", borderTop: "3px solid gray" }}>
                        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"} style={{ height: "20px", marginTop: "15px" }} alt="hamborger-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}