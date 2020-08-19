import React from 'react'
import { MutedTextElement } from './../../elements';
export const MutedText = props => {
    return <MutedTextElement {...props}>{props.children}</MutedTextElement>
}