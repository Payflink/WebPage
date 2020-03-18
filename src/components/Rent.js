import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'

import '../styles/rc-slider.css'
import tablet from '../images/tablet.svg'
import PriceTag from './PriceTag'
import { androidRentPrice, iPadRentPrice } from './prices'
import { Right, Button, BackNext, Left } from '../styles'


export default injectIntl(({ intl, tablets }) => {
  return (
    <>
      <div
        css={`
          display: flex;
          align-items: flex-start;
        `}
      >
        <div
          css={`
            @media (min-width: 600px) {
              flex: 1;
              background-image: url(${tablet});
              background-position: center;
              background-repeat: no-repeat;
              background-size: contain;
              height: 10em;
              margin-top: 2em;
              padding-right: 50px;
            }
          `}
        />
        <div
          css={`
            flex: 3;
          `}
        >
          <h2>{intl.formatMessage({ id: 'pricing.rent.title' })}</h2>
          <p>{intl.formatMessage({ id: 'pricing.rent.description' })}</p>
          <h3>{intl.formatMessage({ id: 'pricing.rent.android.title' })}</h3>
          <p>
            {intl.formatMessage({ id: 'pricing.rent.android.description' })}
            <br />
            {intl.formatMessage({
              id: 'pricing.rent.android.minimalRental',
            })}
          </p>
          <PriceTag price={androidRentPrice} />
          <Right>
            <Link
              to={`/pricing/pro/enrol/${tablets}/android`}
              activeClassName="active"
            >
              <Button>
                {intl.formatMessage({
                  id: 'pricing.rent.android.continue',
                })}
              </Button>
            </Link>
          </Right>
          <h3>{intl.formatMessage({ id: 'pricing.rent.iPad.title' })}</h3>
          <p>
            {intl.formatMessage({ id: 'pricing.rent.iPad.description' })}
            <br />
            {intl.formatMessage({
              id: 'pricing.rent.iPad.minimalRental',
            })}
          </p>
          <PriceTag price={iPadRentPrice} />

          <Right>
            <Link
              to={`/pricing/pro/enrol/${tablets}/ipad`}
              activeClassName="active"
            >
              <Button>
                {intl.formatMessage({
                  id: 'pricing.rent.iPad.continue',
                })}
              </Button>
            </Link>
          </Right>
        </div>
      </div>
      <BackNext>
        <Right>
          <Link to={`/pricing/pro/enrol/${tablets}/none`}>
            <Button>
              {intl.formatMessage({ id: 'pricing.rent.noTablets' })}
            </Button>
          </Link>
        </Right>
        <Left>
          <Button onClick={() => window.history.back()}>
            {intl.formatMessage({ id: 'pricing.back' })}
          </Button>
        </Left>
      </BackNext>
    </>
  )
})
