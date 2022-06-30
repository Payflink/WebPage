import React from 'react'
import { injectIntl, FormattedHTMLMessage } from 'gatsby-plugin-intl'

const Thanks = ({ intl }) => (
  <>
    <h2 css="margin-top: 0">{intl.formatMessage({ id: 'thanks.title' })}</h2>
    <p>
      <FormattedHTMLMessage id="thanks.instructions" />
    </p>
  </>
)

export default injectIntl(Thanks)
