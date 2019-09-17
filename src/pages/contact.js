import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Container>
      <h2>Contact</h2>
      <h3>Email</h3>
      <p>contact@gaston</p>
      <h3>Phone</h3>
      <p>+41 41 322 26 26</p>
      <h3>Address</h3>
      <address>
        Neuenkirchstrasse 19 <br />
        6203 Sempach Station <br />
        Switzerland
      </address>
    </Container>
  </Layout>
)

export default ContactPage
