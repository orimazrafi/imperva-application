import React from 'react'
import { SvgIconElement } from '../../elements'

export const SvgIcon = props => {
    return (
        <div style={{ order: props.iconOrder }}>
            <SvgIconElement {...props} viewBox={props.viewBox ? props.viewBox : "0 0 292.362 292.362"} className={"hover"}>
                <g>
                    <path d={props.pathname} />
                </g>

            </SvgIconElement>
            {props.secondPathname &&
                <SvgIconElement {...props} viewBox={props.viewBox ? props.viewBox : "0 0 292.362 292.362"} className={"hover"}>
                    <g>
                        <path d={props.secondPathname} />
                    </g>

                </SvgIconElement>
            }
        </div >)
}