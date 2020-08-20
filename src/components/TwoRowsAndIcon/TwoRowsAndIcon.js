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
                position="relative"
                top="12px"
                left={props.left}
                pathname={props.pathname}
            />
        </div>
        <div>
            {props.lowerText}
        </div>
    </div>
}