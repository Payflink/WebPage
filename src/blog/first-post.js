import React from 'react'
import { FormattedHTMLMessage, FormattedMessage } from 'gatsby-plugin-intl'

const FirstPost = () => (
  <>
    <h2>
      <FormattedMessage id="blog.title" />
    </h2>
    <p
      css={`
        font-weight: bold;
      `}
    >
      <FormattedMessage id="blog.lead" />
    </p>
    <FormattedHTMLMessage id="blog.content" />
  </>
)

export default FirstPost
