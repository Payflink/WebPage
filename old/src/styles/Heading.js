import styled, { css } from 'styled-components'

export const H3 = styled.h3`
  ${p => p.large && 'font-size: 1.4em;'}
`
export const H1 = styled.h1`
  ${p =>
    p.small &&
    css`
      font-size: 1rem;
      @media (min-width: 600px) {
        font-size: 1.2rem;
      }
    `}
`
