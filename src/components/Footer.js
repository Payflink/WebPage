import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.footer`
  grid-area: Footer;
  padding: 0 1rem;
  color: ${p => p.theme.primary};

  @media (min-width: 600px) {
    padding: 0 2rem;
  }
`

const Footer = () => (
  <FooterStyle>
    <p>
      © 2019 • Gaston • An exploration by{' '}
      <a href="https://apptiva.ch">Apptiva</a> • Switzerland
    </p>
  </FooterStyle>
)

export default Footer
