import styled, { css } from 'styled-components'

export const SideBorderElement = styled.div`
    border-left:1px solid gray;
    height:30px;
    align-self:center;
    margin:0 20px 0 25px;
  ${props =>
        props.margin &&
        css`
      margin: ${props.margin};
    `};
`
export const SvgIconElement = styled.svg`
height:15px;
fill: white;
${props => props.fill && css`fill:${props.fill}`}
${props => props.position &&
        css`
position:${props.position};
top:${props.top};
left:${props.left};
        `
    }
${props => props.height &&
        css`
height:${props.height};
        `
    }
`
export const MutedTextElement = styled.div`
color:gray;
font-weight:500;
${props => props.uppercase && css`
text-transform:uppercase;
`}
${props => props.margin && css`
margin:${props.margin};
`}

`
