/* eslint-disable react/style-prop-object */
import React, { useContext } from 'react'
import styled from 'styled-components'
import { FormattedMessage, FormattedNumberParts } from 'gatsby-plugin-intl'

import CurrencyContext from '../contexts/CurrencyContext'

const PriceTag = ({ price, className }) => {
  const { currency } = useContext(CurrencyContext)

  return (
    <Price className={className}>
      <FormattedNumberParts
        value={price}
        style="currency"
        currency={currency}
        maximumFractionDigits={2}
        minimumFractionDigits={0}
      >
        {parts => {
          return parts.map(({ type, value }) => {
            switch (type) {
              case 'currency':
                return <small>{value}</small>
              case 'integer':
                return <b>{value}</b>
              case 'decimal':
                return <small css="font-size: 0.5em">{value}</small>
              case 'fraction':
                return <small css="font-size: 0.5em">{value}</small>
              default:
                return value
            }
          })
        }}
      </FormattedNumberParts>
      <PriceUnit>
        <FormattedMessage id="pricing.plans.pro.priceUnit" />
      </PriceUnit>
    </Price>
  )
}
export const Price = styled.p`
  color: ${p => p.theme.primary};
  font-size: 1.8em;
  font-weight: bold;
  padding: 1em 0em;
  margin: 0;
`
export const PriceUnit = styled.span`
  font-size: 50%;
`
export default PriceTag
