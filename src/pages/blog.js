/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FormattedMessage, injectIntl, Link } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Button from '../styles/Button'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Container } from '../styles'

const Lead = styled.div`
  margin-bottom: 2em;
`

const Date = styled.div`
  margin-top: -2em;
  margin-bottom: 2em;
  font-size: 0.8em;
  font-weight: bold;
  opacity: 0.7;
`

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h1>Blog</h1>

      {blogs.map(blog => (
        <BlogListEntry key={blog.node.frontmatter.slug} blog={blog} />
      ))}
    </div>
  )
}

const BlogListEntry = ({ blog }) => (
  <>
    <h2>{blog.node.frontmatter.title}</h2>
    <Date>{blog.node.frontmatter.date}</Date>
    <Lead>{blog.node.excerpt}</Lead>
    <Link to={`/blog/${blog.node.frontmatter.slug}`}>
      <Button>
        <FormattedMessage id="blog.readmore" />
      </Button>
    </Link>
  </>
)

const BlogPage = ({ intl, data }) => {
  const blogs = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.lang === intl.locale
  )
  return (
    <Layout>
      <SEO title="Blog" />
      <Container
        css={`
          padding-bottom: 6em;
        `}
      >
        <BlogList blogs={blogs} />
      </Container>
    </Layout>
  )
}

export default injectIntl(BlogPage)

export const query = graphql`
  query BlogPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            slug
            lang
          }
        }
      }
    }
  }
`
