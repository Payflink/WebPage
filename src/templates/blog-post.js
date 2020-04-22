import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container
        css={`
          padding-bottom: 6em;
        `}
      >
        <h2>{data.markdownRemark.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostByID($lang: String!, $slug: String!) {
    markdownRemark(frontmatter: { lang: { eq: $lang }, slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 300)
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        slug
        lang
      }
    }
  }
`
