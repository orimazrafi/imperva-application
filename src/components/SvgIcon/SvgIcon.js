import React from 'react'
import { SvgIconElement } from '../../elements'

export const SvgIcon = props => {
    return (
        <SvgIconElement {...props} viewBox={props.viewBox ? props.viewBox : "0 0 292.362 292.362"}>
            <g>
                <path d={props.pathname} />
            </g>

        </SvgIconElement>)
}