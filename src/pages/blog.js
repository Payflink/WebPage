/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Router } from '@reach/router'
import { FormattedMessage, injectIntl, Link } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import Button from '../styles/Button'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'
import FirstPost from '../blog/first-post'
import TakeAway from '../blog/take-away'

const Lead = styled.div`
  margin-bottom: 2em;
`

const BlogList = () => (
  <div>
    <h1>Blog</h1>
    <h2>Neu: Take Away und Home Delivery</h2>
    <Lead>
      Restaurants wurden mit der Corona-Krise eimpfindlich getroffen. Es braucht
      jetzt Kreativität und neue Wege um wieder zum Umsatz vor der Krise zu
      kommen. Wir haben uns überlegt, wie wir die Betriebe dabei unterstützen
      können.
    </Lead>
    <Link to="/blog/take-away">
      <Button>
        <FormattedMessage id="blog.readmore" />
      </Button>
    </Link>
    <h2>
      <FormattedMessage id="blog.title" />
    </h2>
    <Lead>
      <FormattedMessage id="blog.lead" />
    </Lead>
    <Link to="/blog/problems">
      <Button>
        <FormattedMessage id="blog.readmore" />
      </Button>
    </Link>
  </div>
)

const BlogPage = ({ intl }) => (
  <Layout>
    <SEO title="Blog" />
    <Container
      css={`
        padding-bottom: 6em;
      `}
    >
      <Router basepath={`/${intl.locale}/blog`}>
        <BlogList default />
        <FirstPost path="/problems" />
        <TakeAway path="/take-away" />
      </Router>
    </Container>
  </Layout>
)

export default injectIntl(BlogPage)
