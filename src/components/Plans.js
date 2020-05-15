import React, { useContext } from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'

import '../styles/rc-slider.css'
import styled, { css } from 'styled-components'
import { Button as DefaultButton } from '../styles'
import PriceTag, { Price, PriceUnit } from './PriceTag'
import { takeawayPercentageFee, menuPrice, orderPrice } from './prices'
import CurrencyContext from '../contexts/CurrencyContext'

const PlanWrapper = styled.div`
  display: grid;
  gap: 1em;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Plan = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
      }
    `};
`

const TextWrapper = styled.div`
  padding-bottom: 1rem;
`

const PriceWrapper = styled.div``

const PlanHeading = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
`

const PlanSubtitle = styled.p`
  flex: 1 0 auto;
  font-weight: bold;
  margin-top: 1.2em;
`

const PlanText = styled.p`
  margin: 0;
  padding-bottom: 1rem;
`

const FeatureList = styled.ul`
  margin: 0;
`

const SelectPlanButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`

const AdditionallyPlanWrapper = styled.div`
  padding-top: 5em;
`

const ProFeatureWrapper = styled.div`
  display: grid;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;

    & div {
      margin: 0 auto;
    }
  }
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
  return (
    <>
      <p>{intl.formatMessage({ id: 'offers.subtitle' })}</p>
      <PlanWrapper>
        <Plan>
          <TextWrapper>
            <PlanHeading>
              {intl.formatMessage({ id: `offers.plans.gaston-menu.name` })}
            </PlanHeading>
            <PlanText>
              {intl.formatMessage({ id: `offers.plans.gaston-menu.text` })}
            </PlanText>
            <FeatureList>
              <li>
                {intl.formatMessage({
                  id: `offers.plans.gaston-menu.feature1`,
                })}
              </li>
              <li>
                {intl.formatMessage({
                  id: `offers.plans.gaston-menu.feature2`,
                })}
              </li>
              <li>
                {intl.formatMessage({
                  id: `offers.plans.gaston-menu.feature3`,
                })}
              </li>
            </FeatureList>
          </TextWrapper>
          <PriceWrapper>
            <PriceTag price={menuPrice} />
            <SelectPlanButtonWrapper>
              <SelectPlanButton to="/offers/configure/gaston-menu">
                {intl.formatMessage({ id: `offers.test` })}
              </SelectPlanButton>
            </SelectPlanButtonWrapper>
          </PriceWrapper>
        </Plan>
        <Plan>
          <TextWrapper>
            <PlanHeading>
              {intl.formatMessage({ id: `offers.plans.gaston-order.name` })}
            </PlanHeading>
            <PlanText>
              {intl.formatMessage({ id: `offers.plans.gaston-order.text` })}
            </PlanText>
            <PlanText>
              + {intl.formatMessage({ id: 'offers.plans.gaston-order.text2' })}
            </PlanText>
          </TextWrapper>
          <PriceWrapper>
            <PriceTag price={orderPrice} />
            <SelectPlanButtonWrapper>
              <SelectPlanButton to="/offers/configure/gaston-order">
                {intl.formatMessage({ id: `offers.test` })}
              </SelectPlanButton>
            </SelectPlanButtonWrapper>
          </PriceWrapper>
        </Plan>
        <Plan>
          <TextWrapper>
            <PlanHeading>
              {intl.formatMessage({ id: 'offers.plans.gaston-pay.name' })}
            </PlanHeading>
            <PlanText>
              {intl.formatMessage({ id: 'offers.plans.gaston-pay.text' })}
            </PlanText>
            <PlanText>
              + {intl.formatMessage({ id: 'offers.plans.gaston-pay.text2' })}
            </PlanText>
          </TextWrapper>
          <PriceWrapper>
            <PriceTag price={orderPrice} />
            <Price style={{ marginTop: '-3rem' }}>
              + {takeawayPercentageFee}%
              <PriceUnit>
                {intl.formatMessage({
                  id: 'offers.plans.perOrder',
                })}
              </PriceUnit>
            </Price>
            <SelectPlanButtonWrapper>
              <SelectPlanButton to="/offers/configure/gaston-pay">
                {intl.formatMessage({ id: `offers.test` })}
              </SelectPlanButton>
            </SelectPlanButtonWrapper>
          </PriceWrapper>
        </Plan>
      </PlanWrapper>
      <AdditionallyPlanWrapper>
        <Plan>
          <TextWrapper>
            <PlanHeading>
              {intl.formatMessage({ id: 'offers.plans.gaston-pro.name' })}
            </PlanHeading>
            <ProFeatureWrapper>
              <TextWrapper>
                <PlanSubtitle>
                  {intl.formatMessage({
                    id: 'offers.plans.gaston-pro.subtitle1',
                  })}
                </PlanSubtitle>
                <FeatureList>
                  <li>
                    {intl.formatMessage({
                      id: 'offers.plans.gaston-pro.feature1',
                    })}
                  </li>
                  <li>
                    {intl.formatMessage({
                      id: 'offers.plans.gaston-pro.feature2',
                    })}
                  </li>
                  <li>
                    {intl.formatMessage({
                      id: 'offers.plans.gaston-pro.feature3',
                    })}
                  </li>
                  <li>
                    {intl.formatMessage({
                      id: 'offers.plans.gaston-pro.feature4',
                    })}
                  </li>
                  <li>
                    {intl.formatMessage({
                      id: 'offers.plans.gaston-pro.feature5',
                    })}
                  </li>
                  <li>
                    {intl.formatMessage({
                      id: 'offers.plans.gaston-pro.feature6',
                    })}
                  </li>
                </FeatureList>
              </TextWrapper>
              <TextWrapper>
                <PlanSubtitle>
                  {intl.formatMessage({
                    id: 'offers.plans.gaston-pro.subtitle2',
                  })}
                </PlanSubtitle>
                <PlanText>
                  {intl.formatMessage({ id: 'offers.plans.gaston-pro.text' })}
                </PlanText>
              </TextWrapper>
            </ProFeatureWrapper>
          </TextWrapper>
          <SelectPlanButtonWrapper>
            <SelectPlanButton to="/contact">
              {intl.formatMessage({ id: `offers.contactUs` })}
            </SelectPlanButton>
          </SelectPlanButtonWrapper>
        </Plan>
      </AdditionallyPlanWrapper>
    </>
  )
})
