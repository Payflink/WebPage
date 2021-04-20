import React from 'react'
import styled from 'styled-components'

const CloseButton = () => {
  return (
    <CloseButtonDiv>
      <svg viewBox="0 0 10 10">
        <path fill="none" d="M 0,0 L10,10 M10,0 L0,10" />
      </svg>
    </CloseButtonDiv>
  )
}

export default CloseButton

const CloseButtonDiv = styled.button`
  z-index: 1000;
  height: 2rem;
  width: 2rem;
  align-self: center;
  border: solid 1px grey;
  border-radius: 3px;
  background: grey;
  color: ${p => p.theme.primary};
  outline: none;
  opacity: 0.8;

  svg {
    height: 1.5em;
    width: 1.5em;
    stroke: currentColor;
    stroke-width: 1px;
  }

  &:active {
    color: grey;
    background: ${p => p.theme.primary};
  }
`
