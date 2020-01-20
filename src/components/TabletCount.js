import React, { useState } from 'react'
import Slider from 'rc-slider'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import PriceTag from './PriceTag'
import Button from '../styles/Button'
import { totalProPrice } from './prices'
import BackNext from '../styles/BackNext'
import Right from '../styles/Right'
import Left from '../styles/Left'
import gtagEvent from '../lib/gtagEvent'

const trackEvent = count => () =>
  gtagEvent('amount_chosen', {
    event_category: 'order',
    value: count,
  })

export default injectIntl(({ intl }) => {
  const [tabletCount, setTabletCount] = useState(10)

  const maxTablets = 50

  const tabletCountChanged = count => {
    setTabletCount(count)
  }
  return (
    <>
      <h2>Gaston Menu Pro</h2>
      <h3
        css={`
          font-size: 1.4em;
        `}
      >
        {intl.formatMessage({ id: 'pricing.plans.pro.howManyTablets' })}
      </h3>
      <Slider
        min={2}
        max={maxTablets}
        defaultValue={tabletCount}
        marks={{
          2: <div>2</div>,
          10: <div>10</div>,
          20: <div>20</div>,
          30: <div>30</div>,
          40: <div>40</div>,
          50: <div>50</div>,
        }}
        onChange={tabletCountChanged}
      />
      <div
        css={`
          margin-top: 3em;
        `}
      >
        <h3 css="margin: 4em 0 0;">
          {intl.formatMessage(
            {
              id: 'pricing.plans.pro.totalPrice',
            },
            { tabletCount }
          )}
        </h3>
        <PriceTag css="padding: 0 0 3em;" price={totalProPrice(tabletCount)} />
      </div>
      <BackNext>
        <Right>
          <Link
            to={`/pricing?step=rent&plan=pro&tablets=${tabletCount}`}
            onClick={trackEvent(tabletCount)}
          >
            <Button>{intl.formatMessage({ id: 'pricing.continue' })}</Button>
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
