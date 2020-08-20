import React from 'react'
import { SvgIcon } from './../SvgIcon/SvgIcon';
import { MutedText } from '../MutedText/MutedText';
export const TwoRowsAndIcon = (props) => {
    return <div>
        <div style={{ display: "flex", marginRight: "80px" }}>
            <MutedText {...props} >
                {props.headline}
            </MutedText>
            <SvgIcon

                {...props}
                position="relative"
                left={props.left}
                pathname={props.pathname}
            />
        </div>
        <div style={{ fontSize: props.strongLowerText && "20px", fontWeight: props.strongLowerText && "bold" }}>
            {props.lowerText}
        </div>
    </div>
}