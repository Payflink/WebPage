import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { injectIntl } from 'gatsby-plugin-intl'

const FooterStyle = styled.footer`
  grid-area: Footer;
  padding: 0 1rem;
  color: ${(p) => p.theme.primary};

  @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
    padding: 0 2rem;
  }
  .active {
    font-weight: bold;
  }
`

const Footer = ({ intl }) => (
  <FooterStyle>
    <p>
      © 2019 - {new Date().getFullYear()} Gaston
      <br />
      {`${intl.formatMessage({ id: 'footer.by' })} `}
      <a href="https://apptiva.ch">Apptiva</a>
      <br />
      {intl.formatMessage({ id: 'footer.switzerland' })}
    </p>
    <p>
      {intl.formatMessage({ id: 'contact.sales' })}&ensp;
      <a href="+41413222626">+41 41 322 26 26</a>
      <br />
      {intl.formatMessage({ id: 'contact.support' })}&ensp;
      <a href="+41415620111">+41 41 562 01 11</a>
    </p>
    <p>
      <Link to="/en" activeClassName="active" partiallyActive>
        en
      </Link>
      &emsp;
      <Link to="/de" activeClassName="active" partiallyActive>
        de
      </Link>
    </p>
  </FooterStyle>
)

export default injectIntl(Footer)
