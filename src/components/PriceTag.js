/* eslint-disable react/style-prop-object */
import React, { useContext } from 'react'
import styled from 'styled-components'
import { FormattedNumber, FormattedMessage } from 'gatsby-plugin-intl'

import CurrencyContext from '../contexts/CurrencyContext'

const PriceTag = ({ price }) => {
  const { currency } = useContext(CurrencyContext)

  return (
    <Price>
      <FormattedNumber
        value={price}
        style="currency"
        currency={currency}
        maximumFractionDigits={0}
        minimumFractionDigits={0}
      />
      <PriceUnit>
        <FormattedMessage id="pricing.plans.gaston-menu.priceUnit" />
      </PriceUnit>
    </Price>
  )
}
export const Price = styled.div`
  color: ${p => p.theme.primary};
  font-size: 1.5em;
  font-weight: bold;
  padding: 1em 0em;
`
export const PriceUnit = styled.span`
  font-size: 50%;
`
export default PriceTag
