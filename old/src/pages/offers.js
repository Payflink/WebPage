import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'

import styled from 'styled-components'
import { Router } from '@reach/router'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Container } from '../styles'
import Plans from '../components/Plans'
import Enrol from '../components/Enrol'
import Thanks from '../components/Thanks'
import CurrencyContext from '../contexts/CurrencyContext'

const StyledButton = styled.button`
  background: none;
  color: ${p => (p.active ? p.theme.primary : 'inherit')};
  border: none;
  font: inherit;
  cursor: pointer;
`

const Button = ({ currentCurrency, setCurrency }) => ({
  currency,
  children,
  className,
}) => (
  <StyledButton
    type="button"
    className={className}
    onClick={() => setCurrency(currency)}
    active={currentCurrency === currency}
  >
    {children}
  </StyledButton>
)

const OffersPage = ({ intl }) => {
  const { setCurrency, currency } = React.useContext(CurrencyContext)
  const CurrencyButton = Button({ currentCurrency: currency, setCurrency })
  return (
    <Layout>
      <SEO title="Offers" />
      <Container>
        <div
          css={`
            display: flex;
            justify-content: space-between;
            align-items: baseline;
          `}
        >
          <h1>
            <FormattedMessage id="offers.heading" />
          </h1>
          <div>
            <CurrencyButton currency="USD">$</CurrencyButton>
            <CurrencyButton currency="EUR">€</CurrencyButton>
            <CurrencyButton currency="CHF">CHF</CurrencyButton>
          </div>
        </div>
        <Router basepath={`/${intl.locale}/offers`}>
          <Plans default />
          <Enrol plan="gaston-menu" path="/gaston-menu/enrol/" />
          <Enrol plan="gaston-order" path="/gaston-order/enrol/" />
          <Enrol plan="gaston-pay" path="/gaston-pay/enrol/" />
          <Thanks path="/thanks" />
        </Router>
      </Container>
    </Layout>
  )
}

export default injectIntl(OffersPage)
