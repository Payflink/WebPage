import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.footer`
  grid-area: Footer;
  padding: 0 2rem;
  color: ${p => p.theme.primary};
`

const Footer = () => (
  <FooterStyle>
    <p>© 2019 - Gaston - An exploration by Apptiva - Switzerland</p>
  </FooterStyle>
)

export default Footer
