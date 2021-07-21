import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Container } from '../styles'

const ContactPage = ({ intl }) => (
  <Layout>
    <SEO title="Contact" />
    <Container>
      <h1>{intl.formatMessage({ id: 'contact.contact' })}</h1>
      <h2>Gaston by Apptiva</h2>
      <h3>{intl.formatMessage({ id: 'contact.email' })}</h3>
      <p>support@gastonsolution.com</p>
      <h3>{intl.formatMessage({ id: 'contact.sales' })}</h3>
      <p>+41 41 322 26 26</p>
      <h3>{intl.formatMessage({ id: 'contact.support' })}</h3>
      <p>+41 41 562 01 11</p>
      <h3>{intl.formatMessage({ id: 'contact.address' })}</h3>
      <address>
        Neuenkirchstrasse 19 <br />
        6203 Sempach Station <br />
        {intl.formatMessage({ id: 'contact.switzerland' })}
      </address>
    </Container>
  </Layout>
)

export default injectIntl(ContactPage)
