import React, { useState } from 'react'
import Slider from 'rc-slider'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import PriceTag from './PriceTag'
import Button from '../styles/Button'
import { totalProPrice } from './prices'
import BackNext from '../styles/BackNext'
import Right from '../styles/Right'
import Left from '../styles/Left'

const query = graphql`
  {
    items: allMarkdownRemark {
      nodes {
        frontmatter {
          name
          price
          image {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default injectIntl(({ intl }) => {
  const tablets = useStaticQuery(query).items.nodes.map(
    ({ frontmatter }) => frontmatter
  )
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
      <h3 css="font-size: 1.4em; margin-top: 4em;">
        Welches Tablet möchten sie mieten?
      </h3>
      <ul css="display: grid; list-style: none; padding: 0; gap: 1em; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));">
        {tablets.map(({ name, price, image }) => (
          <li
            css={`
              border: 1px solid ${p => p.theme.primary};
              border-radius: 4px;
              padding: 1em;
            `}
          >
            <p css="margin: 0">{name}</p>
            <Img fluid={image.childImageSharp.fluid} />
            <p css="margin: 0">{price}</p>
          </li>
        ))}
      </ul>
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
          <Link to={`/pricing/pro/rent/${tabletCount}`}>
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
