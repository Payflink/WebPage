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

const tabletRadioButton = (tabletType, setTabletType) => ({
  id,
  name,
  image,
  price,
  specs,
}) => {
  return (
    <label
      css={`
        position: relative;
        transition: transform ease-in 50ms;

        svg {
          fill: transparent;
          stroke: transparent;
        }

        &:hover {
          transform: translateY(-9px);
        }

        input:checked + div {
          background-color: ${p => p.theme.primary};
          color: white;

          svg {
            stroke: currentColor;
          }

          div {
            color: white !important;
          }
        }
      `}
    >
      <input
        css="appearance: none; position: absolute; height: 100%; width: 100%; cursor: pointer;"
        type="radio"
        name="type"
        value={id}
        id={id}
        onChange={() => setTabletType(id)}
        checked={tabletType === id}
      />
      <div
        css={`
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid ${p => p.theme.primary};
          border-radius: 4px;
          padding: 1em;
          transition: background-color 200ms, color 200ms;

          div {
            transition: color 200ms;
          }
          svg {
            align-self: end;
          }
        `}
      >
        <p css="margin-top: 0">{name}</p>
        {image && <Img fluid={image.childImageSharp.fluid} />}
        {specs && (
          <ul css="padding-left: 1em; ">
            <li>
              Grösse <b>{specs.size}</b>
            </li>
            <li>
              Auflösung <b>{specs.resolution}</b>
            </li>
          </ul>
        )}
        <div css="display: flex; justify-content: space-between; font-size: 0.6em; margin-top: auto;">
          <PriceTag css="padding: 1em 0 0;" price={price.oneYear} />
          <svg width="20" height="20" viewBox="-2 -2 20 20">
            <path
              d="M0,0L0,16L16,16L16,0Z"
              strokeWidth="1"
              strokeLinejoin="round"
              css={`
                stroke: ${p => p.theme.primary};
              `}
            />
            <path d="M2,8L6,12L16,0" strokeWidth="3" />
            <path d="M12,0L0,0L0,16L16,16L16,4" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </label>
  )
}

const query = graphql`
  {
    items: allMarkdownRemark(sort: { fields: frontmatter___sort, order: ASC }) {
      nodes {
        frontmatter {
          id
          name
          price {
            oneYear
            twoYears
          }
          specs {
            size
            resolution
          }
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
  console.log('tablets', tablets)

  const [tabletCount, setTabletCount] = useState(10)
  const [tabletType, setTabletType] = useState('none')

  const tabletRadioButtonWithState = tabletRadioButton(
    tabletType,
    setTabletType
  )

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
      <div>
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

      <h3 css="font-size: 1.4em; ">Welches Tablet möchten sie mieten?</h3>
      <div css="display: grid; gap: 1em; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); margin-bottom: 5em;">
        {tabletRadioButtonWithState({
          id: 'none',
          name: 'Ich habe eigene Tablets',
          image: undefined,
          price: { oneYear: 0, twoYears: 0 },
          specs: undefined,
        })}
        {tablets.map(tabletRadioButtonWithState)}
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
