import React, { useContext } from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'

import '../styles/rc-slider.css'
import styled, { css } from 'styled-components'
import { Button as DefaultButton } from '../styles'
import PriceTag, { Price } from './PriceTag'
import { licensePrice, proPlanPrice, takeawayPercentageFee } from './prices'
import CurrencyContext from '../contexts/CurrencyContext'

const PlanWrapper = styled.div`
  display: grid;
  gap: 1em;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Plan = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1em;
  border-width: ${p => (p['data-recommended'] ? '3px' : '1px')};
  border-style: solid;
  border-radius: 5px;
  border-color: ${p => p.theme.primary};

  h3 {
    font-size: 2em;
    margin-bottom: 0;
  }

  ${p =>
    p['data-recommended'] &&
    css`
      margin: -2px;
      &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        content: attr(data-recommended);
        color: white;
        padding: 0.2em;
        background-color: ${p.theme.primary};
        text-align: center;
      }
    `};
`
const PlanHeading = styled.p`
  font-size: 1.5em;
  font-weight: bold;
`

const PlanText = styled.p`
  text-align: center;
  @media (min-width: 800px) {
    height: 4em;
  }
`

const PlanFeature = styled.div`
  flex: 1 0 auto;
  font-weight: bold;
  margin-top: 1.2em;
`

const FeatureNote = styled.div`
  font-size: 0.8em;
  font-weight: normal;
  @media (min-width: 800px) {
    height: 3em;
  }
`

const SelectPlanButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`

const AdditionallyPlanWrapper = styled.div`
  padding-top: 5em;
`

const AdditionallyPlanHeading = styled.h2`
  color: black;
  font-size: 1.5em;
  font-weight: bold;
`

const Spacer = styled.p`
  margin: 0.5em;
`

const SelectPlanButton = ({ to, children }) => (
  <Link to={to}>
    <DefaultButton
      css={`
        margin-bottom: 2em;
      `}
    >
      {children}
    </DefaultButton>
  </Link>
)

export default injectIntl(({ intl }) => {
  const { currency } = useContext(CurrencyContext)
  return (
    <>
      <p>{intl.formatMessage({ id: 'offers.subtitle' })}</p>
      <PlanWrapper>
        <Plan
          data-recommended={intl.formatMessage({
            id: 'offers.plans.recommended',
          })}
        >
          <PlanHeading>
            {intl.formatMessage({ id: 'offers.plans.takeaway.name' })}
          </PlanHeading>
          <PlanText>
            {intl.formatMessage({ id: 'offers.plans.takeaway.text' })}
          </PlanText>
          <PlanText>
            {intl.formatMessage({ id: 'offers.plans.takeaway.text2' })}
          </PlanText>
          <PlanFeature>
            {intl.formatMessage(
              { id: `offers.plans.takeaway.feature1` },
              { percentage: takeawayPercentageFee }
            )}
          </PlanFeature>
          <FeatureNote>
            {intl.formatMessage({
              id: 'offers.plans.takeaway.feature1-note',
            })}
          </FeatureNote>
          <PlanFeature>&nbsp;</PlanFeature>
          <FeatureNote>&nbsp;</FeatureNote>
          <Price>
            {intl.formatMessage({ id: `offers.plans.takeaway.price` })}
          </Price>
          <SelectPlanButton to="/offers/takeaway/enrol">
            {intl.formatMessage({ id: `offers.order` })}
          </SelectPlanButton>
        </Plan>
        <Plan>
          <PlanHeading>
            {intl.formatMessage({ id: `offers.plans.gaston-menu.name` })}
          </PlanHeading>
          <PlanText>
            {intl.formatMessage({ id: `offers.plans.gaston-menu.text` })}
          </PlanText>
          <PlanText>
            {intl.formatMessage({ id: 'offers.plans.gaston-menu.text2' })}
          </PlanText>
          <PlanFeature>
            {intl.formatMessage({ id: 'offers.plans.gaston-menu.feature1' })}
          </PlanFeature>
          <FeatureNote>
            {intl.formatMessage(
              {
                id: 'offers.plans.gaston-menu.feature1-note',
              },
              {
                licensePrice: intl.formatNumber(licensePrice, {
                  style: 'currency',
                  currency,
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                }),
              }
            )}
          </FeatureNote>
          <PlanFeature>
            {intl.formatMessage({ id: 'offers.plans.gaston-menu.feature2' })}
          </PlanFeature>
          <FeatureNote>
            {intl.formatMessage({
              id: 'offers.plans.gaston-menu.feature2-note',
            })}
          </FeatureNote>
          <PriceTag price={proPlanPrice} />
          <SelectPlanButtonWrapper>
            <SelectPlanButton to="/offers/test/enrol">
              {intl.formatMessage({ id: `offers.test` })}
            </SelectPlanButton>
            <Spacer />
            <SelectPlanButton to="/offers/gaston-menu/tabletcount">
              {intl.formatMessage({ id: `offers.order` })}
            </SelectPlanButton>
          </SelectPlanButtonWrapper>
        </Plan>
      </PlanWrapper>
      <AdditionallyPlanWrapper>
        <AdditionallyPlanHeading>
          {intl.formatMessage({ id: `offers.plans.tailored-offer.title` })}
        </AdditionallyPlanHeading>
        <p
          css={`
            padding-bottom: 0.75em;
          `}
        >
          {intl.formatMessage({ id: `offers.plans.tailored-offer.text` })}
        </p>
        <SelectPlanButton to="/contact">
          {intl.formatMessage({ id: `offers.contactUs` })}
        </SelectPlanButton>
      </AdditionallyPlanWrapper>
    </>
  )
})
