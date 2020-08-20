import React from 'react'
export const CardContainer = props => {
    return <div style={{ background: "white", border: "2px solid var(--light-border)", display: "flex", paddingLeft: "10px" }}>
        {props.children}
    </div>
}