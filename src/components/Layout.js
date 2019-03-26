import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// Components
import StyledGlobal from './styled/StyledGlobal'

import imgUrlIcon from '../images/icon.png'

export default ({ articleTitle, children }) => (
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
    render={({site: { siteMetadata: { title, description, author } }}) => (
      <Fragment>
        <Helmet
          encodeSpecialCharacters={true}
          defaultTitle={title}
          title={articleTitle ? `${title} | ${articleTitle}` : title}
        >
          <html lang="pt-BR" />

          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

          <link rel="preconnect" href="https://codepen.io/" />
          <link rel="preconnect" href="https://fonts.googleapis.com/" />
          <link rel="preconnect" href="https://use.fontawesome.com/" />

          <meta name="author" content={author} />
          <meta name="description" content={description} />

          <meta property="og:url" content="https://piii.js.org/" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@theuves" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={title} />

          <link rel="canonical" href="https://piii.js.org/" />
          <link rel="favicon" href={imgUrlIcon} />
        </Helmet>

        <StyledGlobal />

        <main>
          {children}
        </main>
      </Fragment>
    )}
  />
)
