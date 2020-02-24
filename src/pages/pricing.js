import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'

import styled from 'styled-components'
import { Router } from '@reach/router'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'
import Plans from '../components/Plans'
import TabletCount from '../components/TabletCount'
import Rent from '../components/Rent'
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

const PricingPage = ({ intl }) => {
  const { setCurrency, currency } = React.useContext(CurrencyContext)
  const CurrencyButton = Button({ currentCurrency: currency, setCurrency })
  return (
    <Layout>
      <SEO title="Pricing" />
      <Container>
        <div
          css={`
            display: flex;
            justify-content: space-between;
            align-items: baseline;
          `}
        >
          <h1>
            <FormattedMessage id="pricing.heading" />
          </h1>
          <div>
            <CurrencyButton currency="USD">$</CurrencyButton>
            <CurrencyButton currency="EUR">€</CurrencyButton>
            <CurrencyButton currency="CHF">CHF</CurrencyButton>
          </div>
        </div>
        <Router basepath={`/${intl.locale}/pricing`}>
          <Plans default />
          <Enrol plan="solo" path="/solo/enrol" />
          <TabletCount path="/pro/tabletcount" />
          <Rent path="/pro/rent/:tablets" />
          <Enrol plan="pro" path="/pro/enrol/:tablets/:rent" />
          <Thanks path="/thanks" />
        </Router>
      </Container>
    </Layout>
  )
}

export default injectIntl(PricingPage)
