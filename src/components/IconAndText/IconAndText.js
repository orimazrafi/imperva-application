import React from 'react'
import { SvgIcon } from '../SvgIcon/SvgIcon';
import style from "./style.module.scss"
export const IconAndText = props => {
    return <div className={style.icon_and_text_wrapper} style={{ display: "flex" }}>
        {props.icon ?
            <div>
                <SvgIcon
                    {...props}
                />
            </div>
            : null}
        <div style={{ margin: props.margin }}>
            {props.text}
        </div>
    </div>
}