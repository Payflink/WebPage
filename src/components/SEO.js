/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectIntl } from 'gatsby-plugin-intl'

const gastonUrl = 'https://gastonsolution.com'

function SEO({ intl, description, image, meta, title }) {
  const metaDescription =
    description || `${intl.formatMessage({ id: 'description' })}`

  const metaImage = image
    ? [
        { property: 'image', content: `${gastonUrl}${image.fixed.src}` },
        { property: 'og:image', content: `${gastonUrl}${image.fixed.src}` },
        {
          property: 'og:image:width',
          content: image.fixed.width,
        },
        {
          property: 'og:image:height',
          content: image.fixed.height,
        },
        {
          property: 'twitter:image',
          content: `${gastonUrl}${image.fixed.src}`,
        },
      ]
    : []

  return (
    <Helmet
      htmlAttributes={{ lang: `${intl.formatMessage({ id: 'lang' })}` }}
      title={title}
      titleTemplate={`%s | ${intl.formatMessage({ id: 'title' })}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `${intl.formatMessage({ id: 'author' })}`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(meta)
        .concat(metaImage)}
    />
  )
}

SEO.defaultProps = {
  meta: [],
  description: ``,
  image: undefined,
}

SEO.propTypes = {
  description: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default injectIntl(SEO)
