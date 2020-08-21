import React from 'react'
import { SvgIcon } from '../SvgIcon/SvgIcon';
import style from "./style.module.scss"
export const IconAndText = props => {
    return <div className={style.icon_and_text_wrapper} style={{ display: "flex", justifyContent: props.justifyContent }}>
        {props.icon ?
            <div style={{ order: props.iconOrder }}>
                <SvgIcon
                    {...props}
                />
            </div>
            : null}
        <div style={{ margin: props.margin, order: props.textOrder, fontSize: props.fontSize, fontWeight: props.fontWeight }}>
            {props.text}
        </div>
    </div>
}