import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}
    render={(data) => (
      <Fragment>
        <Helmet
          encodeSpecialCharacters={true}
          defaultTitle={data.site.siteMetadata.title}
        >
          <html lang="pt-BR" />
          <meta name="author" content={data.site.siteMetadata.author} />
          <meta name="description" content={data.site.siteMetadata.description} />
          <meta property="og:url" content="https://piii.js.org/" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:description" content={data.site.siteMetadata.description} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@theuves" />
          <meta name="twitter:title" content={data.site.siteMetadata.title} />
          <meta name="twitter:description" content={data.site.siteMetadata.title} />
          <link rel="canonical" href="https://piii.js.org/" />
        </Helmet>
        {children}
      </Fragment>
    )}
  />
)

export default Layout